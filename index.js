import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";
import store from './src/store';
// import Colors from './src/commons/Colors'
// import EStyleSheet from 'react-native-extended-stylesheet';
// EStyleSheet.build(Colors);
// import { StackNavigator } from 'react-navigation';

import {name as appName} from './app.json';
// import Test from './Test';
// import { HomeScreen,SettingsScreen,AuthScreen,SendParcel,RegisterParcel,HandOver,ReceiveParcel } from './src/screens';
// import Root from './src/Root';  
import AppNavigator from './src/routes/AppNavigator';

const AppContainer = ()=>
	<Provider store={store}>
		<AppNavigator />
	</Provider>

AppRegistry.registerComponent('SDP', () => AppContainer)