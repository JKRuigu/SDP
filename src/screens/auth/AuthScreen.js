import React,{Component} from 'react';
import {Text,View,StyleSheet,Button,StatusBar,ActivityIndicator,Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import axios from 'axios';

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
		isLogged:false
	}

	static navigationOptions ={
		header:null
	}

	handleUsername = text =>{
		this.setState({data:{...this.state.data, username:text }});
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
				await this.props.login({"username":this.state.data.username,"password":this.state.data.password});

				if (this.props.auth.isError === true) {
					Alert.alert(this.props.auth.error);
				}
				if (this.props.auth.isLogged ===true) {
					const { auth } = this.props;
					let data ={
						"token":auth.token,
						"partnerId":auth.user.partnerId
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
