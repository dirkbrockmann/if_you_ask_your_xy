// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean,max,min} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"
import {square as sq} from "lattices"


var agents = [];
var N;

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents
	
	const N = param.system.widget.value()==0 ? param.N_pins : param.N_patches;

	const s = sq(N).boundary("periodic");

//	const N = param.number_of_particles.choices[param.number_of_particles.widget.value()];
	
	agents = s.nodes;
	
	each(agents,a=>{
		a.theta = 2*Math.PI*Math.random();
	})
	
	console.log(agents)
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	each(agents,a=>{
		const xn = mean(map(a.neighbors,x=> Math.cos(x.theta)));
		const yn = mean(map(a.neighbors,x=> Math.sin(x.theta)));	
		const x0 = Math.cos(a.theta)
		const y0 = Math.sin(a.theta)
		a.x_new = x0 + param.dt * (xn-x0)
		a.y_new = y0 + param.dt * (yn-y0)

	})
	
	 each(agents,a=>{
	 	a.theta=Math.atan2(a.y_new,a.x_new);
	 })
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	//each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,initialize,go,update}
