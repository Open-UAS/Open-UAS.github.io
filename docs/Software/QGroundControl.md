# QGroundControl Related
[QGroundControl](http://qgroundcontrol.com/) (QGC) is the software that we use to monitor telemetry sent from the UAS. Typically, no direct control happens through QGC. 

## Using The OpenUAS Airframe
The custom OpenUAS airframe only shows up properly in QGroundControl if the connected vehicle's firmware has been flashed from the computer connecting to it. This is because, during the flashing process, QGC will update it's list of known airframes with those included in the firmware. See [Building and Flashing Custom Firmware](#building-and-flashing-custom-firmware) for details.

If QGC is not aware of the currently running airframe, it will show as experimental.