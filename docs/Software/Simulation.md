# Gazebo Simulation

We are experimenting with using simulation models to test software changes and potentially train pilots. This area still needs further development to be fleshed out more. 

TODO

## Dev Tool Setup for Simulation
This section assumes you already have [setup dev tools for PX4](PX4.md#dev-environment-setup).

Gazebo is a linux only application so we will be running it either through WSL 2 or natively on linux:

::: warning
If you plan to use Docker to run the simulation, the current container comes Gazebo 9 only. Local and Docker versions of gazebo must match to work correctly. During the installation step replace "gazebo11" with "gazebo9"
:::

### Windows with WSL 2
Depending what version of windows you are using, some additional setup may be needed

**Windows 11**
1. Open a terminal into Ubuntu, start menu > ubuntu
2. Install Gazebo 11 and Gazebo 11 dev files
    1. `sudo apt update`
    2. `sudo apt install gazebo11`
    3. `sudo apt install libgazebo11-dev`
3. Check that the Gazebo GUI launches by running `gazebo` GUI support for WSL 2 should be included in Windows 11.

**Windows 10**
1. In windows, download and install VcXsrv, [SourceForge](https://sourceforge.net/projects/vcxsrv/)
2. Run and configure `Xlaunch` application from windows.
    - Select `multiple windows`, next
    - Select `Start no client`, next
    - Uncheck `native opengl` and check `Disable access control`, next
    - Save the configuration file somewhere accessible like your desktop. Run the configuration file to launch VcXsrv quickly in the future.
    - Finish
3. Open a terminal into ubuntu
4. Install Gazebo 11 and Gazebo 11 dev files
    1. `sudo apt update`
    2. `sudo apt install gazebo11`
    3. `sudo apt install libgazebo11-dev`
5. Add the following to the bottom of `~/.bashrc` using your favorite text editor (nano is easy if you have no preference)
    ```bash
    export GAZEBO_IP=127.0.0.1
    export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0
    export LIBGL_ALWAYS_INDIRECT=0
    ```
    - This configures the GUI to be forwarded to the VcXsrv and displayed by windows.
6. Reload .bashrc to make the changes take effect, `source ~/.bashrc`
7. Check that the Gazebo GUI launches by running `gazebo`

::: tip
You must go through the configuration for Xlauch every time you reboot windows.
You can save the configuration file on the last step in Xlaunch and run that instead to speed things up.
:::

### Linux Native
TODO

## Building PX4 and Running the Simulation

### Without Docker

**Linux Native**
1. Open a terminal to the root of the PX4 firmware
2. Run `make px4_sitl gazebo_Open_UAS` to build and launch the OpenUAS gazebo simulation


### Using Docker Toolchain
::: warning
The current Docker simulation container includes Gazebo 9. Local and Docker versions of gazebo must match to work correctly.
:::
**Linux**
1. Open a terminal to the root of the PX4 firmware
2. Run `export PX4_DOCKER_REPO="px4io/px4-dev-simulation-bionic:2021-02-04"` 
3. Run `./Tools/docker_run.sh make px4_sitl gazebo_Open_UAS` to build and launch the OpenUAS gazebo simulation in docker
4. Open a new terminal and run `export GAZEBO_MASTER_IP=172.17.0.2`
    - This is the public IP address for the container we just made. This value can be checked by running 
    ::: v-pre 
    `docker inspect --format '{{ .NetworkSettings.IPAddress }}' container_name_or_id` 
    ::: 
    substituting in the id of your new container
5. Run `export GAZEBO_MASTER_URI=$GAZEBO_MASTER_IP:11345`
6. Run `export GAZEBO_MODEL_PATH=~/git/PX4-Autopilot/Tools/sitl_gazebo/models/`
    - Replace first part of path as needed to point to your local PX4-Autopilot directory
6. Run `gzclient --verbose` to launch the gazebo GUI on the host machine, and connect to the docker server

**Windows with WSL2**
:::warning
Not currently working with Docker on Windows
:::

TODO: docker container is not reachable from WSL, need to investigate
- Had to publish gazebo port 11345 when starting docker container with `--publish 11345:11345`
- Used different IP address that was visible in windows control panel

TODO: Gazebo is reachable from wsl to docker container, but wsl shows only black screen and has the following output


```
$ gzclient --verbose
Gazebo multi-robot simulator, version 9.19.0
Copyright (C) 2012 Open Source Robotics Foundation.
Released under the Apache 2 License.
http://gazebosim.org

[Msg] Waiting for master.
[Err] [ConnectionManager.cc:155] Conflicting gazebo versions
[Msg] Publicized address: 127.0.0.1
[Wrn] [GuiIface.cc:120] QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-colton-glick'
Conflicting gazebo versions
[Wrn] [Publisher.cc:185] Queue limit reached for topic /gazebo/default/user_camera/pose, deleting message. This warning is printed only once.
^C^\Quit
```

Investigated further, I think this is due to docker only exposing port 11345 for gazebo when it needs additional ports for topic pub/sub communication.
While a `gzserver` and `gzclient` pair is running under WSL2, running `sudo lsof -i -P -n | grep LISTEN` shows what ports are being used by gzserver and gzclient.
These ports include 11345 plus 5 other random ports between 35000 and 45000. I believe these ports handle topic communication and potentially other tasks. It appears [gz-transport](https://github.com/gazebosim/gz-transport) is used to manage the network communication for the topics and this creates the ports. [Question #166](https://github.com/gazebosim/gz-transport/issues/166) talks about some of the issues I am running into. These ports change every time gazebo is run so its not possible to publish the ports before the docker container starts. 

Also the docker network `host` does not work on docker for windows as stated in the [documentation](https://docs.docker.com/network/host/#:~:text=The%20host%20networking%20driver%20only%20works%20on%20Linux). I've read that the `host` network instructs the container to run under the same network adapter as the docker daemon, however I've read that Docker with WSL2 backend runs in an isolated network environment from the rest of WSL2, so this blocks all connection from WSL2 to the container. It is possible to publish a range of ports like so, `-p 30000-31000:30000-31000`, however the range that gazebo uses appears to be around 10,000 ports. Publishing even 4,000 ports fails to complete the `docker run` command.  

Next lead is to try to uninstall docker from windows, and install through WSL2 only. Hopefully this will cause the docker installation to behave closer to the true linux installation and allow for full port communication without needing to publish specific ports.

**Gazebo working** under docker installed directly in WSL2 from docker [linux installation instructions](https://docs.docker.com/engine/install/ubuntu/). Had to run the docker container under the 'host' network to allow access to all the ports for gazebo to operate. Running under bridge with only port 11345 published did not work.

Current issue with configuration is performance, gazebo client running from WSL with docker gazebo server, sits at about 10 fps circling the iowa aeromodelers field when running maximized on my 21:9 monitor (smaller client resolution helps a lot). The performance drop from running gazebo server in docker compared to running gazebo client and server in wsl is minimal (1 to 2 FPS). However, running the same scenario on linux on bare metal with Nvidia drivers gives 62 fps.



-----------

1. Open a terminal to the root of the PX4 firmware
2. Run `export PX4_DOCKER_REPO="px4io/px4-dev-simulation-bionic:2021-02-04"` 
3. Run `./Tools/docker_run.sh make px4_sitl gazebo_Open_UAS` to build and launch the OpenUAS gazebo simulation in docker
4. Open a new terminal and run `export GAZEBO_MASTER_IP=172.30.160.1`
    - This is the IP address for the network adapter in windows that WSL uses called "vEthernet (WSL)"
    - This value may differ between machines, check by opening control panel > Network and Internet > Network and Sharing Center > Change adapter settings > right click "vEthernet (WSL)" > status > details > IPv4 address
5. Run `export GAZEBO_MASTER_URI=$GAZEBO_MASTER_IP:11345`
6. Run `export GAZEBO_MODEL_PATH=~/git/PX4-Autopilot/Tools/sitl_gazebo/models/`
    - Replace first part of path as needed to point to your local PX4-Autopilot directory
6. Run `gzclient --verbose` to launch the gazebo GUI on the host machine, and connect to the docker server
