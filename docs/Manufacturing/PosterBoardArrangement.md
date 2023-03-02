# Poster Board Arrangement Settings 
Poster boards can be used to manufacture some parts of the fuselage and wing. It’s important to find the best arrangement 
of these parts to reduce the poster board waste. This problem is generally referred to as the bin packing problem. 
Several algorithms have been developed to solve this problem before with JS, MATLAB, and C++. Based on our experience, 
the libnest2d library was the most effective algorithm for finding the best arrangement to cut parts on the poster board. 
To ease the process, PrusaSlicer 2.5.0 can be downloaded since the libnest2d library is already integrated within this open-source 
3D printing software. 

References:
Bin Packing Problem: https://en.wikipedia.org/wiki/Bin_packing_problem
Libnest2d Library: https://github.com/tamasmeszaros/libnest2d
PrusaSlicer Download: https://www.prusa3d.com/page/prusaslicer_424/
Fusion360 Download (Free Educational License): https://www.autodesk.com/campaigns/education/fusion-360

## 1. Create STL Files
Firstly, create STL files of your parts in mm units using a CAD software, Fusion360 or SolidWorks. It’s important to note that the
thickness of your parts must be the same as the thickness of the poster board that will be used. 

## 2. Import to PrusaSlicer
After opening the PrusaSlicer, set the bed dimensions the same size as your poster board in mm units from 
Printer Settings -> Bed Shape -> Settings -> Size. Then head back to the Plater page, and you can import as many parts as possible 
from File -> Import or using the Ctrl + I shortcut.

## 3. Arrange (Bin Packing Problem)
The imported parts can be in different orientations. Rotate each part until they are all parallel to the bed. Select the required 
spacing between parts and check to enable rotations option by right-clicking on the arrange option at the toolbox bar on the upper 
side of the window. Then you can check for different alignment options with shortcut A. If you are cutting the parts with CNC for 
better machining, make sure the spacing is at least the same as the tolerance of your machine. 

## 4.1 Export (For Machining)
If your machine works with G-code, you can easily export the G-code with Ctrl + G shortcut. If STEP, DWG, or DXF formats are needed, 
we recommend exporting the plate as an STL file and then post-processing it in Fusion360 or SolidWorks with relevant manufacturing 
settings.

## 4.2 Export (For Cutting with Knife)
After exporting the plate as an STL file, open it via Fusion360. To set the origin (bottom left) the same as the bed in PrusaSlicer, 
go to Manufacture Workspace -> Fabrication -> Setup. Set operation type as cutting and orientation as select X & Y axes. Select the 
X and Y axis from the bottom left of the reference region manually and then set the origin setting to the selected point. Then, go to 
Design Workspace -> Mesh -> Modify -> Convert Mesh and select all the meshes to convert them to bodies. Now, you can see the 
coordinate points of your parts on the bottom right of the window by clicking on the corner points of the parts. You can mark these 
locations on the posterboard and connect the dots to create the part drawings to cut them with a utility knife. 