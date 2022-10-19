# 3D printer settings:

The following are the settings that we found successful when printing various parts in PLA and ABS.

## PLA (Polymaker 2.85mm)
- Nozzle temp: 220&deg;C
- Bed temp: 45&deg;C
- Probe Temp: 190&deg;C
- Soften Temp: 190&deg;C
- Wipe Temp: 190deg&C
- Final Print Temp: 200&deg;C
- Part Removal Temp: 40&deg;C
- Print Speed: 45mm/s

## ABS (Polymaker 2.85mm)
- Printing Temp:  250&deg;C
- Build Plate Temp: 90&deg;C
- Probe Temp: 160&deg;C
- Soften Temp: 170&deg;C
- Wipe Temp: 240&deg;C
- Final Print Temp: 240&deg;C
- Part Removal Temp: 90&deg;C
- Print Speed: 45mm/s


# The Use of Settings to improve the quailty of a print
3D printers have a variety of applications that can be useful for several reasons. This document will cover some basic and helpful settings for 
ensuring a quality print for different needs. Please note that the settings gone over in this section are not related to print mature and or material type, and these settings should be checked before any other troubleshooting is done. Please refer to the 3D printing settings sections under the Manufacturing documentation if you want this information. 

# Bed Adhesion settings 
One of the most important part of ensuring a qutily print from a 3D printer is to ensure the bed adhesion settings are set to match the needs of the part being printed. 
There are 3 differnet settings that can be selected for the bed adhesion that are helpful for different part types. 

Bed Adhesion types
* Skirt
* Brim 
* Raft 
* None \* Technically not a type but is an option 

# Skirt 
The skirt setting in Cura Lulzbot Edition is simple to use and what it does is create a line around the part before printing the part. This is useful in some cases if 
the printer has poor material flow issues. It is not commonly used for many parts unless the part is larger and is printed to a higher/fine quality to ensure the material flows smoothly. 


# Brim 
More commonly used than the skirt setting, the brim setting is reserved for odd-shaped or larger prints. The brim is a layer of filament that creates a larger adhesive surface that is better for holding onto the part. In other words, the part has less of a chance of being pulled off the build plate midpoint. For more of the odd-shaped prints, this helps ensure the print layers are smoother at the start of the print and will match the quality of the final layers.   
It does use a decent amount of filament during printing and is more of a waste of material for smaller prints, so using a brim in those cases would not be the best option unless all other options for diagnosing the problem have been addressed. 


# Raft
A raft is infrequently used for parts. This setting works best for smaller parts that do not have a "good" amount of adhesive surface connected to the build plate. This leads to the part being pulled off the build plate early in print and, in some cases, can cause damage to the nozzle from clogging. 

# None 
This setting is more used for prints where you would use a skirt; however, you are not having problems with the flow of the filament; therefore, using a skirt is unnecessary. In many cases, this is the best option to limit filament waste. This is also an acceptable bed adhesion setting if the print quality is lower, as it does not assist or take away from the print quality. 


\* In some cases, using a **light** layer of glue on the print bed can eliminate the need for adjustments in the bed adhesion settings. Please note that this method does require the user to clean the bed before and after the print takes place to help ensure the print bed is smooth for printing. 


# **Other Helpful Settings/Actions for Bed adhesion** 
The bed adhesion can be affected by several external factors and the g code settings set by the slicer. These external factors result from the environment in which the printer is stationed to print. In the case of the lab, we know that a draft affects the quality of the prints we get regardless of the settings we use in Cura Lulzbot Edition. The draft creates an issue with the layers being smooth when the print is completed due to inconsistent cooling time. A newer setting released by Cura Lulzbot Edition is the experimental setting referred to as *Enable Draft Shield* Which then brings up a range of different settings, including the distance from the print it is along with the height of the shield. 
This setting can be useful in spaces like the lab where a small draft affects the print, even with a printer shield. It does use a lot of material to create the shield, so if used, try to limit the excess nature of the setting. This can include shorting the default height or bringing the shield closer to the print.  
