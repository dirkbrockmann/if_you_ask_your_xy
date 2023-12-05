// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:0.05,
		N_pins:10,
		N_patches: 30,	
		system : {
			choices:["Pins","Phases"],
			default:0
		}
}

