// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		playbutton_size: 100,
		playbutton_anchor:{x:4,y:2},
		setupbutton_size: 100,
		setupbutton_anchor:{x:8,y:2},
		radio_anchor:{x:6,y:5},
		radio_size:60,
		radio_buttonsize:30,
		radio_fontsize:24,
		radio_orientation:"vertical",
		radio_label_position:"right",
		radio_shape:"circle",
	},
	simulation: {
		delay:10,
		pin_size:0.4,
		pivot_size:2.5,
		colormap:"broc"
	}
}