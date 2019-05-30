import React,{Component} from 'react';
import { 
		createStackNavigator,
		createBottomTabNavigator,
		createSwitchNavigator,
		createAppContainer
	} from 'react-navigation';


import HomeNavigator from './HomeNavigator';
import { AuthScreen } from '../screens';

const AppStackNavigator = createStackNavigator({
	AuthScreen,
	HomeNavigator
});


const AppContainer = createAppContainer(AppStackNavigator)

export default class AppNavigator extends Component{
	render(){
		return <AppContainer />
	}
}