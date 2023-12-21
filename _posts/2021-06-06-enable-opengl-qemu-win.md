---
layout: post
title: Enabling OpenGL in Windows 10 Guest VM in QEMU
date:   2021-06-06 00:00
description: A backup of answer for https://askubuntu.com/questions/1238523/enabling-opengl-in-windows-10-guest-vm-in-qemu
toc: true
hidden: false
---

<br>

A backup of answer for [https://askubuntu.com/questions/1238523/enabling-opengl-in-windows-10-guest-vm-in-qemu](https://askubuntu.com/questions/1238523/enabling-opengl-in-windows-10-guest-vm-in-qemu) 


Full credit to this [post](https://thomas.inf3.ch/2019-06-12-opengl-kvm-mesa3d/index.html) by Thomas Schwery. You could just follow the instructions there but I will summarize below. This should get you a more recent version of OpenGL (for me that was 3.1) running on a Windows 10 Guest VM. OpenGL 1.1 was actually already running but since it was so old the application I was trying to run didn't recognize it.

For my setup I was running a Windows 10 guest with a Gentoo Linux Host using libvirt/KMV/QEMU. Here are the steps I took to get it to work:

- download an already compiled distribution of the Mesa3D sources at [https://github.com/pal1000/mesa-dist-win/releases](https://github.com/pal1000/mesa-dist-win/releases)

- Extract and run `systemwidedeploy.cmd` in a command prompt.

You should see something like this:
```
-------------------------------------
Mesa3D system-wide deployment utility
-------------------------------------
Please make a deployment choice:
1. Core desktop OpenGL drivers
2. Core desktop OpenGL drivers + Intel swr
3. Install DirectX IL for redistribution only
4. Microsoft OpenGL over D3D12 driver only (replaces Mesa core desktop OpenGL drivers)
5. Mesa3D off-screen render driver gallium version (osmesa gallium)
7. Mesa3D graw test framework
8. Update system-wide deployment
9. Remove system-wide deployments (uninstall)
10. Exit
Enter choice:
```

Select the first option `1. Core desktop OpenGL drivers`

