import React,{Component} from 'react';
import {Modal,Alert,TextInput,Picker,TouchableOpacity,Text,View,StyleSheet,Button,StatusBar,ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { login } from './actions';
import AuthScreenForm from './components/AuthScreenForm';
import HomeNavigator from '../../routes/HomeNavigator'
import { fetchParcels,fetchCatergory,fetchLocation,fetchVehicle } from '../register/actions';



class AuthScreen extends Component{
	state = {
		data:{
			username:'0759377424',
			password:'0759377424'
		},		
		msg:'Please Submit',
		isLoading:false,
		isLogged:false,
		catergory:"",
		ip:"",
		show:false
	}

	static navigationOptions ={
		header:null
	}

	handleUsername = text =>{
		this.setState({data:{...this.state.data, username:text }});
	}

	componentWillMount(){
		this._storeData();
		this._retriveData();
	}

	_storeData = async()=>{
		const value = await AsyncStorage.getItem('url') || undefined;
			// Alert.alert(value)
		if (value === 'none' || value === undefined) {
			const url = '';
			try{
				// await AsyncStorage.setItem('url',JSON.stringify(url));
				await AsyncStorage.setItem('url',url);
			}catch(err){
				Alert.alert(err.message);
			}		
		}
	}

	_retriveData = async ()=>{
		try{
			const value = await AsyncStorage.getItem('url') || 'none';
			
			if (value === 'none') {
				this.setState({show:true});
			}

		} catch(e){
			Alert.alert("Error! Please report the error.")
		}
	}

	handleIpAdress = ip =>{
		this.setState({ip});
	}

	_setData = async()=>{
		try{
			await AsyncStorage.setItem('url','localhost:8080');
			this.setState({show:false});
		} catch(e){
			Alert.alert("Error! Please report the error.")
		}		
	}

	Alertp = async() =>{
		const data = await AsyncStorage.getItem('url') || 'none';
		// Alert.alert(data)
	}

	handleReg = async()=>{
		const { ip } = this.state;
		if (ip === "http://35.188.138.47" || ip === "http://localhost:8000") {
			// await AsyncStorage.setItem('url',JSON.stringify());
			await AsyncStorage.setItem('url',this.state.ip);
			this.setState({show:false});
		}else{
			Alert.alert("Please Select Ip Address!")
		}
	}

	handlePassword = text =>{
		this.setState({data:{...this.state.data,password:text}});
	}

	handleSubmit = async () =>{
		const { username,password } = this.state;
		// Alert.alert()

		if (!this.state.data.username || !this.state.data.password) {
			Alert.alert("Enter both username and password");
		}else{			
				 const { username,password } = this.state;
				 const value = await AsyncStorage.getItem('url');

				await this.props.login({"username":this.state.data.username,"url":value,"password":this.state.data.password});

				if (this.props.auth.isError === true) {
					Alert.alert(this.props.auth.error);
				}
				if (this.props.auth.isLogged ===true) {
					const { auth } = this.props;
					// Alert.alert("VALUE",value)
					let data ={
						"token":auth.token,
						"partnerId":auth.user.partnerId,
						"url":value
					}

					await this.props.fetchParcels(data);
					await this.props.fetchCatergory(data);
					await this.props.fetchLocation(data);
					await this.props.fetchVehicle(data);
				}
			}	
	}

	render(){
		const {isLogged,isLoading} = this.state;

		if (this.props.auth.isLoading === true) {
			return(
		        <View style={{flex:1,backgroundColor:"blue",alignItems:'center',justifyContent:'center'}}>
		          <StatusBar
		            backgroundColor="blue"
		            barStyle="light-content"
		          />
		          <ActivityIndicator
		            size="large"
		            color='gray'
		          />
		          <Text style={{color:'#fff'}}>Loading... Please Wait</Text>
		        </View>)
		}
		if (this.props.auth.isLogged ===true) {
			return <HomeNavigator />
		}

		return(
			<View style={styles.root}>
				<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
				<View style={styles.textContainer}><Text style={styles.text}>SDP</Text></View>
				<AuthScreenForm 
					username={this.state.data.username}
					password={this.state.data.password}
					handlePassword={this.handlePassword}
					handleUsername={this.handleUsername}
					handleSubmit={this.handleSubmit}
				 />

				<Modal
			      animationType="slide"
			      transparent={false}          
			      visible={this.state.show}
			    >
			    <View>
				   <Text style={{margin:10,marginTop:20,color:"blue",marginHorizontal:"18%"}}>REGISTER YOUR DEVICE</Text>
				   
				   <Picker	
					  selectedValue={this.state.catergory}
					  style={{height: 50, margin:10,marginTop:20,color:"blue",width:250,marginHorizontal:"16%"}}
					  onValueChange={(itemValue, itemIndex) =>
					    this.setState({catergory: itemValue})
					  }>
					  <Picker.Item label="Select Catergory" value="Select Catergory" />
					  <Picker.Item label="Individual" value="Individual" />
					  <Picker.Item label="Company" value="Company" />
					</Picker>
					<Picker	
					  selectedValue={this.state.ip}
					  style={{height: 50, margin:10,marginTop:20,color:"blue",width:250,marginHorizontal:"16%"}}
					  onValueChange={this.handleIpAdress}>
					  <Picker.Item label="Select IP Address" value="Select IP Address" />
					  <Picker.Item label="http://localhost:8000" value="http://localhost:8000" />
					  <Picker.Item label="http://35.188.138.47" value="http://35.188.138.47" />
					</Picker>
					
					<TouchableOpacity onPress={this.handleReg} style={{marginHorizontal:"10%",backgroundColor:'#455a64',margin:10,width:250,borderRadius:20,fontSize:15,marginTop:10,padding:10,color:'#fff' }}>
						<Text style={{fontSize:16,color:'#000',textAlign:'center'}}>REGISTER DEVICE</Text>
					</TouchableOpacity>
	            </View>
				</Modal> 
			</View>			
			)
	}
}


const styles = StyleSheet.create({
	root:{
		backgroundColor:'blue',
		alignItems:'center',
		justifyContent:'center',
		flex:1		
	},
	textContainer:{
		alignItems:'center',
		justifyContent:'center'		
	},
	text:{
		fontWeight:'800',
		fontSize:30,
		color:'#fff'
	},
	msg:{
		backgroundColor:'#000',
		color:'#fff'
	}
});

const mapStateToProps = state => ({
	auth:state.auth
});

export default connect(mapStateToProps,{ login,fetchParcels,fetchCatergory,fetchLocation,fetchVehicle  })(AuthScreen);
