# PX-4 PID Tuning

This page talks about tuning the controller gains in PX-4. This is essential for pilots seeking certain flight characteristics, such as increased responsiveness to controller inputs.

We have been using the same guidelines as [PX-4's Tuning Guide](https://docs.px4.io/main/en/config_fw/pid_tuning_guide_fixedwing.html) and we recommend following the same process. Here we have added some more information and lessons learnt.

## Background 

In a UAS, a PID controller ensures that the UAS responds the way the pilot expects it to. A PID controller takes in the error signal in roll, pitch, or yaw (i.e. the difference between the pilot's input command and the actual behavior) and then performs some calculations so that the error is minimized.

The PID controller has gains, or constant multipliers, corresponding to three calculations:

*Proportional*: This gain is proportional to the error signal. Increasing the P gain will proportionally send a larger correcting signal if there is a large current error.

*Integral*: This gain is proportional to the *integral* of the error signal. Essentially, it corresponds to a large signal if the cumulative error is large.

*Derivative*: This gain is proportional to the derivative of the error. It contributes to a signal that is proportional to the instantaneous rate of change of error which it finds as the difference between the current and previous error.

## Pitch tuning process

Pitch tuning focuses on adjusting the controller gains so that the aircraft responds smoothly and accurately to pitch commands. The process typically begins by tuning the **proportional (P) gain**, which determines how strongly the controller reacts to a pitch error. Increasing the P gain makes the aircraft respond faster to pitch commands such as climbs or descents. However, if the gain becomes too high, the aircraft may begin to oscillate in pitch, so the value should be increased gradually until the response is quick but still stable.

After the P gain is set, the **derivative (D) gain** can be adjusted to help damp oscillations and reduce overshoot when the aircraft approaches the desired pitch angle. Finally, a small **integral (I) gain** can be introduced to correct steady-state errors, such as the aircraft slowly drifting away from the commanded pitch attitude. The integral term accumulates small errors over time and helps the aircraft maintain the desired pitch angle during steady flight.

