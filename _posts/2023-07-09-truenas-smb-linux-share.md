---
layout: post
title: TrueNAS Core SMB Mount On Linux
date:   2023-07-09 18:11
description: How to auto mount TrueNAS Core SMB shares on Linux
toc: true
tags: [truenas_core,note,guide]
---

<br>

# Creating an SMB share

- Under the `Sharing` section in the webui, click `ADD` button.

- Choose the src path to the dataset you want to share.

- Set a name for the share, (probably don't include whitespace or special characters)

- Create the share

<br>

# Setting login credentials

If you have a user you want to authenticate with, you will need to set the credentials for the share.

First make sure the user has `Samba Authentication` set to true under their settings.

Next we need to create a file where we can put our credentials. My file will be `/etc/.truenas_creds`.

The file should contain the following:
```
username=<your-username>
password=<your-password>
```

Where:

- `<your-username>` is the username of the user you wish to login with

- `<your-password>` is the password of the specified user

Once you've created the file you should change it's permissions so that you need root access to do anything with the file.

This can be done using chown and chmod:
```sh
$ chown root:root <path-to-file>
$ chmod 600 <path-to-file>
```

Where:

- The first command sets the user and group to root

- `6` represents read and write permissions for the owner

- The first `0` represents no permissions for the group

- The second `0` represents no permissions for everyone else

- `<path-to-file>` is the path to the credentials file created above

<br>

# Mounting the share on Linux

<br>

## Setting up fstab

You will need to know the ip address of your TrueNAS server.

Once you have this, open up `/etc/fstab`, this is where we will set the mounts.

The general format to adding an smb share in fstab is as follows:
```
//<truenas>/<smb-share> <mount-at> cifs uid=1000,gid=1000,rw,credentials=<login-creds>,iocharset=utf8 0 0
```

Such that:

- `<truenas>` is the ip address of your NAS

- `<smb-share>` is the name you gave the smb share

- `<mount-at>` is the directory you want to mount the share (make sure the folder exists)

- `cifs` specifies an smb mount

- `uid=1000,gid=1000` sets the owner / group (may or may not be needed for write permission)

- `rw` tells it to mount as read and write

- `credentials=<login-creds>` will provide the credentials to access the NAS

Just add as many of these lines to your fstab file as you need smb shares.

My fstab looks something like:
```
//truenas.local/Syncthing /mnt/Sync cifs uid=1000,gid=1000,rw,credentials=/etc/.truenas_creds,iocharset=utf8 0 0
//truenas.local/Family /mnt/Family cifs uid=1000,gid=1000,rw,credentials=/etc/.truenas_creds,iocharset=utf8 0 0
//truenas.local/MyFiles /mnt/MyFiles cifs uid=1000,gid=1000,rw,credentials=/etc/.truenas_creds,iocharset=utf8 0 0
//truenas.local/DataBackup /mnt/DataBackup cifs uid=1000,gid=1000,rw,credentials=/etc/.truenas_creds,iocharset=utf8 0 0
//truenas.local/Temp /mnt/Temp cifs uid=1000,gid=1000,rw,credentials=/etc/.truenas_creds,iocharset=utf8 0 0
```

<br>

### Using hosts file for TrueNAS ip

As you can see in my fstab, I'm using the name `truenas.local` to refer to my NAS.

This is because I have not setup a static ip for my NAS yet, and it's ip changes often.

My solution to this, is editing my `/etc/hosts` file to add the following line:
```
192.xxx.x.xx truenas.local
```

This will set the name `truenas.local` to the given ip, and then I can use this more readable name instead whenever needed. This ensures that if my NAS ip changes, I only need to update the ip here to ensure everything is working again.

<br>

## Mounting the shares

Once you have fstab setup, and have ensured the mount points exist, mounting is as easy as:
```sh
$ mount -a -t cifs
```

This command (as root) will mount all `cifs` shares present in fstab automatically.

I like to add a bash alias for this. In `~/.bashrc` you can add:
```sh
alias mount-network='sudo mount -t cifs,nfs -a'
```

The extra `nfs` also mounts any nfs shares in fstab.

<br>

## Unmounting the shares

If you ever want to unmount the shares, simply run:
```sh
$ umount -t cifs -a -l
```

This command (as root) will unmount all `cifs` shares which are mounted.

I like to add a bash alias for this. In `~/.bashrc` you can add:
```sh
alias unmount-network='sudo umount -t cifs,nfs -a -l'
```

The extra `nfs` also mounts any nfs shares in fstab.