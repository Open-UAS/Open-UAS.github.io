# -*- coding: utf-8 -*-
"""
Created on Wed Oct  5 15:20:09 2016

@author: jessica
"""

#Jessica Glass
#Creating Design Space for small UAS, determining some initial 
#flight characteristics, graphs, etc...

import math

##########Some constants and variables################

rhossl=1.225; #kg/m^3 (density at standard sea level)
rho=1.20; #kg/m^3 (assumed density at flight altitude)
np=0.7; # (assumed propeller efficiency)
V=15.0; #Cruise speed (m/s) , Hand launch (20m/s for bungee)
n=2.5; #Turn loading (Based on typical bank angle of UAS of this class)
g=9.81; #Gravity constant
cdo=0.035; #Estimation of parasitic drag (ranges from 0.025-0.04)

e=0.8; #assumed efficiency value
ldds=12.0; #assumed lift-to-drag ratio for this design space
K=1.0/(4.0*cdo*ldds**2.0); #drag due to lift
AR_rec=1/(math.pi*e*K) #Recommended Aspect Ratio

clmax= input("Enter clmax for chosen airfoil   ");
CLmax=0.9*clmax; #3D estimation of CLmax for 2D input -- only valid for AR>5
dto=5.0; #Takeoff distance (in meters) - assuming small value for hand launch
vstall=9; #Stall speed - (9m/s for hand; 12m/s for bungee)


##############   Payload Breakdown   ######################

#Ironbird Components (All except propulsion parts)
#Measured in grams, converted to Kg after summation

ic_1=38.0; #Pixhawk
ic_2=16.8; #GPS compass kit
ic_3=11.0; #Power Regulator
ic_4=9.0;  #Airspeed Sensor
ic_5=43.0; #SOM Evaluation Kit
ic_6=9.0;  #6-channel DSMX Aircraft Receiver

Wp= (ic_1 + ic_2 + ic_3 + ic_4 + ic_5 + ic_6)/1000; #Payload estimation in kg
Wto=Wp/.201 #Estimated take-off weight, based on this class of aircraft


###############  Creating Design Space  ####################

WS=range(0,180,1); #range of values for wing loading
HPW=range(0.0,0.05,0.001); #range of horsepower-to-weight ratio

#Constraint equations that define propeller driven flight



