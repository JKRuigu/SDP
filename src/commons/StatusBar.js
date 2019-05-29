import React,{Component} from 'react';
import {StatusBar} from 'react-native';


export default class StatusBar extends Component{
	render(){
		return(
			<StatusBar
					backgroundColor="blue"
					barStyle="light-content"
				/>
			)
	}
}