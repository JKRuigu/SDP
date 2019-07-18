import React,{Component} from 'react';
import { TextInput,View,Alert,Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Toolbar from '../commons/Toolbar';
import { Account,About,SettingsScreen } from '../screens';

import { 
		createStackNavigator,
		createBottomTabNavigator,
		createSwitchNavigator,
		createDrawerNavigator,
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
					header:<Toolbar name={name} navigation={navigation} index={navigation.state.index}/>
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

const AppDrawerNavigator = createDrawerNavigator({
	Dashboard:{
		screen:DashboardStackNavigator
	},
	Account:{
		screen:Account
	},
	Settings:{
		screen:SettingsScreen
	},
	About:{
		screen:About
	}
});




const AppContainer = createAppContainer(AppDrawerNavigator)


export default class HomeNavigator extends Component{
	render(){
		return <AppContainer />
	}
}
