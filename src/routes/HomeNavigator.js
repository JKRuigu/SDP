import React,{Component} from 'react';
import { TextInput,View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Toolbar from '../commons/Toolbar';
import { Account } from '../screens/account';

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


class Settings extends Component{
	render(){
		return(
			<View>
				<Text>Settings</Text>
			</View>
			)
	}
}

class About extends Component{
	render(){
		return(
			<View>
				<Text>About</Text>
			</View>
			)
	}
}


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
					header:<Toolbar name={name} index={navigation.state.index}/>
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
		screen:Settings
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
