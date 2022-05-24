# Software

Here you will find details on the software configuration and modifications used on the OpenUAS vehicle.

## PX4 Related

### OpenUAS Airframe

### OpenUAS Mixer

### Simulation

## QGroundControl Related

### Using The OpenUAS Airframe
The custom OpenUAS airframe only shows up properly in QGroundControl if the connected vehicle's firmware has been flashed from the computer connecting to it. This is because, during the flashing process, QGC will update it's list of known airframes with those included in the firmware. 

If QGC is not aware of the currently running airframe, it will show as experimental.