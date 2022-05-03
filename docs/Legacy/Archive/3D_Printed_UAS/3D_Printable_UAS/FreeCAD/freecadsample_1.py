#Jessica Glass
#Python sample script in free cad -- creating lines/arcs and extruding
import Part
from FreeCAD import Base

#Creating points in the plane
V1= Base.Vector(0,10,0)
V2= Base.Vector(30,10,0)
V3= Base.Vector(30,-10,0)
V4= Base.Vector(0,-10,0)

#Creating "helper points" to create arcs
VC1 = Base.Vector(-10,0,0)
C1= Part.Arc(V1, VC1, V4)
VC2= Base.Vector(40, 0, 0)
C2 = Part.Arc(V2,VC2,V3)

#Forming lines between two points
L1= Part.Line(V1,V2)
L2= Part.Line(V4,V3)

#Connecting everything into a shape
S1 = Part.Shape([C1,C2,L1,L2])

#extruding
W=Part.Wire(S1.Edges)
P=W.extrude(Base.Vector(0,0,10))

#Showing the part
Part.show(P)
