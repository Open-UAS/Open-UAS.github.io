*Controls*
1. The controls system shall utilize both an open and closed feedback loop.

2. The controls system shall react quickly in response to internal commands.

3. The controls system shall react quickly to external forces such as wind.

4. The controls system shall use the wings and ailerons as primary control.

5. The controls system shall be stable in cruise flight.

6. The controls system shall operate reliably in max speed flight.

7. The controls system shall included the needed cooling devices to stay below critical heat levels.

8. The controls system shall be activated using electronics and airflow only.

9. The controls system shall have restricted range of motion.

10. The controls system shall be light enough to be easily controlled with servos.

11. The controls system shall operate without harming other components of the UAS.

*Electronics*

12. The electronics subsystem shall include sufficient sensors to inform flight decisions.

13. The electronics subsystem shall provide an interface to receive ground commands.

14. The electronics subsystem shall provide an interface to send data to the ground.

15. The battery shall be replaceable.

16. The sensors shall be replaceable.

17. The wires shall be replaceable.

18. The battery shall be able to be reasonably moved within the aircraft.

19. The flight computer shall be able to be reasonably moved within the aircraft.

20. Electrical components shall be placed such that there is sufficient space for heat to dissipate.

21. Facilities for cooling vital electrical components shall be provided.

22. The electronics subsystem shall provide additional sensors to ensure redundancy.

23. The flight computer shall be separated such that no components, beyond sensors and controls, may be connected.

24. The flight computer shall be sufficiently fast to process incoming sensor data.

25. The battery shall provide a minimum of one hour of operational flight time.

26. The users shall provide documentation of usage of the battery for both safety and lifespan purposes.

27. Auxiliary electronic units used shall have the ability to be limited with regards to range of motion.

28. Auxiliary electronic units used shall turn off with user command during operation.

29. The onboard receiver shall be capable of receiving messages up to a distance of at least 1 mile from the ground station.

30. The onboard transmitter shall be capable of sending messages at a distance of at least 1 mile to the ground station.

*Ground Equipment*

31. The launch system shall launch the UAS into flight.

32. The launch system shall be controlled by hand or foot.

33. The launch system shall use a bungee cord.

34. The launch system shall launch the weight of the UAS plus payload.

35. The launch system shall have consistent launch characteristics.

36. The launch system shall be easily reset for multiple launches.

37. The launch system shall have adjustable angle of launch and direction.

38. The launch system shall be stable on different terrains.

39. The launch system shall be completely documented in Solidworks.

40. The launch system shall be painted all one color to match the UAS.

41. The transmitter shall be capable of communicating with the UAS for a distance of at least 1 mile.

42. The receiver shall be capable of communicating with the UAS for a distance of at least 1 mile.

*Propulsion*

43. The propulsion system shall provide a maximum acceleration of (Max Acceleration).

44. The propulsion system shall provide a minimum acceleration of (Min Acceleration).

45. The propulsion system shall use an electric motor only.

46. The propulsion system shall provide a maximum velocity of (Max Velocity).

47. The propulsion system shall provide a minimum velocity of (Min Velocity).

48. The propulsion system shall include the needed cooling devices to stay below critical heat levels.

*Structure*

49. The wings shall be able to withstand drafts of up to 50 knots.

50. The wings shall be constructed of EPP foam.

51. The wingspan shall be 5 feet. 

52. The wing planform area shall be 2 square feet. 

53. The maximum coefficient of lift shall be upwards of 2.

54. The wing loading factor shall not exceed 3.5 pounds per square foot.

55. The wings shall be removable.

56. The wings shall contain a rod through the center to add weight.

57. The wings shall have control surfaces.

58. The wings shall have multiple paths inside to allow wires for control surfaces.

59. The wings shall have carbon fiber wing spars. 

60. The fuselage shall house the required electronics. 

61. The inside of the fuselage shall cushion and protect components.

62. The fuselage shall contain custom 3D printed storage containers for the components.

63. The inside of the fuselage shall be accessible.

64. The 3D printed components shall be produced by the LulzBot Taz 6 3D printer. 

65. The 3D printed structural components shall use ABS filament. 

66. The non-structural 3D printed components shall use PLA filament. 

67. All components shall be placed such that the center of gravity is stable. 

68. The weight of the total structural frame without electrical components shall not exceed 2.5 lbs.

69. The entire frame shall be waterproof and protect housed electrical components from water.


*Software*

WHEN THE flight software generates a command, THE flight software SHALL execute this command eventually.
WHEN THE user generates a command, THE flight software SHALL execute this command eventually.
WHEN THE flight software generates a command, THE command SHALL be placed in the command queue.
WHEN THE user generates a command, THE command SHALL be placed in the command queue.
WHEN a command is next in the command queue, THE flight software SHALL execute it within [COMMAND_IN_QUEUE_CYCLES] cycles
Only THE user SHALL generate a safety-critical command.
THE non-safety-critical software SHALL NOT generate a safety-critical command
THE non-safety-critical software SHALL NOT write to the safety-critical data
WHEN THE user generates a command, THE flight software SHALL execute the user's command before any internally generated commands
The flight software shall use sensor values to make controls decisions. 
Each routine containing safety-critical commands SHALL be executed every clock cycle.
THE sensor data SHALL be read-only
THE user SHALL be able to read the command queue
ALL sensor buffers SHALL not overflow
THE flight software SHALL update sensor values BEFORE executing each command.
THE flight software SHALL execute only one command at a time.
The flight software shall detect gyroscope values that do not match environmental assumptions.
The flight software shall detect gyroscope values that do not match environmental assumptions.
The ground station shall be able to inspect all sensor values during flight.
The flight software shall not make autopilot decisions using data older than [SENSOR_OLD_TIME] milliseconds.
The flight software shall abstract control details, such that only an architectural file shall be changed in the event that the aircraft is reconfigured (i.e. “bank left” is “bank left” even if motors are swapped or new parts are added)
The flight software shall detect the absence of sensor values.
The flight software shall detect a change in the center of gravity.
The flight software shall measure rotation.
The flight software shall measure acceleration.
The flight software shall measure wind speed.
The flight software shall measure altitude.
The flight software shall  detect failure of the motors.
The flight software shall monitor power consumption of each aircraft component
The flight software shall direct the aircraft to land at predetermined coordinates in the event of a loss of connection to the ground station.
The flight software shall immediately return all control to the operator in the event of a software failure.
The flight software shall not starve any process.
The flight software shall only use data values within the same timespan (consistent across sensors).
The flight software shall continuously report a set of pertinent values to the ground station.
