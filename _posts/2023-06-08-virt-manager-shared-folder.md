---
layout: post
title: Virt Manager Shared Folder
date:   2023-06-08 11:54
description: How to use shared folder with virt manager 
toc: true
tags: [note,guide]
---

<br>

> Since I continue to forget how to actually do this I'm making a note

<br>

## Enabling the filesystem

1. Open Virtual Machine Manager

2. Right click your vm, hit `open` (make sure it's shutdown)

3. Under `Memory`, check the `Enable shared memory` box

4. Click `Add Hardware` > `Filesystem`

5. For `Driver` choose `virtiofs`

6. For `Source path` put the path to the folder to mount

7. For `Target path` put a mount name

<br>

## Mounting the filesystem

<br>

### Manually 
Once you've created the filesystem, now you just need to mount it in the vm.

In your vm, create a directory to mount into:
```sh
$ sudo mkdir /mnt/pictures
```

Then mount the filesystem:
```sh
$ sudo mount -t virtiofs <your-target-path-value> /mnt/pictures
```

Where `<your-target-path-value>` is the value you put for `Target path` in step **7** above.


<br>


### Using fstab

You probably want to auto mount the filesystem when the vm starts. This can be done using [Fstab](https://wiki.archlinux.org/title/fstab).

Open `/etc/fstab` with your editor of choice.
```sh
$ sudo vim /etc/fstab
```

Add a new line and use the following format:
```
<your-target-path-value> /mnt/location virtiofs defaults 0 0
```

Where `<your-target-path-value>` is the value you put for `Target path` in step **7** above.

You might need to reload systemd:
```sh
$ sudo systemctl daemon-reload
```

Then you can mount simply using:
```sh
$ sudo mount /mnt/location
```

Where `/mnt/location` is the path you put in Fstab