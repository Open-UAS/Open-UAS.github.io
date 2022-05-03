clear, clc, close all
%% motocalc plot generator
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
        
-Enter aircraft parameters

- Enter the name of the motor and prop into the commandline

- Select the .txt file containing the output from motocalc

- Select if you woul5d like to add another motor/prop combo to compare
 
- Two plots should be generated. Depending on if the thrust available
   curve intersects with the thrust requried curve, type yes in the command
   prompt to generate the report, or type no to exit the program.
    - The option to not generate the report is so you can go back into
      motocalc and adjust the throttle so the thrust available intersects
      the thrust requried curve at the cruise velocty

- Follow the pompts to generate the PDF
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

desiredCruise = 45; %mph
setDesiredCruise = true; %set to true if you want to set your own cruise independant of the thrust requried curve
%% Calculating aircraft parameters
AR = span^2/Sref;
e = .7;%.7 for rectangular wings
K = 1/(pi*e*AR);
%% Get thrust required curve
% uses Drag = q*CD0*Sref+(2*K*W^2/(rho*Sref*V^2)) = Thrust
Velocities_MPH = 20:.2:60;
Velocities_FT_s = Velocities_MPH*5280/3600;
q = Velocities_FT_s.^2*rho/2;
Drag_lbf = q.*Cd0*Sref+(2*K*weight^2)./(rho*Sref.*Velocities_FT_s.^2);
Drag_oz = Drag_lbf*16;


%% Get motocalc output(s)
num_plots = 1;
while(true)
    Motor(num_plots) = string(input("Enter The Motor: ","s"));
    Prop(num_plots) = string(input("Enter the Prop: ","s"));
    MP(num_plots) = Motor(num_plots)+newline+Prop(num_plots);
    [File,Path] = uigetfile('*.txt','select motocalc txt file'); 
    MotoCalcDat{num_plots} = parseFile(fopen([Path File]));
    anotherDataSet = input("Input another motocalc plot? (y/n)","s");
    if(anotherDataSet=="n")
        break
    end
    num_plots=num_plots+1;
end
%% Find Velocities for max range, loiter, and stall

angles = atan(Drag_lbf);
%Tangent of power req curve
V_maxRange = Velocities_MPH((angles==min(angles)));
%Minimum of power req curve
V_maxLoiter = Velocities_MPH(Drag_lbf.*Velocities_FT_s==min(Drag_lbf.*Velocities_FT_s));
V_stall = sqrt(2*weight/(CLmax*Sref*rho))*3600/5280;

if setDesiredCruise == false
    desiredCruise = V_maxRange;
end
    
%% Finding amp draw and cruise eff at cruise condition
CruiseAmps = zeros(num_plots);
CruiseEff = zeros(num_plots);
for l = 1:num_plots
    for k = 2:length(cell2mat(MotoCalcDat(l)))
        temp = cell2mat(MotoCalcDat(l));
        if temp(k-1,1)<=desiredCruise&&temp(k,1)>=desiredCruise
            CruiseAmps(l) = temp(k,4);
            CruiseEff(l) = temp(k,16);
        end
    end
end

%% Plotting Thrust available and Amps vs velocity
ampsPlot = figure;
rlegend = {};
llegend = {};
plot(Velocities_MPH,Drag_oz,'color','#004887','linewidth',2);
hold on

for j = 1:num_plots
    genPlot(cell2mat(MotoCalcDat(j)),4); %Plot with amps
    rlegend = [rlegend,{"Thrust Available (oz)"+MP(j)}];
    llegend = [llegend,{"Current Draw (Amps)"+MP(j)}];
    ylabel("Current (amps)",'color','#946000')
    ax = gca;

    yyaxis left
end

xline(desiredCruise,'color',"#00877a",'linewidth',2);
xline(V_stall,'color','#87000d','linewidth',2);

rlegend = [{"Thrust Requried"},rlegend,{"Cruise Velocity @"+45+" mph",...
    "Stall Velocity @"+V_stall+" mph"},llegend];
legend(rlegend)


hold off
%% Plotting total Efficiency and Thrust available vs Velocity
effPlot = figure;
rlegend={};
llegend = {};
plot(Velocities_MPH,Drag_oz,'color','#00870b','linewidth',2);
hold on

for j = 1:num_plots
    genPlot(cell2mat(MotoCalcDat(j)),16); %plot with efficiency
    rlegend = [rlegend,{"Thrust Available (oz)"+MP(j)}];
    llegend = [llegend,{"Total Efficiency"+MP(j)}];
    ylabel("Efficiency")
    yyaxis left
end

xline(desiredCruise,'color',"#00877a",'linewidth',2);
xline(V_stall,'color','#87000d','linewidth',2);

rlegend = [{"Thrust Requried"},rlegend,{"Cruise Velocity @"+45+" mph",...
    "Stall Velocity @"+V_stall+" mph"},llegend];
legend(rlegend)
hold off

if(input("Generate Plots? (yes/no) ",'s')=="yes")
    %import libraries
    import mlreportgen.report.*
    import mlreportgen.dom.*
    motors = "";
    props = "";
    Amps = "";
    eff = "";
    Title = "";
    for i = 1:length(Motor)
        motors = motors+"& "+Motor(i);
        props = props+"& "+Prop(i);
        Title = Title + MP(i)+" vs ";
        Amps = Amps+"Current draw at Cruise for "+MP(i)+": "+CruiseAmps(i)+newline;
        eff = eff+"Efficiency at Cruise for "+MP(i)+": "+CruiseEff(i)+newline;
    end
    fprintf("%s",Amps);
    fprintf("%s",eff); 
    rpt = Report("MotocalcPlots_"+motors+"_"+props,"pdf");
    tp = TitlePage;
    tp.Title = 'MotoCalc Plots';
    add(rpt,tp);
    b = PageBreak();
    
    para = Paragraph([Amps]);
    para1 = Paragraph([eff]);
    chpt1 = Chapter;    
    chpt1.Title = Title;
    add(chpt1,Figure(ampsPlot));  
    add(chpt1,para);
    add(chpt1,b);
    add(chpt1,Figure(effPlot));
    add(chpt1,para1);
    add(rpt,chpt1)

    close(rpt);
    rptview(rpt);
end
%% end script
%% Helper functions
%plotter
function genPlot(MotorDat,index)
    plot(MotorDat(:,1),MotorDat(:,13),'linewidth',2)
    hold on
    grid on
    xlabel('Velocity (mph)','fontsize',18)
    ylabel("Thrust (oz)",'fontsize',18);
    yyaxis right
    plot(MotorDat(:,1),MotorDat(:,index),'color','#946000','linewidth',2)
    
    title('Thrust available, Thrust Required, Current Draw vs Velocity','fontsize',20);
    
end

function Dat = parseFile(FID)
i = 1;
tline = fgetl(FID);
while(~feof(FID))
    if i >=14
       if tline == ""
           break
       end
       Dat(i-13,:) = sscanf(tline,"%f",[1,17]);
    end
    tline = fgetl(FID);
    i=i+1;
end


end
