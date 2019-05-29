import React,{Component} from 'react';
import {Text,View,StyleSheet,StatusBar,ActivityIndicator,Alert } from 'react-native';
import { connect } from 'react-redux';
// import { TabNavigator } from 'react-navigation';

// import { authSignin } from '../../actions/auth';
import { login,fetchMyMeetups } from './actions';
import AuthScreenForm from './components/AuthScreenForm';
// import LoadingScreen from '../../commons/LoadingScreen';


class AuthScreen extends Component{
	state = {
		data:{
			username:'',
			password:''	
		},		
		msg:'Please Submit',
		isLoading:false
	}

	handleUsername = text =>{
		this.setState({data:{...this.state.data, username:text }});
	}

	handlePassword = text =>{
		this.setState({data:{...this.state.data,password:text}});
	}

	handleSubmit = async() =>{
		let msg = this.state.data.username+this.state.data.password;
		// this.setState({msg,isLoading:true});	
		Alert.alert("Success!")
		// await this.props.login(this.state.data);
		// await this.props.fetchMyMeetups();
			this.setState({isLoading:false});		
	}

	render(){
		if (this.state.isLoading === true) {
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
        </View>
    	)
		} 

		return(
			<View style={styles.root}>
				<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
				<View style={styles.textContainer}><Text style={styles.text}>SDP</Text></View>
				<Text style={styles.msg}>{this.state.msg}</Text>
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

export default connect(mapStateToProps,{ login,fetchMyMeetups })(AuthScreen);
