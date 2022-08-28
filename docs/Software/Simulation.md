# Gazebo Simulation

We are experimenting with using simulation models to test software changes and potentially train pilots. This area still needs further development to be fleshed out more. 

TODO

## Dev Tool Setup for Simulation
This section assumes you already have [setup dev tools for PX4](PX4.md#dev-environment-setup).

Gazebo is a linux only application so we will be running it either through WSL 2 or natively on linux:

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
6. Run `gzclient --verbose` to launch the gazebo GUI on the host machine, and connect to the docker server

### Without Docker

**Linux Native**
1. Open a terminal to the root of the PX4 firmware
2. Run `make px4_sitl gazebo_Open_UAS` to build and launch the OpenUAS gazebo simulation

