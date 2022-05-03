clear, clc, close all
%% Open UAS motocalc plot generator
%{ 
Script Author: John Levandowski 
date: 10/20/2020
###########################################################################
Script that computes thrust requried based off of CFD data and a txt
file output and plots the mototcalc thrust available, efficiency, and current 
draw.
###########################################################################
---------------------------------------------------------------------------
To use:
1) Enter aircraft parameters

2)

3) Enter the name of the motor and prop into the commandline

4) Select the .txt file containing the output from motocalc

5) Select if you would like to add another motor/prop combo to compare
 
6) Two plots should be generated. Depending on if the thrust available
   curve intersects with the thrust requried curve, type yes in the command
   prompt to generate the report, or type no to exit the program.
    - The option to not generate the report is so you can go back into
      motocalc and adjust the throttle so the thrust available intersects
      the thrust requried curve at the cruise velocty

7) Follow the pompts to generate the PDF
---------------------------------------------------------------------------
###########################################################################
%}
%% Begin Script
%% inputs/constants
span = 72/12; %ft
rho = .002377;      %slugs/ft^3 (density at 0 ft)
Sref = 575.72/144; %ft^2 (wing area from cad model)
weight = 4.5; %lbs (this is just from what I'm remembering, could be wrong)
Cd0 = 0.01572257; %from CFD
CLmax = 0.3146053; %from CFD
fuselageOverWingspan = 4/72;
%e = .7; %oswald efficiency factor, usually around .7 ish
%% Calculating aircraft parameters
AR = span^2/Sref;
e = .8 %oswald efficiency
K = 1/(pi*e*AR);
%% Get thrust required curve
% uses Drag = q*CD0*Sref+(2*K*W^2/(rho*Sref*V^2)) = Thrust
Velocities_MPH = 20:.2:60;
Velocities_FT_s = Velocities_MPH*5280/3600;
q = Velocities_FT_s.^2*rho/2;
Drag_lbf = q.*Cd0*Sref+(2*K*weight^2)./(rho*Sref*Velocities_FT_s.^2);
Drag_oz = Drag_lbf*16;
ThrustReq = [Velocities_MPH;Drag_oz]';

%% Get motocalc output(s)
num_plots = 1;
while(true)
    Motor(num_plots) = string(input("Enter The Motor: ","s"));
    Prop(num_plots) = string(input("Enter the Prop: ","s"));
    MP(num_plots) = Motor(num_plots)+", "+Prop(num_plots);
    [File,Path] = uigetfile('*.txt','select motocalc txt file'); 
    MotoCalcDat{num_plots} = parseFile(fopen([Path File]));
    if(menu('Add another Motocalc spreadsheet?',{'yes','no'})==2)
        break
    end
    num_plots=num_plots+1;
end
%% Find Velocities for max range, loiter, and stall
angles = atan(ThrustReq(:,2)./ThrustReq(:,1));
V_maxRange = ThrustReq(find(angles==min(angles)),1);
V_maxLoiter = ThrustReq(find(ThrustReq(:,2)==min(ThrustReq(:,2))),1);
V_stall = sqrt(2*weight/(CLmax*Sref*rho))*3600/5280;

%% Finding amp draw and cruise eff at cruise condition
for l = 1:num_plots
    for k = 2:length(cell2mat(MotoCalcDat(l)))
        temp = cell2mat(MotoCalcDat(l));
        if temp(k-1,1)<=V_maxRange&&temp(k,1)>=V_maxRange
            CruiseAmps = temp(k,5);
            CruiseEff = temp(k,16);
        end
    end
end

%% Plotting Thrust available and Amps vs velocity
ampsPlot = figure;
rlegend = {};
llegend = {};
plot(ThrustReq(:,1),ThrustReq(:,2));
hold on

for j = 1:num_plots
    genPlot(cell2mat(MotoCalcDat(j)),5); %Plot with amps
    rlegend = [{"Thrust Available (oz)"+MP(j)},rlegend];
    llegend = [{"Current Draw (Amps)"+MP(j)},llegend];
    ylabel("Current (amps)")
    yyaxis left
end

xline(V_maxRange,"green");
xline(V_maxLoiter,"c");
xline(V_stall,"r");

rlegend = [{"Thrust Requried"},rlegend,{"Max Range Velocity @"+V_maxRange+" mph","Max Loiter Velocity @"+V_maxLoiter,...
    "Stall Velocity @"+V_stall+" mph"},llegend];
legend(rlegend)

hold off
%% Plotting total Efficiency and Thrust available vs Velocity
effPlot = figure;
rlegend={};
llegend = {};
plot(ThrustReq(:,1),ThrustReq(:,2));
hold on
for j = 1:num_plots
    genPlot(cell2mat(MotoCalcDat(j)),16); %plot with efficiency
    rlegend = [{"Thrust Available (oz)"+MP(j)},rlegend];
    llegend = [{"Total Efficiency"+MP(j)},llegend];
    ylabel("Efficiency")
    yyaxis left
end

xline(V_maxRange,"green");
xline(V_maxLoiter,"c");
xline(V_stall,"r");

rlegend = [{"Thrust Requried"},rlegend,{"Max Range Velocity @"+V_maxRange+" mph","Max Loiter Velocity @"+V_maxLoiter,...
    "Stall Velocity @"+V_stall+" mph"},llegend];
legend(rlegend)

hold off
%% end script
%% Helper functions
%plotter
function genPlot(MotorDat,index)
    plot(MotorDat(:,13))
    hold on
    grid on
    xlabel("Velocity (mph)")
    ylabel("Thrust (oz)");
    yyaxis right
    plot(MotorDat(:,index))
end

function Dat = parseFile(FID)
i = 1;
tline = fgetl(FID);
while(~feof(FID))
    if i >=14
       if tline == ""
           break
       end
       Dat(i-13,:) = sscanf(tline,"%f %f %f %f %f %f %f %f %f %f %f %f %f %f %f %f %f",[1,17]);
    end
    tline = fgetl(FID);
    i=i+1;
end


end
