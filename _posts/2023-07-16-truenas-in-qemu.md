---
layout: post
title: TrueNAS Core In QEMU/VirtManager
date:   2023-07-16 02:07
description: Installing TrueNAS Core inside QEMU/VirtManager
toc: true
tags: [virt_manager,truenas_core,guide]
---

<br>

This will be a guide on how to create a [TrueNAS Core](https://www.truenas.com/truenas-core/) virtual machine using [Virtual Machine Manager](https://virt-manager.org/) and [QEMU/KVM](https://www.qemu.org/).

This guide assumes you already have Virt-Manager and QEMU working and will focus on the VM itself.

# TrueNAS ISO

First you need to get the iso.

You can download it from [this page](https://www.truenas.com/download-truenas-core/). 

It's kind of hard to see, but at the bottom of the page it will say `No Thank you, I have already signed up.` if you want to skip giving up an email.

Then click the big green download button, to get your iso.

For this guide I'm using [TrueNAS-13.0-U5.2.iso](https://download.freenas.org/13.0/STABLE/U5.2/x64/TrueNAS-13.0-U5.2.iso). It is important to note the version number `13.0`, as we will need this later.

<br>

# Creating the VM

1. Start by hitting `Create a new virtual machine`

<br>

## Step 1 / 5, Connection & Install media

1. Choose `QEMU/KVM` for the connection

2. Choose `local install media (ISO image or CDROM)`

3. Hit `Forward`

<br>

## Step 2 / 5, Iso selection & VM type

1. Hit `Browse` > `Browse Local` and choose the iso you downloaded

2. Uncheck `Automatically detect...`

3. For the type, you want to choose `FreeBSD xx.x` where `xx.x` is the version number in the name of the iso you downloaded. My iso was called `TrueNAS-13.0-U5.2.iso` so I'm choosing `FreeBSD 13.0`.

4. Hit `Forward`

<br>

## Step 3 / 5, Ram & CPU

1. You're supposed to have *at least* 8gb of ram. But I'm using 4 becauses I'm a little bit short right now, (you can change this later anyway)

2. Choose 1 or more cpu, I'm sticking with just 1

3. Hit `Forward`

<br>

## Step 4 / 5, Disk

1. I like to choose where and what to do for storage, so I'm checking `Select or create custom storage` 

2. Then hit `Manage`

3. Then the plus button next to **Volumes**: `Create new volume`

4. Choose a name for you disk, I'm using `TrueNASCore_Boot`

5. Choose `qcow2` for the type

6. You want at least 16gb of disk space

7. Hit `Finish`

8. Choose your new disk and then hit `Choose Volume`

<br>

## Step 5 / 5, Finishing up

1. Set the name, I'm calling mine `TrueNASCore`

2. Hit `Finish`

<br>

# Installing the VM

Now that you've made the VM, we gotta set it up.

Right click the VM and hit `Run`

<br>

## Boot menu

You will get a boot menu like so:

![TrueNAS Core Boot Menu](/assets/custom/pictures/2023-07-16_truenascore-bootmenu.png)

Choose option 1, `Boot TrueNAS Installer`

<br>

## Install screen

You will be given 4 different options:

![TrueNAS Core Install Screen 1, Install/Shell/Reboot/Shutdown prompt](/assets/custom/pictures/2023-07-16_truenascore-install1.png)

Choose option 1, `Install/Upgrade`

If you're using less than 8gb of ram, you will get a warning:

![TrueNAS Core Install Screen 1.5, Continue with less than 8gb of ram prompt](/assets/custom/pictures/2023-07-16_truenascore-install1.5.png)

Hit `Yes` and continue despite the warning.

<br>

## Disk selection screen

Now you can choose the disk you want to install TrueNAS on:

![TrueNAS Core Install Screen 2, Choose installation disk prompt](/assets/custom/pictures/2023-07-16_truenascore-install2.png)

Choose your disk and then hit `OK` to continue.

You will get a warning about deleting the disks data:

![TrueNAS Core Install Screen 3, Confirm overwrite disk prompt](/assets/custom/pictures/2023-07-16_truenascore-install3.png)

Hit `Yes` to proceed.

<br>

## Root password

After choosing a disk it will ask you to choose a root password:

![TrueNAS Core Install Screen 4, Choose root password prompt](/assets/custom/pictures/2023-07-16_truenascore-install4.png)

Enter in a root password and click `OK` to continue.

<br>

## Boot mode

Now you need to choose the boot mode:

![TrueNAS Core Install Screen 5, Boot mode UEFI or BIOS prompt](/assets/custom/pictures/2023-07-16_truenascore-install5.png)

Choose `Boot via BIOS`, I've never had UEFI work for this.

<br>

## Finishing installation

Wait for the install to finish, when it's done you will get a prompt to remove the media:

![TrueNAS Core Install Screen 6, Eject media prompt](/assets/custom/pictures/2023-07-16_truenascore-install6.png)

Hit `OK` and it will take you back to the first installation screen.

Choose option 3, `Reboot System` and wait for it to boot the disk, if all goes well, after booting and choosing option 1, you will land in a tty:

![TrueNAS Core tty](/assets/custom/pictures/2023-07-16_truenascore-tty.png)


You've now installed TrueNAS in a VM!

<br>

# After installation

Once you've installed and have the tty, you probably want to actually test it out.

In the tty it will tell you the ip address of the webui, in my case it says `192.168.122.83`.

Open the address in your browser to access the webui:

![TrueNAS Core Install Screen 4](/assets/custom/pictures/2023-07-16_truenascore-webui.png)

Login using the root password you set and you're all done!

<br>

## Adding disks

The whole purpose of installing TrueNAS in a VM is to mess around without breaking your disks. So lets add some disks!

Note: these steps should work while the VM is running.

1. If the VM window is not open, right click the VM and hit `Open`

2. In the VM window hit `Show virtual hardware details` in the top left corner

3. Hit `Add Hardware` at the bottom

4. Choose `Storage`, it should already be selected

5. Check `Select or create custom storage` the `Manage` and just like before, we're gonna make some disks

6. Then the plus button next to **Volumes**: `Create new volume`

7. Choose a name and size, then hit `Finish`

8. Click you new disk and hit `Choose Volume` then hit `Finish`

9. Repeat steps 4 - 8 to create as many disks as you want 

Once you've added more disks, you should see them appear in under `Storage` > `Disks` in the webui
