import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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

	static navigationOptions = {
		header:null,
		tabBarIcon : ({ tintColor,focused})=>(
				<Icon 
					name="md-send"
					size={focused === true ? 28 : 26}
					color={focused === true? 'blue':'gray'}
				/>
			)
	}
	render(){
		return <AppContainer />
	}
}