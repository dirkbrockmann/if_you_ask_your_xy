import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"

const choices = get_choices(parameters);


add_id_label(choices)

const ch = toArray(choices);


const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
					.buttonsize(cfg.widgets.radio_buttonsize)
					.fontsize(cfg.widgets.radio_fontsize)
		);



add_widget(ch,radios);


const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["rewind"])

		
const buttons = [go,setup];


export default (controls,grid)=>{


	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);		
	

	radios[0].position(ra_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
		
	setup.position(grid.position(cfg.widgets.setupbutton_anchor.x,cfg.widgets.setupbutton_anchor.y))
		.size(cfg.widgets.setupbutton_size);
	

	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget)

}


export {radios,go,setup,choices}


