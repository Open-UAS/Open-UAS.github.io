%Jessica Glass
%Code for creating design space for UAS, determining flight
%characteristics, graphs, etc...

clear all; clc; close all;

%*********CONSTANTS AND INITIAL COMMENTS***************

%some constants/variables
%All of these assumptions have been made using a bungee cord take-off
%method -- this will allow for a larger payload capability and design space 
%due to the fact that stall speed is the most sensitive parameter in this
%constraint space 

rhossl=1.225; %kg/m^3
rho=1.20; %kg/m^3
np=0.7; %assumed propeller efficiency
V=20;  %cruise speed (m/s) - Can be interchanged w/ 20m/s for bungee launch
%/15 for hand
n=2.5; %turn loading - based on typical bank angle of UAS of this class
g=9.81; %gravity constant
cdo=0.035; %estimated parasitic drag --will typically range from 0.025-0.04

AR=7.8; %estimated design AR only for sake of constraint space graph -based
%on this class of aircraft
e=0.8; %assumed efficiency factor - typical assumed value
K=1/(pi*AR*e); %drag due to lift
% **** We have the option to switch out above 3 lines to the equation
% K=1/(4*cdo*(L/D)max^2) where we will assume a value of L/D max (probably
% somewhere between 12-14) ***** In doing this we can use value of K to
% solve for "recommended" AR by AR = 1/(pi*e*K) *****

clmax=input('Enter clmax for chosen airfoil'    );
CLmax=0.9*clmax; %3D estimation of CLmax --only if AR>5
dto=30; %takeoff distance (meters)
vstall=12.5; %stall speed (m/s) -- 9m/s for hand launch

%**********Payload Breakdown*************

%Ironbird Components:
%variables will be named ic_1, ic_2, ic_3...ic_n for simplicity with the
%description of component commented next to it.  weights are all in grams &
%converted to kg after summation

ic_1=38; %3DR Pixhawk
ic_2=16.8; %3DR uBox GPS with compass kit
%ic_3=45; %Hitec HS Digital Servo
ic_4=11; %Power Regulator Castle BEC 10A
ic_5=9; %Pixhawk Airspeed Sensor Kit
%ic_6=4.3; %Pololu 4channel RC servo multiplexer
ic_7=43; %7020 Microsized SOM Evaluation Kit
ic_8=9; %AR 6-channel DSMX Aircraft Receiver

Wp_mat=[ic_1;ic_2;ic_4;ic_5;ic_7;ic_8]; 
%creating matrix for summation
Wp=(sum(Wp_mat)/1000)*2; %estimated payload weight - kilograms
Wto=Wp/0.201 
%estimated allowable takeoff weight - based on historical data of small UAS

%********End Payload Breakdown**************



%******Creating our Design Space***********

%Constraint equations to create design space:
WS=0:1:180;
HPW=0:0.001:0.05;
SC=(rho/2)*CLmax*vstall^2;
ML=(1/(550*np))*(.5*rho*V^3*cdo*(1./WS)+2*K*(n^2/(rho*V)).*WS);
ED=(4/(550*np))*cdo^(1/4)*(K/3)^(3/4)*((2/rho).*WS).^(1/2);
CRU=(2/(550*np))*cdo^(1/4)*(K)^(3/4)*((2/rho).*WS).^(1/2);
TOD=(2.44/(550*np))*(1/(g*dto))*((1/(rhossl*CLmax)).*WS).^(3/2);

%constraint space graph
figure(1)
hold on
plot(WS,ML,WS,ED,WS,CRU,WS,TOD,SC,HPW)
ylim([0,0.06]); 
legend('Max Loading/Turn','Endurance','Cruise','Takeoff Distance','Stall Condition');
ylabel('HP/W');xlabel('W/S');
title('Constraint Space - Horsepower to Weight Ratio vs Wing Loading');
hold off

%where the user will pick a design point 
prompt1= 'Enter the horsepower to weight ratio for chosen design point   ';
dhpw=input(prompt1);
prompt2= 'Enter the wing loading for chosen design point   ';
dws=input(prompt2);

%constraint space w/ design point
figure(2)
hold on
plot(WS,ML,WS,ED,WS,CRU,WS,TOD,SC,HPW)
plot(dws,dhpw,'x','markersize',10)
ylim([0,0.06]); 
legend('Max Loading/Turn','Endurance','Cruise','Takeoff Distance','Stall Condition','Design Point');
ylabel('HP/W');
xlabel('W/S');
title('Constraint Space - Horsepower to Weight Ratio vs Wing Loading');
hold off

%************PERFORMANCE CHARACTERISTICS************************

%calculating characteristics of aircraft based on design point
S=Wto/dws % S is wing area

% arprompt= 'Pick an aspect ratio   ';  
% dAR=input(arprompt); %aspect ratio
%** Above is user input for design AR which will ultimately be how this
%script is run -- I used a constant value of 8 (below) for the sake of creating
%this script for easier running and less inputs

dAR=8; %will be user input (above)
b=sqrt(S*dAR) %wingspan
CLo=Wto/(.5*rho*V^2*S)
c=S/b
%required operating lift coefficient setting lift equal to weight

%**** CLo Should be checked with airfoil to be sure that the operating lift
%coefficient corresponds to a reasonable AOA ****


%creating lift to drag ratio plot
alpha=0:0.1:14;
CL2=2*pi.*(alpha*(pi/180)); %convert AOA to radians for calculation 
%^-- this is an estimate based on prandtl's flat plate theory for airfoils
CDi=CL2.^2./(pi*e*dAR);
CD=cdo+CDi;
LDrat=CL2./CD;

figure(3)
hold on
plot(alpha,LDrat)
ylim([0,14]); xlabel('Angle of Attack');ylabel('L/D');
hold off

%finding L/D for operating lift coeff
alphao=CLo/(2*pi*(pi/180)) %operating AOA 
CDoi=CLo^2/(pi*e*dAR);
CDo=cdo+CDoi; 
ldo=CLo/CDo

%IT IS IMPORTANT TO CHECK THAT OPERATING CL, AOA, AND L/D ARE REASONABLE
%VALUES  





        


