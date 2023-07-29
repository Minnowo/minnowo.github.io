---
layout: post
title: TrueNAS Core Stripe To Mirror
date:   2023-07-17 03:07
description: Adding another drive to a stripe pool and making a mirror pool
toc: False
tags: [truenas_core,note,guide]
---

<br>

I recently got a new disk for my NAS, so It's time to convert my stripe pool into a mirror.

Since it is relatively cheeky to do in the webui I'm writing a note.

1. Find the pool, go to `Storage` > `Pools`, then identify the pool which only has 1 drive

2. Hit the gear icon on the far right side

3. Click `Status` in the drop down menu

4. Then click the 3 dots on the far right side of the vdev you want to extend

5. Click `Extend` in the drop down menu

6. Choose the drive you want to add

7. Hit `EXTEND`

That's it, super easy, just kind of hard to find in the webui
