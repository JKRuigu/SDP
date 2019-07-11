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

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Text>Settings </Text>
      </View>
    );
  }
} 


const AppStackNavigator = createStackNavigator({
	AuthScreen,
	HomeNavigator,
	ManageParcels,
	SettingsScreen
});


const AppContainer = createAppContainer(AppStackNavigator)

export default class AppNavigator extends Component{
	render(){
		return <AppContainer />
	}
}