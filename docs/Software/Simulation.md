# Gazebo Simulation

We are experimenting with using simulation models to test software changes and potentially train pilots. This area still needs further development to be fleshed out more. 

TODO

## Dev Tool Setup for Simulation
This section assumes you already have [setup dev tools for PX4](PX4.md#dev-environment-setup).

Gazebo is a linux only application so we will be running it either through WSL 2 or natively on linux:

### WSL 2
Depending what version of windows you are using, some additional setup may be needed

**Windows 11**
- Open a terminal into Ubuntu, start menu > ubuntu
- Install the latest version of gazebo by running `sudo apt update` then `sudo apt install gazebo`
- Check that the Gazebo GUI launches by running `gazebo`. GUI support for WSL 2 should be included in Windows 11.

**Windows 10**
- Install Xserver forwarding
- configure xserver forwarding
- Install latest version of gazebo

### Linux Native
TODO

## Building PX4 and Running the Simulation
