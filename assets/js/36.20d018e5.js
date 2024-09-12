(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{473:function(a,s,r){"use strict";r.r(s);var t=r(64),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"motor-selection-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motor-selection-process"}},[a._v("#")]),a._v(" Motor selection process")]),a._v(" "),r("p",[a._v("TODO:")]),a._v(" "),r("ul",[r("li",[a._v("Using motocalc")]),a._v(" "),r("li",[a._v("using the motocalc comparison script")])]),a._v(" "),r("p",[a._v("Starting with our CFD data, we can use a Thrust equals drag approximation to estimate the thrust requried at a given Velocity. The equation used is:")]),a._v(" "),r("ul",[r("li",[a._v("insert thrust req equation")])]),a._v(" "),r("p",[a._v("Where:")]),a._v(" "),r("ul",[r("li",[a._v("v is velocity")]),a._v(" "),r("li",[a._v("rho is density")]),a._v(" "),r("li",[a._v("W is weight")]),a._v(" "),r("li",[a._v("e is the oswald efficiency")]),a._v(" "),r("li",[a._v("Sref is planform wing area")]),a._v(" "),r("li",[a._v("CD0 is the zero lift drag coefficient. (this can be found as the minimum of the CD vs alpha polar and is the number we need from CFD)")])]),a._v(" "),r("p",[a._v("We can also use this curve to find our max endurance and max range cruise velocities. Max endurance happens at the minimum power draw. This can be found by multiplying the thrust required curve by velocity again, and finding the minimum of the curve. Max range occurs at the of the thrust requried curve\nPlotting this for a range of velocities and using our aircraft CD0 value generated from CFD, we get this curve:")]),a._v(" "),r("ul",[r("li",[a._v("insert thrust req curve")])]),a._v(" "),r("p",[a._v("Using our Max lift coeficient CLmax, we can find our stall velocitie as well. The stall velocity is higher than both cruise velocities, so an arbitray velocity was picked by the pilot that was a comfortable distance above stall velocity. This is 45 mph.")]),a._v(" "),r("h1",{attrs:{id:"motocalc-ouput-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motocalc-ouput-summary"}},[a._v("#")]),a._v(" Motocalc ouput summary")]),a._v(" "),r("p",[r("em",[a._v("note, current is in units\nof amps, and efficiency is in percent effeciency. The current is the current draw from the battery and the efficiency is the total efficiency (i.e) eta_prop*eta_motor")])]),a._v(" "),r("h2",{attrs:{id:"badass-560kv-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#badass-560kv-motor"}},[a._v("#")]),a._v(" Badass 560kv motor:")]),a._v(" "),r("h3",{attrs:{id:"script-output"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-output"}},[a._v("#")]),a._v(" script output")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Current draw at Cruise for Badass 560 12x10: 5.1 \nCurrent draw at Cruise for Badass 560, 13x10: 5 \nCurrent draw at Cruise for Badass 560, 14x10: 4.7 \nCurrent draw at Cruise for Badass 560, 14x12: 4.5\n\nEfficiency at Cruise for Badass 560, 12x10: 53.6 \nEfficiency at Cruise for Badass 560, 13x10: 53 \nEfficiency at Cruise for Badass 560, 14x10: 51.6 \nEfficiency at Cruise for Badass 560, 14x12: 55.5\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br")])]),r("h3",{attrs:{id:"summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[a._v("#")]),a._v(" summary")]),a._v(" "),r("p",[a._v("Lowest current draw: 14x12 @ 4.5")]),a._v(" "),r("p",[a._v("Highest Efficiency: 14x12 @55.5")]),a._v(" "),r("h2",{attrs:{id:"badass-650kv-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#badass-650kv-motor"}},[a._v("#")]),a._v(" Badass 650kv motor:")]),a._v(" "),r("h3",{attrs:{id:"script-output-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-output-2"}},[a._v("#")]),a._v(" script output")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Current draw at Cruise for badass 650, 12x10: 5.1 \nCurrent draw at Cruise for badass 650, 13x10: 4.7 \nCurrent draw at Cruise for badass 650, 14x10: 4.4 \nCurrent draw at Cruise for badass 650, 14x12: 4.9\n\nEfficiency at Cruise for badass 650, 12x10: 54.2 \nEfficiency at Cruise for badass 650, 13x10: 53.6\nEfficiency at Cruise for badass 650, 14x10: 51.5 \nEfficiency at Cruise for badass 650, 14x12: 57 \n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br")])]),r("h3",{attrs:{id:"summary-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary-2"}},[a._v("#")]),a._v(" summary")]),a._v(" "),r("p",[a._v("Lowest current draw: 14x10 @4.4")]),a._v(" "),r("p",[a._v("Highest Efficiency: 14x12 @57")]),a._v(" "),r("h2",{attrs:{id:"badass-710kv-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#badass-710kv-motor"}},[a._v("#")]),a._v(" Badass 710kv motor:")]),a._v(" "),r("h3",{attrs:{id:"script-output-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-output-3"}},[a._v("#")]),a._v(" script output")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Current draw at Cruise for Badass 710kv, 12x10: 4.8\nCurrent draw at Cruise for Badass 710kv, 13x10: 4.8\nCurrent draw at Cruise for 14x10, 14x10: 4.9\nCurrent draw at Cruise for Badass 710kv, 14x12: 4.5\n\nEfficiency at Cruise for Badass 710kv, 12x10: 56\nEfficiency at Cruise for Badass 710kv, 13x10: 55.8\nEfficiency at Cruise for 14x10, 14x10: 55.4\nEfficiency at Cruise for Badass 710kv, 14x12: 57.3\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br")])]),r("h3",{attrs:{id:"summary-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary-3"}},[a._v("#")]),a._v(" summary")]),a._v(" "),r("p",[a._v("Lowest current draw: 12x10&13x10 @ 4.8"),r("br"),a._v("\nHighest Efficiency: 14x12 @ 57.3")]),a._v(" "),r("h2",{attrs:{id:"hacker-a30-10xl-v4-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hacker-a30-10xl-v4-motor"}},[a._v("#")]),a._v(" Hacker A30-10XL v4 motor:")]),a._v(" "),r("h3",{attrs:{id:"script-output-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-output-4"}},[a._v("#")]),a._v(" script output")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Current draw at Cruise for Hacker 900kv, 12x10: 5.2\nCurrent draw at Cruise for Hacker 900kv, 13x10: 4.8\nCurrent draw at Cruise for Hacker 900kv, 14x10: 5.2\nCurrent draw at Cruise for Hacker 900kv, 14x12: 5.2\nCurrent draw at Cruise for Hacker 900kv, 15x8: 4\n\nEfficiency at Cruise for Hacker 900kv, 12x10: 54.2\nEfficiency at Cruise for Hacker 900kv, 13x10: 53.3\nEfficiency at Cruise for Hacker 900kv, 14x10: 53.5\nEfficiency at Cruise for Hacker 900kv, 14x12: 55.9\nEfficiency at Cruise for Hacker 900kv, 15x8: 37.9\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h3",{attrs:{id:"summary-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary-4"}},[a._v("#")]),a._v(" summary")]),a._v(" "),r("p",[a._v("Lowest current draw 15x8 @ 4")]),a._v(" "),r("p",[a._v("Highest Efficiency 14x12 @ 55.9")]),a._v(" "),r("h2",{attrs:{id:"badass-790kv-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#badass-790kv-motor"}},[a._v("#")]),a._v(" Badass 790kv motor:")]),a._v(" "),r("h3",{attrs:{id:"script-output-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-output-5"}},[a._v("#")]),a._v(" script output")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Current draw at Cruise for badass 790, 12x10: 5.1 \nCurrent draw at Cruise for badass 790, 13x10: 5.2 \nCurrent draw at Cruise for badass 790, 14x12: 5.8\nCurrent draw at Cruise for badass 790, 15x8: 4.5 \n\nEfficiency at Cruise for badass 790, 12x10: 51.2 \nEfficiency at Cruise for badass 790, 13x10: 51.1 \nEfficiency at Cruise for badass 790, 14x12: 55.1 \nEfficiency at Cruise for badass 790, 15x8: 34.3\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br")])]),r("h3",{attrs:{id:"summary-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary-5"}},[a._v("#")]),a._v(" summary")]),a._v(" "),r("p",[a._v("Lowest current draw: 15x8 @4.5")]),a._v(" "),r("p",[a._v("Highest Efficiency: 14x12 @55.1")]),a._v(" "),r("h2",{attrs:{id:"badass-970kv-motor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#badass-970kv-motor"}},[a._v("#")]),a._v(" Badass 970kv motor:")]),a._v(" "),r("h3",{attrs:{id:"script-output-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-output-6"}},[a._v("#")]),a._v(" script output")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Current draw at Cruise for badass 970, 12x10: 5.4\nCurrent draw at Cruise for badass 970, 13x10: 5.5\nCurrent draw at Cruise for badass 970, 14x10: 5.3\nCurrent draw at Cruise for badass 970, 14x12: 5.5\nCurrent draw at Cruise for badass 970, 15x8: 5.2\n\nEfficiency at Cruise for badass 970, 12x10: 48.4\nEfficiency at Cruise for badass 970, 13x10: 48.5\nEfficiency at Cruise for badass 970, 14x10: 47.4\nEfficiency at Cruise for badass 970, 14x12: 50.8\nEfficiency at Cruise for badass 970, 15x8: 34.2\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h3",{attrs:{id:"summary-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary-6"}},[a._v("#")]),a._v(" summary")]),a._v(" "),r("p",[a._v("Lowest current draw: 15x8: 5.2")]),a._v(" "),r("p",[a._v("Highest Efficiency: 14x12 @ 50.8")]),a._v(" "),r("h3",{attrs:{id:"analysis-of-prop-motor-combinations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analysis-of-prop-motor-combinations"}},[a._v("#")]),a._v(" Analysis of prop/motor combinations")]),a._v(" "),r("p",[a._v("TODO:")]),a._v(" "),r("ul",[r("li",[a._v("talk about most efficient prop and motor")]),a._v(" "),r("li",[a._v("talk about how 970 and 15x8 have the most excess thrust")]),a._v(" "),r("li",[a._v("talk about why we chose the least efficient motor")])])])}),[],!1,null,null,null);s.default=e.exports}}]);