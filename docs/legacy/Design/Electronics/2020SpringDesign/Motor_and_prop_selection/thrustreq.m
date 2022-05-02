clear, clc, close all
%% inputs/constants
span = 72/12; %ft
rho = .002377;      %slugs/ft^3 (density at 0 ft)
Sref = 575.72/144; %ft^2 (wing area from cad model)
Weight = 4.5; %lbs (this is just from what I'm remembering, could be wrong)
CD0 = 0.01572257; %from CFD
CLmax = 0.3146053; %from CFD
e = .8; %approximation
%% Calculating aircraft parameters

AR = span^2/Sref;
K = 1/(pi*e*AR);
%% Thrust=Drag 
% uses Drag = q*CD0*Sref+(2*W^2/(rho*Sref*V^2)) = Thrust
Velocities_MPH = 20:.2:60;
Velocities_FT_s = Velocities_MPH*5280/3600;
q = Velocities_FT_s.^2*rho/2;
Drag_lbf = q.*CD0*Sref+(2*K*Weight^2)./(rho*Sref*Velocities_FT_s.^2);
Drag_oz = Drag_lbf*16;
angles = atan(Drag_lbf);

%% Finding velocities
velocity_stall = sqrt(2*Weight/(Sref*CLmax*rho))*3600/5280; %MPH
velocity_cruise_max_loiter = Velocities_MPH((Velocities_FT_s.*Drag_lbf==min(Velocities_FT_s.*Drag_lbf))); %MPH
velocity_cruise_max_range = Velocities_MPH((angles == min(angles))); %MPH

%% Plotting
plot(Velocities_MPH,Drag_oz);
grid on
hold on
xline(velocity_stall,"red");
xline(velocity_cruise_max_range,"blue");
xline(velocity_cruise_max_loiter,"green");
xlim([0,inf])
ylim([0,inf])
legend("Thrust req","stall velocity @ "+velocity_stall+"mph",...
    "Max range cruise velocity @ "+velocity_cruise_max_range+" mph"...
    ,"Max loiter time cruise Velocity @ "+velocity_cruise_max_loiter+" mph");
