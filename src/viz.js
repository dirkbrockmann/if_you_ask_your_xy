// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"
import colors from "./colormaps.js"
import styles from "./styles.module.css"

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);
const line = d3.line().x(d=>X(d.x)).y(d=>X(d.y));

const paint = colors[cfg.simulation.colormap];

var W,H;

var N,M;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const initialize = (display,config) => {
		
	W = config.display_size.width;
	H = config.display_size.height;

	N = param.system.widget.value()==0 ? param.N_pins : param.N_patches;
	M = 2*N+1;		
	X.range([0,W]);
	Y.range([0,H]);

	display.selectAll("#origin").remove();
	display.selectAll(".node").remove();
	
	const origin = display.append("g").attr("id","origin")		
	
	if(param.system.widget.value()==0){
	
		origin.selectAll(".pivot").data(agents).enter().append("circle")		
			.attr("class","node")
			.attr("r",cfg.simulation.pivot_size)
			.attr("cx",d=>X(d.x))
			.attr("cy",d=>Y(d.y))
	
		origin.selectAll("."+styles.pin).data(agents).enter().append("path").attr("class",styles.pin)
		.attr("d",d=>line(
			[
				{x:(d.x-cfg.simulation.pin_size/M*Math.cos(d.theta)),y:(d.y-cfg.simulation.pin_size/M*Math.sin(d.theta))},
				{x:(d.x+cfg.simulation.pin_size/M*Math.cos(d.theta)),y:(d.y+cfg.simulation.pin_size/M*Math.sin(d.theta))}
			]
		))
	} else {
		origin.selectAll("."+styles.patch).data(agents).enter().append("path")
			.attr("class",styles.patch)
			.attr("d",d=>line(d.cell()))
			.style("fill",d=>paint((d.theta+Math.PI)/(2*Math.PI)))
			.style("stroke",d=>paint((d.theta+Math.PI)/(2*Math.PI)))
	
	}
	
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	
	if(param.system.widget.value()==0){
		
		display.select("#origin").selectAll("."+styles.pin)
			.attr("d",d=>line(
				[
					{x:(d.x-cfg.simulation.pin_size/M*Math.cos(d.theta)),y:(d.y-cfg.simulation.pin_size/M*Math.sin(d.theta))},
					{x:(d.x+cfg.simulation.pin_size/M*Math.cos(d.theta)),y:(d.y+cfg.simulation.pin_size/M*Math.sin(d.theta))}
				]
			))
	} else {
		display.selectAll("#origin").selectAll("."+styles.patch)
			.style("fill",d=>paint((d.theta+Math.PI)/(2*Math.PI)))
			.style("stroke",d=>paint((d.theta+Math.PI)/(2*Math.PI)))
	}
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
//	display.selectAll(".node")
//		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}


export {initialize,go,update}
