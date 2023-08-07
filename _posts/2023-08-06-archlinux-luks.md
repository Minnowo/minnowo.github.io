---
layout: post
title: Arch Linux Luks Installation
date:   2023-08-06 23:17
description: Arch Linux installation steps for Luks encrypted root and swap
toc: True
tags: [note,guide]
---

<br>

# Note

This guide is incomplete, and only properly works with just the root partition, swap is not handled yet

<br>

Since there is a few steps when setting up drives with luks during the insallation, I'm going to be highlighting the steps here.

As always, start with the [installtion guide](https://wiki.archlinux.org/title/Installation_guide)

This is assuming you're booting with GPT and EFI and have already partitioned the disks.

The disk layout I'm using for this guide is as follows:

- `/dev/vda1`, 550MB, this will be the boot partition 

- `/dev/vda2`, 2GB, this will be the swap partition

- `/dev/vda3`, 20GB, this will be the root partition

Create the boot partition as nomral


<br>

# Luks on a partition

[[Luks on a partition Arch Wiki](https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#LUKS_on_a_partition)] 

<br>

## Formatting with Luks
[[Preparing non-boot partitions](https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#Preparing_non-boot_partitions)]

First we need to format the partitions.

This can be done as follows:
```sh
$ cryptsetup -y -v luksFormat /dev/sdax
```

Where:

- `/dev/sdax` is the partition you wish to format

Since I'm doing swap and root, I'm running this on `/dev/vda2` and `/dev/vda3`.

Once the partitions have been luks formatted, we need to put a file system on them.

<br>

## Opening partitions

First we need to unlock the partitions.

This can be done as follows:
```sh
$ cryptsetup open /dev/sdax <name>
```

Where:

- `/dev/sdax` is the luks formatted partition you want to open

- `<name>` is the name you wish to call the unlocked partition

Once opened you will find them in `/dev/mapper/<name>`.

<br>

## Closing partitions

You should close and re-open newly made partitions to make sure everything is working properly.

This can close the luks partitions like so:
```sh
$ cryptsetup close <name>
```

Where:

- `<name>` is the name you called the unlocked partition

Once opened you will find them in `/dev/mapper/<name>`.

<br>

## Formatting partitions 

[[Formatting partitions](https://wiki.archlinux.org/title/Installation_guide#Format_the_partitions)]

For the root partition, you get your pick of [file systems](https://wiki.archlinux.org/title/File_systems).

I'm going to be using [btrfs](https://wiki.archlinux.org/title/Btrfs), but [ext4](https://wiki.archlinux.org/title/Ext4) is probably the most common.

For most filesystem you can make the like so:
```sh
$ mkfs.<fs> /dev/mapper/<name>
```

Where:

- `<fs>` is the filesystem to create (in this case `btrfs` or `ext4`)

- `/dev/mapper/<name>` is the path to the opened luks partition

<br>

### Formatting swap partition

Once you've formatted and opened the swap partition you need to make it actually a swap partion.

This can be done as follows:
```sh
$ mkswap /dev/mapper/<name>
```

Where:

- `/dev/mapper/<name>` is the path to the opened luks partition

This will create a swap filesystem. 

<br>

# System configuration

[mkinitcpio example hooks](https://wiki.archlinux.org/title/Dm-crypt/System_configuration#Examples)

You will need to enable some hooks in `/etc/mkinitcpio.conf`.

Looks for the line which looks like `HOOKS=(base...)`.

<br>

## encrypt hook

If you're not using systemd-based initramfs you need to add the `encrypt` hook.

**make sure this comes *before***: `filesystems`

It will looks something like `HOOKS=(base udev ... encrypt ... filesystems ... )`

Where `...` is any number of hooks between the listed hooks.

<br>

## sd-encrypt hook

If you're using systemd-based initramfs you need to add the `sd-encrypt` hook.

**make sure this comes *before***: `filesystems`

It will looks something like `HOOKS=(base systemd ... sd-encrypt ... filesystems ... )`

Where `...` is any number of hooks between the listed hooks.

<br>

## Rebuild init system

Once you've updated `/etc/mkinitcpio.conf`, rebuild the init system.

<br>

### mkinitcpio

If you're using [mkinitcpio](https://wiki.archlinux.org/title/Mkinitcpio) run:
```sh
$ mkinitcpio -P
```

<br>

### dracut

If you're using [dracut](https://wiki.archlinux.org/title/Dracut) run:
```sh
$ dracut-rebuild
```

<br>

# Bootloader

[Configuring the boot loader](https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#Configuring_the_boot_loader)

Lastly, you will need to set some [kernel parameters](https://wiki.archlinux.org/title/Kernel_parameters) to unlock the disk at boot.

<br>

## GRUB

If you're using [GRUB](https://wiki.archlinux.org/title/GRUB).

Edit `/etc/default/grub` and find the line starting with `GRUB_CMDLINE_LINUX=""`.

<br>

### encrypt

If you are using the `encrypt` hook.

You will need to add `cryptdevice=UUID=<device-UUID>:root root=/dev/mapper/root`

Where:

- `<device-UUID>`, is the [UUID](https://wiki.archlinux.org/title/Persistent_block_device_naming#by-uuid) of the partition (the UUID of `/dev/sdax` not `/dev/mapper/<name>`)

<br>

### sd-encrypt

If you are using the `sd-encrypt` hook.

You will need to add `rd.luks.name=<device-UUID>=root root=/dev/mapper/root`

Where:

- `<device-UUID>`, is the [UUID](https://wiki.archlinux.org/title/Persistent_block_device_naming#by-uuid) of the disk

