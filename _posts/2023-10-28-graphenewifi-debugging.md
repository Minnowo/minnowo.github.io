---
layout: post
title: GrapheneOS Wifi Debugging
date:   2023-10-28 05:35
description: Wifi debugging with GrapheneOS for Flutter development
toc: true
tags: [grapheneos,guide]
---

<br>

Recently have been working on a Flutter app for one of my classes. Using the emulator works fine, but it is also pretty convenient to run the app on your actual phone. Since I am running [GrapheneOS](https://grapheneos.org/) on my phone, it took me a bit to figure out how to actually get this working.

*I think this mostly just applies to most Android OS, but it works here so it is basically a Graphene guide*


<br>

# Prerequisites

- You will need the [Android Debug Bridge (abd)](https://developer.android.com/tools/adb) tool. For ArchLinux, this can be installed from the [android-tools](https://archlinux.org/packages/extra/x86_64/android-tools/) package.

- You will need access to the developer options on your phone, you can usually do this by going into `Settings` > `About phone`, then click the build number 10+ times.

<br>

# Steps 

## Enable Wireless Debugging

Under developer settings, which for me was under, `Settings` > `System` > `Developer Options`.

Look for `Wireless debugging`, enable it, and then click on it.

<br>

## Pair Your Device

In the wireless debugging options, there is a `Pair device with pairing code` button. Click this to get a code and ip / port.

Once you've been given the code, in your terminal you can pair the device using `adb pair <ip>:<port> <code>`.

An example looks something like:
```
$ adb pair 192.168.1.61:42009 302457
Successfully paired to 192.168.1.32:44091 [guid=adb-43122FDF6104FU-hvguED]
```

You will get a message like the above, and you should see a device appear on your phone.


<br>

## Connect Your Device

Once you have paired the device, you need to actually connect to it.

In the wireless debugging options, it will say `IP address & Port` and list off these values.

In your terminal, you can connect to the device using `adb connect <ip>:<port>`.

An example looks something like:
```
$ adb connect 192.168.1.32:42359
connected to 192.168.1.32:42359
```

You should see a notification appear on your phone.

<br>

# Troubleshooting

## Does Not Stay Connected

For some reason, at least for me, closing the Wireless debugging settings also disconnects my device. If you have this problem, just leave it open in the background on your phone.

You can also try enabling `USB debugging` which for some reason makes this problem not happen for me.

