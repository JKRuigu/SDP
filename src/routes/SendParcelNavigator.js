import React,{Component} from 'react';
// import {StyleSheet,Text,View} from 'react-native';

import { 
		createStackNavigator,
		createSwitchNavigator,
		createAppContainer
	} from 'react-navigation';


import HomeNavigator from './HomeNavigator';
import { SendParcel,ManageParcels } from '../screens';


const AppStackNavigator = createStackNavigator({
	SendParcel,
	ManageParcels
});


const AppContainer = createAppContainer(AppStackNavigator)

export default class SendParcelNavigator extends Component{
	render(){
		return <AppContainer />
	}
}