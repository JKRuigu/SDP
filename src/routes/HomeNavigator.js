import React,{Component} from 'react';
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

const DashboardTabNavigator = createBottomTabNavigator(
	{
		Register:RegisterParcel,
		Send:SendParcel,
		Receive:ReceiveParcel,
		HandOver
	},
	{
		navigationOptions:({ navigation })=>{
			const { routeName } = navigation.state.routes[navigation.state.index]
			let name = routeName + " Parcels";
				return{
					headerTitle:name
				}
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
