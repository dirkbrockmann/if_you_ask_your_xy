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

var W,H,N,M;


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


const update = (display,config) => {}


export {initialize,go,update}
