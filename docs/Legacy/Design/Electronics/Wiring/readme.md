#  Power System Wiring
![Power system wiring](https://github.com/LTL-AERO/OpenUAS/blob/master/Documentation/Design/Electronics/Wiring%20v6/wiring%20powersyste%20v6.png)
## Component Descriptions

* __**Battery:**__ 
The battery supplies the power to the system. The Iron Bird uses a 12 volt 3 cell battery.<br />
* __**Power Distribution Board (PDB):**__ 
The power Distribution board splits the power into two lines, a 5v line that goes to the pixhawk, and a 12v line that powers the ESC.<br />
* __**ESC:**__ The current iteration ironbird uses the Badass Renegade 85A ESC. The ESC provides power and control to the motor. The Renegade also has a built in Battery Elimination Circuit or ESC, which drops the voltage to 5v can be wired to the servo rail and power the servos.<br /> 
# Control System Wiring
![Control system wiring](https://github.com/LTL-AERO/OpenUAS/blob/master/Documentation/Design/Electronics/Wiring%20v6/PIXHAWK4%20control%20system%20wiring.png)
A more in depth explanation about wiring the pixhawk 4 can be found on the pixhawk website, [here](https://docs.px4.io/v1.9.0/en/assembly/quick_start_pixhawk4.html).<br />
## Component Descriptions
* __**Tranceiver:**__
The tranceiver set allows the pixhawk to communicate with the ground station.<br />
* __**Servo Rail**__
A used to distribute power and PWM signal to each servo on the Iron Bird. The power comes from the ESC while PWM signal is sent from the Pixhawk4.
