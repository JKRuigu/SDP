import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/AuthScreen';


export default ({
	handleUsername,
	handlePassword,
	username,
	password,
	handleSubmit
})=>(<View style={{alignItems: 'center',justifyContent:'center'}}>
		<View style={{margin:20}}>
			<TextInput
				style={{ backgroundColor:'#fff',color:"blue",width:250,borderRadius:20,fontSize:15,paddingLeft:20 }}
				defaultValue={username}
				placeholder="Username"
				placeholderTextColor="blue"
				onChangeText={handleUsername}
			/>
		</View>
		<View>
			<TextInput 
				placeholder="Password"
				placeholderTextColor="blue"
				style={{ backgroundColor:'#fff',color:"blue",width:250,borderRadius:20,fontSize:15,paddingLeft:20 }}
				defaultValue={password}
				onChangeText={handlePassword}
			/>
		</View>	
		<TouchableOpacity onPress={handleSubmit} style={{backgroundColor:'#455a64',width:250,borderRadius:20,fontSize:15,marginTop:10,padding:10,color:'#fff' }}>
			<Text style={{fontSize:16,color:'#000',textAlign:'center'}}>LOGIN</Text>
		</TouchableOpacity>
	</View>)