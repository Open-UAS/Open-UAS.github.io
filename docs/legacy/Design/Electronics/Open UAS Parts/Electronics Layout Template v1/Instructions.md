# Instructions for downloading and modification

To open the assembly, download everything in this folder. Following the download, you will see two platforms with various color coded shapes. Parts of similar color must stay near each other, with the mild exception to the ESC and Motor along with the 6 cell battery and the 10 gage capable Wago. They can be on different levels as long as the cords reach both the motor and feed back into the circuit. Additionally the 6-cell battery and the 2 3-cell batteries are a "one or the other" option. This allows for multiple electronics configurations (larger or smaller motors, higher complexity systems, etc) down the line. The battery type not used will then be replaced with an FPGA board. 

The largest motor and ESC was used in the template, so if the open UAS ESC is put in, it will also need the Switch file, with the switch placed very close to the Open UAS ESC. The height of the bottom layer can be adjusted, but keep in mind any wires that you will need to feed down from the top to the bottom, and any spacing issues that could occur from that.

The color cordination is as follows: 

Blue - Pixhawk, Power Module, BEC for Power Module/Pixhawk, and the GPS

Orange - 6 cell battery (or FPGA depending on power configuration) and 10 gage capable Wagos (splicers that routes all power and ground between the parts)

Light Orange - 3 cell battery(ies)

Green - Motor and ESC

Yellow - Communications (telemetry, receiver, etc) (at the point that this document was made, only the long range telemetry was taken into consideration)

Red - BEC for Servos and 12 gage capable Wagos (2)
