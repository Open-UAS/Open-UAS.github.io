## Maintenance for the 3D printer

Summary table for quick refernce :
| Part | How often it should be cleaned | How to clean it| 
| :---: | :---: | :---: | 
| Rods | Before every print | Wipe with a clean paper towel. DO NOT USE A CHEMICAL CLEANER OF ANY KIND!!!!!| 
| Printing bed | Before every print | Wipe with a wet paper towel. Only use soap and water on a towel if glue was previously used on the bed and remains on the surface. |
| Flash Drive | Every Semester (approx 16-20 weeks) | Plug into the USB port on the laptop from here there are two methods. 1. Manually remove the files from the files tab 2. Right click the device in the files tab and select format, then quick format to remove everything on the flashdrive. \* For mac please look up instructions|
| Environment | Monthly | Move the printer to a different location and wipe down the counter and dust surrounding the area. Replace printer to location. \*Remember to unplug the printer when moving it |
| Calibration of Printer head (simple)| Once to twice a year or as needed if issues arise | First step to go directly to the printer settings, Select advance settings, Select Nozzle offset,(before the next step be sure to record important settings refernce below for how and what to save before cailbrating) Select AutoMeasure. Make sure there isn't anything that would get in the way of the printer head and let it do it's thing. In some case it make take more than one try to correctly calibrate the printer head. | 
| Calibration of Printer (Complex) | As needed. Usually when issues such as lopsided holes, non-squared edges and layers appearing skewed. | First step is to print a calibration square and measure the offset from perfect angles/holes. Then going into the gcode in Cura we can adjust the x, y and z axis distance and complete a reprint of the same calibration square. I recommend refering to the documention of the calibration square you choose to you. | 
| Adjustment of z-offset| As needed. Is needed When the printer head is too close or too far from the printing bed. (signs include poor bed adhesion, flatened printed filament, consitant clogging of the nozzle, or head running into the bed itself) | This process is itertive in naturate and starts with first going into the printer menu, selecting advance settings, and then selecting z offset. From here it is good to note what the z offset is currenlty at as this will be your starting point. Other notes the z offset should be a negtive number, it is recommend any changes made are done in increments of .01mm which is NOT the default setting and will have to be selected, the more negtive the number the further the head will be set from the bed (in other words closer to zero closer to the bed). Adjust as needed with good judgement and try a new print. Be sure to watch as it gets close to the bed and readjust as needed for the head to ensure the head is where it needs to be. |  

## General use 

Before using the printer, a few things should be cleaned and checked before beginning the print. The biggest and most important part of regular maintenance for the printer is making sure the rods are dust free. A big note for the printer rods is that they are used by the self-lubricating bearing that connects the printer head and bed to the rest of the printer. This is important because if you add a cleaner that is unsafe for the bearing, you will cut the printer's lifespan significantly. 

With this in mind, the first maintenance step before each print is to take a clean paper towel and wipe the rods as is. DO NOT add cleaner (Including soap and water) or use a disinfectant wipe; this will cause damage to the bearings and, therefore, the printer. In many cases, black/ gray dirt may come off the rods. That's okay; that is why we are wiping them down; if we do not remove the dirt, it will build up and create a squeaking noise (otherwise described as cat screeching). If it does get to this point, it will take a few times to wipe off the rods before the noise stops.

For the printing bed, the prep is a little different. Depending on what material you are printing with, it will depend on how you prep it, but the most common way is to wipe the bed down with a wet paper towel to remove any dirt on the bed. If the last print you did needs to be glued onto the bed, it is recommended to wipe the bed down with a soapy paper towel until the glue is completely removed, then dry the bed afterward. Depending on the material you are printing with, it might change, but currently, for the materials in the lab, you then wipe the bed down with a 93% alcohol solution that can be applied with a paper towel (not the one you cleaned it with). 


## Caibration 

Every so often there is the possiblity of the cailbration being a bit off on the printer espically if the printer is being fequently in a short time span. There are a few different ways to go about this depending on the needs of the printer. If it is just a small issue the printer has it own cailbration setting under the menu tab in advance settings. Before Cailbrating you should record a few different settings as they can be reset during the cailbration process and will need to be manually reinputed to the printer. These Include the z offset (has its own tab in advance settings), E steps, X steps, Y steps, and Z steps (E, X, Y, Z steps are all under the Steps/mm tab in advance settings). 

Once you have the information on the settings written down we can then go back to the advance settings tab and then select the Nozzle offset tab.Then select automatically measure. This will start the cailbration process and you need to make sure nothing is blocking the path of the printer head and wait for the printer to stop. Repeat the process as needed and then check the z offset, E steps, X steps, Y steps, and Z steps and reinput them if needed. 


## Z offset

The z offset on the printer is important to know and adjust as needed. This setting is respondable for how far/close the head is to the bed to the printing bed. There are a few different ways of going about determining the needed offset however, the one described in the above summary table is the most straightforward and least complex method. Please remeber to start slow and not make large jumps in the z offset as it can result in damage to the printing bed.  

Over time the z offset will shift due to a varity of different reasons and is something to watch out for. If there is a big and sudden shift in the z offset I recommend doing a printer cailbration first and then adjusting the z offset. This should help you get closer to the desired z offset in a shorter time period. In most cases it will also fix other issues that are occuring during printing such as lop sided holes or skewd edges.

