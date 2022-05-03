# Battery
Provides power to the system.

Specs:
* mAh - Milliamp Hours
  * Describes how much energy the battery contains. Higher mAh usually means it can power the system for a longer time.
* C - Discharge
  * Current that the voltage can be discharged at.
* V - Voltage
  * Voltage supplied from the battery

https://web.mit.edu/evt/summary_battery_specifications.pdf
 

Common Issues / Solutions:
* Short Flight time
  * Increase the mAh
* ...

# Electronic Speed Controller (ESC)
Used to control the motor. Powered from the 12 V line. Accepts input as PWM from the pixhawk in order to control the speed the motor runs at. Will want an ESC that also has a BEC so that it can power the servo rail.

Specs:
* Continuous Current -
  * The max current that the ESC can continuously handle. Should be rated for the maximum amps that the motor can pull.
* Burst Current -
  * Current that the ESC can handle for short amounts of time (~10 seconds)

https://oscarliang.com/choose-esc-racing-drones/

Common Issues / Solutions:
* ...
  * ...

# Battery Eliminator Circuit (BEC)
Used to drop voltage, in this case from 12 V to 5 V. Power goes in from the 12 V and out to power the servos / PDB / anything else that would need 5 V. These external BECs are used for LiPo Batteries of about 3S or less.

Specs:
* Amps
  * This corresponds to how much amperage the BEC can deliver to whatever it is connected to. The more servos or other things trying to be run, the higher rated BEC you will want.

https://www.dimensionengineering.com/info/bec

Common Issues / Solutions:
* ...
  * ...

# Power Distribution Board (PDB)
Used to send power to different parts of the circuit and stand as a safety net. Contains a fuse that would burn out the chip before damaging the rest of the system. Powered from the 5 V line from the BEC. Has the 12 V line run through it to monitor the power. Sends power to the Pixhawk.

The main purpose of our PDB seems to be to convert the power so we can power the pixhawk. I would jut suggest choosing the one that would come along with the pixhawk.

Specs:
* ...

Common Issues / Solutions:
* ...
  * ...

# Motor
Provides the thrust for the UAS.

Specs:
* ...

Common Issues / Solutions:
* ...
  * ...

# Propellor
Contibutes to the thrust of the UAS

Specs:
* ...

Common Issues / Solutions:
* ...
  * ...




List:
* What each part does
* How it works?
* What do the part specs mean
* What are common problems that can be fixed by chnging these specs
* What would changing this component also impact
