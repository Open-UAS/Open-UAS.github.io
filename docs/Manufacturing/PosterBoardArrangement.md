# Poster Board Arrangement Settings  
Poster boards can be used to manufacture some parts of the fuselage and wing. It's important to find the best arrangement of these parts to reduce material waste. This problem is generally referred to as the bin packing problem. Several algorithms have been developed to solve this problem before with JS, MATLAB, and C++. Based on our research, the libnest2d library is the easiest, most effective algorithm for finding the best arrangement to cut parts on the poster board. To ease the process, PrusaSlicer 2.5.0 can be downloaded since the libnest2d library is already integrated within this open-source 3D printing software.  
 
References:<br> 
[Bin Packing Problem](https://en.wikipedia.org/wiki/Bin_packing_problem)<br>
[Libnest2d Library](https://github.com/tamasmeszaros/libnest2d)<br>
[PrusaSlicer Download](https://www.prusa3d.com/page/prusaslicer_424/)
 
## 1. Create STL Files 
First, to use the PursaSlicer, you will need to create STL files of your parts using CAD software such as Fusion360 or SolidWorks. If you are using Fusion360, you can export the parts as STL files by right-clicking on the body and selecting 'Save as Mesh'. Even if your parts are designed in other units, you must choose the mm units from the 'Save as Mesh' options. If you are using SolidWorks, you can go to File -> Save As and select the document type as STL. Then, click on the 'Options' button and convert the units to mm. PrusaSlicer software doesn't have the option to change the global units. If STL files are exported with inch units, you can scale the parts by 2540%. It's important to note that the thickness of your parts must be the same as the thickness of the material that will be used.  
 
## 2. Import to PrusaSlicer 
After opening the PrusaSlicer, set the bed dimensions to the same size as your material board in mm units from Printer Settings -> Bed Shape -> Settings -> Size. Then head back to the Plater page, and you can import as many parts as possible  
from File -> Import or using the Ctrl + I shortcut. 
 
## 3. Arrange (Bin Packing Problem) 
The imported parts can be in different orientations. Rotate each part until they are all parallel to the bed. Select the required spacing between parts and check to enable the rotations option by right-clicking on the arrange option at the toolbox bar on the upper side of the window. Then you can check for different alignment options with shortcut A. If you are cutting the parts with CNC for better machining, make sure the spacing is at least the same as the tolerance of your machine. If you are cutting the parts with a knife, we recommend setting the spacing to 1 mm.   
 
## 4.1 Export (For Machining) 
If your machine works with G-code, you can easily export the G-code with Ctrl + G shortcut. If STEP, DWG, or DXF formats are needed, we recommend exporting the plate as an STL file and then post-processing it in Fusion360 or SolidWorks with relevant manufacturing settings. 
 
## 4.2 Export (For Cutting with Knife) 
 
<u>1. via Fusion360</u>
 
After exporting the plate as an STL file, open it via Fusion360. Go to  
Design Workspace -> Mesh -> Modify -> Convert Mesh and select all the meshes to convert them to bodies. Now, you can see the coordinates of your parts on the bottom right of the window by clicking on the corner points of the parts. If the origin is not the same as the bed origin in PrusaSlicer, go to Manufacture Workspace -> Fabrication -> Setup. Set operation type as cutting and orientation as select X & Y axes. Select the X and Y axis from the corner of the reference region manually (Red: x-axis / Green: y-axis) and then set the origin setting to the selected point. 
 
<u>1. via SolidWorks</u>

Go to File -> Open and select the STL file. Then, click on the 'Options' button and select the surface body from the 'import as' option. You can see the coordinates of your parts on the bottom right of the window by clicking on the corner points of the parts.  
 
You can mark these locations on the posterboard and connect the dots to create the part drawings to cut them with a utility knife. We recommend holding a metal straight edge flush with the edge you are cutting and running the knife along the metal.  

Here is the poster board arrangement (22x28-in) we created following the procedures above.


![Poster Board](docs/Manufacturing/posterboard.png)


| #        | x-axis   | y-axis   | #        | x-axis   | y-axis   | #        | x-axis   | y-axis   | #         | x-axis    | y-axis    |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|-----------|-----------|-----------|
| 1        | 323.848  | 0.254    | 12       | 4.561    | 194.502  | 23       | 415.121  | 361.505  | 34        | 320.514   | 415.991   |
| 2        | 574.673  | 0.254    | 13       | 2.497    | 195.357  | 24       | 457.624  | 404.008  | 35        | 25.747    | 463.784   |
| 3        | 617.176  | 42.757   | 14       | 637.497  | 241.077  | 25       | 322.022  | 342.299  | 36        | 25.747    | 415.991   |
| 4        | 323.848  | 42.757   | 15       | 637.497  | 251.237  | 26       | 499.314  | 424.971  | 37        | 25.747    | 314.709   |
| 5        | 4.651    | 24.167   | 16       | 2.497    | 296.957  | 27       | 499.314  | 494.046  | 38        | 320.514   | 366.69    |
| 6        | 4.651    | 151.167  | 17       | 86.038   | 291.945  | 28       | 322.022  | 494.046  | 39        | 320.514   | 414.483   |
| 7        | 639.561  | 66.5     | 18       | 86.038   | 324.05   | 29       | 558.75   | 495.3    | 40        | 156.961   | 152.169   |
| 8        | 639.561  | 108.833  | 19       | 568.638  | 257.197  | 30       | 558.75   | 557.213  | 41        | 25.747    | 414.483   |
| 9        | 639.561  | 109.835  | 20       | 568.638  | 358.798  | 31       | 321.768  | 557.213  | 42        | 487.161   | 108.833   |
| 10       | 639.561  | 236.835  | 21       | 708.449  | 361.505  | 32       | 321.768  | 495.3    | 43        |           |           |
| 11       | 4.561    | 152.169  | 22       | 708.449  | 404.008  | 33       | 320.514  | 515.764  | 44        |           |           |

X and Y coordinates are in mm units.