# Motor selection process
TODO:
- Using motocalc
- using the motocalc comparison script

Starting with our CFD data, we can use a Thrust equals drag approximation to estimate the thrust requried at a given Velocity. The equation used is:
- insert thrust req equation

Where:
- v is velocity
- rho is density
- W is weight
- e is the oswald efficiency
- Sref is planform wing area
- CD0 is the zero lift drag coefficient. (this can be found as the minimum of the CD vs alpha polar and is the number we need from CFD)

We can also use this curve to find our max endurance and max range cruise velocities. Max endurance happens at the minimum power draw. This can be found by multiplying the thrust required curve by velocity again, and finding the minimum of the curve. Max range occurs at the of the thrust requried curve
Plotting this for a range of velocities and using our aircraft CD0 value generated from CFD, we get this curve:
- insert thrust req curve

Using our Max lift coeficient CLmax, we can find our stall velocitie as well. The stall velocity is higher than both cruise velocities, so an arbitray velocity was picked by the pilot that was a comfortable distance above stall velocity. This is 45 mph.

# Motocalc ouput summary
*note, current is in units 
of amps, and efficiency is in percent effeciency. The current is the current draw from the battery and the efficiency is the total efficiency (i.e) eta_prop\*eta_motor*
## Badass 560kv motor:
### script output
~~~
Current draw at Cruise for Badass 560 12x10: 5.1 
Current draw at Cruise for Badass 560, 13x10: 5 
Current draw at Cruise for Badass 560, 14x10: 4.7 
Current draw at Cruise for Badass 560, 14x12: 4.5

Efficiency at Cruise for Badass 560, 12x10: 53.6 
Efficiency at Cruise for Badass 560, 13x10: 53 
Efficiency at Cruise for Badass 560, 14x10: 51.6 
Efficiency at Cruise for Badass 560, 14x12: 55.5
~~~
### summary
Lowest current draw: 14x12 @ 4.5

Highest Efficiency: 14x12 @55.5

## Badass 650kv motor:
### script output
~~~
Current draw at Cruise for badass 650, 12x10: 5.1 
Current draw at Cruise for badass 650, 13x10: 4.7 
Current draw at Cruise for badass 650, 14x10: 4.4 
Current draw at Cruise for badass 650, 14x12: 4.9

Efficiency at Cruise for badass 650, 12x10: 54.2 
Efficiency at Cruise for badass 650, 13x10: 53.6
Efficiency at Cruise for badass 650, 14x10: 51.5 
Efficiency at Cruise for badass 650, 14x12: 57 
~~~
### summary
Lowest current draw: 14x10 @4.4

Highest Efficiency: 14x12 @57

## Badass 710kv motor:
### script output
~~~
Current draw at Cruise for Badass 710kv, 12x10: 4.8
Current draw at Cruise for Badass 710kv, 13x10: 4.8
Current draw at Cruise for 14x10, 14x10: 4.9
Current draw at Cruise for Badass 710kv, 14x12: 4.5

Efficiency at Cruise for Badass 710kv, 12x10: 56
Efficiency at Cruise for Badass 710kv, 13x10: 55.8
Efficiency at Cruise for 14x10, 14x10: 55.4
Efficiency at Cruise for Badass 710kv, 14x12: 57.3
~~~
### summary
Lowest current draw: 12x10&13x10 @ 4.8  
Highest Efficiency: 14x12 @ 57.3
## Hacker A30-10XL v4 motor:
### script output
~~~
Current draw at Cruise for Hacker 900kv, 12x10: 5.2
Current draw at Cruise for Hacker 900kv, 13x10: 4.8
Current draw at Cruise for Hacker 900kv, 14x10: 5.2
Current draw at Cruise for Hacker 900kv, 14x12: 5.2
Current draw at Cruise for Hacker 900kv, 15x8: 4

Efficiency at Cruise for Hacker 900kv, 12x10: 54.2
Efficiency at Cruise for Hacker 900kv, 13x10: 53.3
Efficiency at Cruise for Hacker 900kv, 14x10: 53.5
Efficiency at Cruise for Hacker 900kv, 14x12: 55.9
Efficiency at Cruise for Hacker 900kv, 15x8: 37.9
~~~
### summary
Lowest current draw 15x8 @ 4

Highest Efficiency 14x12 @ 55.9
## Badass 790kv motor:

### script output
~~~
Current draw at Cruise for badass 790, 12x10: 5.1 
Current draw at Cruise for badass 790, 13x10: 5.2 
Current draw at Cruise for badass 790, 14x12: 5.8
Current draw at Cruise for badass 790, 15x8: 4.5 

Efficiency at Cruise for badass 790, 12x10: 51.2 
Efficiency at Cruise for badass 790, 13x10: 51.1 
Efficiency at Cruise for badass 790, 14x12: 55.1 
Efficiency at Cruise for badass 790, 15x8: 34.3
~~~

### summary
Lowest current draw: 15x8 @4.5

Highest Efficiency: 14x12 @55.1
## Badass 970kv motor:

### script output
~~~
Current draw at Cruise for badass 970, 12x10: 5.4
Current draw at Cruise for badass 970, 13x10: 5.5
Current draw at Cruise for badass 970, 14x10: 5.3
Current draw at Cruise for badass 970, 14x12: 5.5
Current draw at Cruise for badass 970, 15x8: 5.2

Efficiency at Cruise for badass 970, 12x10: 48.4
Efficiency at Cruise for badass 970, 13x10: 48.5
Efficiency at Cruise for badass 970, 14x10: 47.4
Efficiency at Cruise for badass 970, 14x12: 50.8
Efficiency at Cruise for badass 970, 15x8: 34.2
~~~
### summary
Lowest current draw: 15x8: 5.2

Highest Efficiency: 14x12 @ 50.8

### Analysis of prop/motor combinations
TODO:
- talk about most efficient prop and motor
- talk about how 970 and 15x8 have the most excess thrust
- talk about why we chose the least efficient motor
