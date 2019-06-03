import React,{Component} from 'react';
import { TextInput } from 'react-native';

import { 
		createStackNavigator,
		createBottomTabNavigator,
		createSwitchNavigator,
		createAppContainer
	} from 'react-navigation';

import { 
		SendParcel,
		RegisterParcel,
		HandOver,
		ReceiveParcel 
	} from '../screens';

import SendParcelNavigator from './SendParcelNavigator';

const DashboardTabNavigator = createBottomTabNavigator(
	{
		Register:RegisterParcel,
		Send:SendParcelNavigator,
		Receive:ReceiveParcel,
		HandOver
	},
	{
		navigationOptions:({ navigation })=>{
			const { routeName } = navigation.state.routes[navigation.state.index]
			let name = routeName + " Parcels";
				return{
					headerTitle:name,
					header:<TextInput />
				}
		},
		tabBarOptions:{
			activeTintColor:'blue',
			inactiveTintColor:'black',
			showLabel:true,
			showIcon:true
		}
	}
);

const DashboardStackNavigator = createStackNavigator({DashboardTabNavigator});

const AppContainer = createAppContainer(DashboardStackNavigator)


export default class HomeNavigator extends Component{
	render(){
		return <AppContainer />
	}
}
