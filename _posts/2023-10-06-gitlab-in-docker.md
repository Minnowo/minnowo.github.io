---
layout: post
title: GitLab in Docker for Testing
date:   2023-10-06 05:35
description: Running GitLab in Docker for testing
toc: true
tags: [guide,docker,gitlab,test]
---

<br>

This is a rough guide on setting up [GitLab CE](https://about.gitlab.com/install/?version=ce) in Docker. I just wanted to test out GitLab in my own environment and whatever, so this is guide is for localhost access only, and assumes you are accessing the ui from the same computer.

The official guide for this can be found [here](https://docs.gitlab.com/ee/install/docker.html), which is probably better, I just didn't find it until I had already done a bunch of stuff myself.

<br>

# Docker run

The run command is pretty simple, only mapping the port to `8080` since I don't care about https or ssh. Just make sure you run this in the directory you want the volumes in. The `shm-size` is not needed, but giving more memory should make it faster, I believe the default is 64m, but I'm just going with what the officail docs say.

```sh
docker run -d \
    -p 8080:80 \
    --name gitlab \
    --volume ./gitlab_config:/etc/gitlab \
    --volume ./gitlab_logs:/var/log/gitlab \
    --volume ./gitlab_data:/var/opt/gitlab \
    --shm-size 256m \
    gitlab/gitlab-ce:latest
```

Once you've run the container, you'll have to wait a bit for it to startup, you can watch the logs using `docker logs gitlab -f`. Eventually, you should see the webui appear on [http://localhost:8080](http://localhost:8080).

The **default username** is `root`.

To get the password using the following Docker command:
```sh
docker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password
```

Alternatively you can access the `initial_root_password` file inside the `gitlab_config` volume.

<br>

# Configuration

Once you've signed in as root, there is one main configuration you will want to make. Since the goal of this is accessing it purely through localhost, the public url will have to be changed.

Open `<path_to_config_volume/gitlab.rb` and find an set these two lines:
```
external_url 'http://localhost:8080'
nginx['listen_port'] 80
```

The important part here is that `8080` is the port set on the host machine, and `80` is the port set inside the container. By default, the nginx listen_port is `nil`, which means it will take the port from the external url when set. This means that nginx would listen on 8080 instead of the assumed 80, which would mess up the port set in the Docker run command earlier.

That is pretty much it, you can now mess around in GitLab on your local machine.

Cheers!
