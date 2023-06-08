---
layout: post
title: Migrating Dataset TrueNAS
date:   2023-06-08 12:18
description: Migrating a dataset in TrueNAS Core 
toc: true
tags: [truenas_core,guide]
---

<br>

The other day I got a critical alert from my TrueNAS system that a drive failed a [SMART](https://en.wikipedia.org/wiki/Self-Monitoring,_Analysis_and_Reporting_Technology) test. So I've had to start preparations in case the drive dies on me. Thus the need to migrate all of the content to another pool.

For the context of this post, this is the pool I will be migrating from:

![Source Pool](/assets/custom/pictures/2023-06-08_truenas-onetbmirror.png)

And this is the pool I am going to put the new dataset in:

![Destination Pool](/assets/custom/pictures/2023-06-08_truenas-twotbmirror.jpg)

<br>

## Backing up encryption key

First things first, since the source pool is encrypted, make sure to export the key and back it up somewhere safe. You will need this to unlock the new dataset after replication.

Click on the three dots menu on the far right side of the pool, and at the bottom of the menu click `Export Key`.

![Menu To Click For Key Export](/assets/custom/pictures/2023-06-08_truenas-onetbmirror-settings.png)

![Key Export Button](/assets/custom/pictures/2023-06-08_truenas-onetbmirror-export-key.png)


<br>

## Replication task

You can find the docs for this [here](https://www.truenas.com/docs/core/uireference/tasks/replicationtasks/).

We then need to begin replicating the dataset, in this case I only have one dataset on the source pool, so I will be migrating only that.

Head into `Tasks` > `Replication Tasks`:
![Replication Task Location](/assets/custom/pictures/2023-06-08_truenas-replication-tasks.jpg)

Then click `ADD`:
![Replication Task Page](/assets/custom/pictures/2023-06-08_truenas-replication-tasks-page.png)

You will then be given a bunch of options for replication, I have labeled from 1 - 6 the options that I'm applying:
![Replication Task Wizard Page 1](/assets/custom/pictures/2023-06-08_truenas-replication-tasks-wizard1.jpg)

1. Source Location: This system. Since I only have one system and am just copying between pools, I want to choose this system.

2. The source path of the dataset you want to replicate. In this case `OneTBMirror/Personal` is my source.

3. Destination Location: This system. Since I want the new data to be on the same system.

4. The destination path for the dataset. In this case `TwoTBMirror/Personal` is my desktination.

5. Check recursive mode. The docs say this all snapshots contained in the source dataset snapshots. I want to take everything and I know I have snapshots in child data sets, so I'm checking this.

6. Next page of the wizard.


![Replication Task Wizard Page 2](/assets/custom/pictures/2023-06-08_truenas-replication-tasks-wizard2.jpg)

1. Run Once. Since this is a one-time job, I only want to run it once.

2. Uncheck Destination Dataset Read-only. I am going to be using this new dataset actively, I don't want read only.

3. Destination Snapshot Lifetime Same as Source. Keep snapshot lifetime the same.

4. Start replication.

Once you hit start you will be able to monitor the progress of the replication by clicking the `Task Manager` in the top right:

![Task Manager](/assets/custom/pictures/2023-06-08_truenas-tasks.jpg)

<br>

## After replication

Once the replication task is done, you should check that all the files were copied over and they both match.

The easiest way of doing this is using [rsync](https://wiki.archlinux.org/title/rsync).

In the bottom left of the webui click the `Shell` button to get a new terminal.

From here we can run rsync on the datasets:
```sh
$ rsync -rvn <src> <dst>
```
Where `<src>` is `/mnt/OneTBMirror/Personal/` and `<dst>` is `/mnt/TwoTBMirror/Personal`

**NOTE**: the first argument ending with a `/` is important! it tells rsync that you mean the contents in the directory rather than the directory itself. For example, without it, it might think to copy `/mnt/OneTBMirror/Personal` to `/mnt/TwoTBMirror/Personal/Personal` instead of the contents of the src into the destination.

The flags meaning:

- `-r` Means recursive, search all subfolders

- `-v` Means verbose, show lots of information

- `-n` Means dry run, do NOT actually do any copying / moving we just want the output

This command will print off all the files which are missing, from the new dataset and once you have confirmed this is correct, you can remove the `-n` flag to actually copy these files over.