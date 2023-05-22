---
layout: post
title: SSH Client
date:   2023-05-19 06:37
description: How to configure and use ssh client
toc: true
tags: [note,guide]
---

<br>

## Check Client Version
 
```sh
$ ssh -V
OpenSSH_9.3p1, OpenSSL 3.0.8 7 Feb 2023
```

<br>

## Client Usage

Standard usage is as follows:
```sh
$ ssh user@host
```

Where `user` is the username on the server, and `host` is the server ip address / domain name.

Other common options are as follows:

`-i <key-file>` tells ssh to use this private key for connection.
```sh
$ ssh root@172.21.0.142 -i ~/.ssh/id_ed25519
```

`-L p1:d1:p2` maps the client machines `p1` (port) to the `d1` (hostname / ip) on `p2` (port)
```sh
$ ssh root@172.21.0.142 -L 8080:172.21.0.142:8080
``` 

You can see more about tunneling [here](https://www.ssh.com/academy/ssh/tunneling-example)

<br>

## Client Configuration

Config file usually belongs in `~/.ssh/config`, if this file does not exist, create it.

This config lets you specify names for connections, working sort of like an address book, you can specify a new connection as follows:
```
Host test                  <-- name / matching pattern
   Hostname xxx.xxx.x.xxx  <-- your server ip
   Port 22                 <-- default is 22
   User root               <-- user to connect with
   IdentityFile ~/.ssh/xx  <-- the private key file
```

Then, when you want to ssh, you could type:
```sh
$ ssh test
```
This will connect to the `test` match in the config file above, with all the given options.

You can see all of the options [here](https://man7.org/linux/man-pages/man5/ssh_config.5.html)
