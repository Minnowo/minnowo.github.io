---
layout: post
title: WireGuard Network Setup
date:   2024-06-30 00:00
description: Setting up a WireGuard network using Docker
toc: true
tags: [guide,docker]
hidden: false
---

<br>

# WireGuard Server Setup

We will be using https://github.com/linuxserver/docker-wireguard

<br>

## Docker Compose

Create a new file `wireguard-server.compose` and put the following:
```yaml
services:
  wireguard:
    image: lscr.io/linuxserver/wireguard:latest
    container_name: wireguard
    cap_add:
      - NET_ADMIN
      - SYS_MODULE #optional
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - SERVERURL=auto #optional
      - SERVERPORT=51820 #optional
      - PEERS=1 #optional
      - PEERDNS=auto #optional
      - INTERNAL_SUBNET=10.13.13.0 #optional
      - ALLOWEDIPS=0.0.0.0/0 #optional
      - PERSISTENTKEEPALIVE_PEERS= #optional
      - LOG_CONFS=true #optional
    volumes:
      - /path/to/wireguard/config:/config
      - /lib/modules:/lib/modules #optional
    ports:
      - 51820:51820/udp
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
    restart: unless-stopped
```

Now you just need to change `/path/to/wireguard/config` to a path on your host machine where you want all the WireGuard configuration to be saved.

Also set the `PEERS=N` where `N` is the number of peers you want to connect.

Then start the server:
```sh
docker compose -f wireguard-server.compose up -d
```

<br>

### Port Forwarding

If you want to port forward a server which is on the WireGuard network to the world.

This is my guide for the Docker version, but I followed [This guide](https://www.procustodibus.com/blog/2022/09/wireguard-port-forward-from-internet/).
It may be helpful.

<br>

#### Updating the Docker Compose File

You need to add two things:
1. The port mapping into your container:
    ```yaml
        ports:
          - 51820:51820/udp
          - 2000:3000/tcp    # newly added port
    ```
    In this case the world will access port 2000, and the server on our WireGuard network will host on port 3000.

2. Set a sysctls, (this may be optional):
    ```yaml
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv4.ip_forward=1    # newly added sysctls
    ```
    I believe this should already be implied, but it can't hurt to add it.

<br>

#### Edit the WireGuard Server Config

You then need to enable the forwarding in the WireGuard configuration.
```toml

# port forwarding
# forward traffic from eth network to 10.13.13.5:2000
PreUp    = iptables -t nat -A PREROUTING -i eth+ -p tcp --dport 2000 -j DNAT --to-destination 10.13.13.5
PostDown = iptables -t nat -D PREROUTING -i eth+ -p tcp --dport 2000 -j DNAT --to-destination 10.13.13.5
# add any the above 2 lines for any other server:port mappings you want
# ...

# packet masquerading
# allow traffic back from the private server
PreUp    = iptables -t nat -A POSTROUTING -o %i -j MASQUERADE
PostDown = iptables -t nat -D POSTROUTING -o %i -j MASQUERADE
```

<br>

# WireGuard Client Setup

For desktop and mobile clients, see the [WireGuard Install Page](https://www.wireguard.com/install/).
Install the client for your device and you just need to import the config.

You can find client configurations in the config location you set in the compose file under `.../config/peerN/`.
`peerN.conf` holds the text based configuration. `peerN.png` holds the QR Code.

<br>

## Mobile

<br>

### QR Code

If you view the container logs you will see the QR Code in the console:
```sh
docker logs wireguard
```

You can scan this with your mobile app to add the configuration.
It is possible to edit the configuration in the app, so this is probably the most practical method.

<br>

### Config File

Download the config file to your mobile device and make sure the filename is like less than 10 characters long.
For some reason long filenames do not work. So if you get an error regarding invalid name, this is probably your issue.

<br>

## Debian12 Commandline

<br>

### Stuff to Install

You will need to install `resolvconf` and `wireguard`:
```sh
sudo apt install resolvconf wireguard
```

---

**NOTE**

If you don't have internet after installing `resolvconf` try:
```sh
sudo systemctl restart networking.service
```

---

<br>

### WireGuard Config

You will be using the `wg-quick` tool mainly.

Put your configuration file into `/etc/wireguard/wg0.conf`, where `0` can be any number you want.

Start the connection:
```sh
wg-quick up wg0
```
---

**NOTE**

If you use `wg-quick up <name>`, where `<name>` is not a file path, it refers to a configuration file in `/etc/wireguard/`

You can also do `wg-quick up <file>`, where `<file>` is the path to a WireGuard configuration file.

---


