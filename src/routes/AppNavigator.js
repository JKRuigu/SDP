import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

import { 
		createStackNavigator,
		createBottomTabNavigator,
		createSwitchNavigator,
		createAppContainer
	} from 'react-navigation';


import HomeNavigator from './HomeNavigator';
import { AuthScreen,ManageParcels } from '../screens';


const AppStackNavigator = createStackNavigator({
	AuthScreen,
	HomeNavigator,
	ManageParcels
});


const AppContainer = createAppContainer(AppStackNavigator)

export default class AppNavigator extends Component{
	render(){
		return <AppContainer />
	}
}