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
2. Install the latest version of gazebo by running `sudo apt update` then `sudo apt install gazebo`
3. Check that the Gazebo GUI launches by running `gazebo`. GUI support for WSL 2 should be included in Windows 11.

**Windows 10**
1. In windows, download and install VcXsrv, [SourceForge](https://sourceforge.net/projects/vcxsrv/)
2. Run and configure `Xlaunch` application from windows.
    - Select `multiple windows`, next
    - Select `Start no client`, next
    - Uncheck `native opengl` and check `Disable access control`, next
    - Save the configuration file somewhere accessible like your desktop. Run the configuration file to launch VcXsrv quickly in the future.
    - Finish
3. Open a terminal into ubuntu
4. Install Gazebo 11 `sudo apt update` then `sudo apt install gazebo11`
5. Add the following to the bottom of `~/.bashrc` using your favorite text editor (nano is easy if you have no preference)
    ```bash
    export GAZEBO_IP=127.0.0.1
    export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0
    export LIBGL_ALWAYS_INDIRECT=0
    ```
    - This configures the GUI to be forwarded to the VcXsrv and displayed by windows.
6. Reload .bashrc to make the changes take effect, `source ~/.bashrc`
7. Make sure you can open the Gazebo GUI, run `gazebo`

::: tip
You must go through the configuration for Xlauch every time you reboot windows.
You can save the configuration file on the last step in Xlaunch and run that instead to speed things up.
:::

### Linux Native
TODO

## Building PX4 and Running the Simulation
