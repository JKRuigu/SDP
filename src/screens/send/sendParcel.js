import React,{Component} from 'react';
import {StyleSheet,Text,View,Alert,ProgressBarAndroid} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import { Vehicle } from './components';
import { fetchVehicle } from '../register/actions';

class SendParcel extends Component{

	static navigationOptions ={
		header:null
	}

	state ={		
		refreshing:false
	}

	_onRefresh = async() => {
		if (this.props.auth && this.props.vehicles.isLoading === false) {
			const { auth } = this.props;
			const value = await AsyncStorage.getItem('url');
			let data ={
				"token":auth.token,
				"partnerId":auth.user.partnerId,
				"url":value
			}
		    this.setState({refreshing: true});
			await this.props.fetchVehicle(data);
			this.setState({refreshing: false});
		}
  }
	
	handleSelectDriver=data=>{
		// Alert.alert(data.vehicleNumber);
		const {vehicleNumber}=data;
		this.props.navigation.push('ManageParcels',{vehicleNumber});
			// this.props.navigation.push('AuthScreen');
		// this.props.navigation.navigate('ManageParcels',{data});
		// this.setState({vehicleNumber:x.vehicleNumber,isDriverSelected:false});
	}


	render(){

		const { vehicle,handleSelectDriver } = this.state;
		return(
			<View style={styles.root}>
			{this.props.vehicles.isLoading === true?	
				<ProgressBarAndroid styleAttr="Horizontal" style={{margin:-5,width:'100%'}} color="#2196F3" />:<Text />}			
				<Vehicle
					vehicles={ this.props.vehicles.vehicle }
					styles={styles}
					onRefresh={this._onRefresh}
					refreshing={this.state.refreshing}
					handleSelectDriver={this.handleSelectDriver}
					optText={styles.optText}
				/>
			</View>
			)
	}
}


const styles = StyleSheet.create({
	root: {
	    flex: 1,
	    backgroundColor:'#f4f4f4'
	  },
	 toolbar:{
	 	height:55,
		margin:5,
		borderRadius:10,
		flexDirection:"row"
	 },
	 textInput:{
	 	backgroundColor:'#fff',
	 	width:200,
	 	borderRadius:20,
	 	fontSize:15,
	 	paddingLeft:20
	 },
	 toggleBtn:{ 
	 	color:'#000',
	 	backgroundColor:"blue",
	 	height:30
	},
	counter:{ 
		color:'#000'
	},
	list:{
		height:55,
		margin:5,
		borderRadius:10,
		flexDirection:"row"
	},
	btnLoading:{		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#f4f4f4',
		width:'70%',
		borderRadius:15,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#000'
	},
	option:{
		backgroundColor:"#fff",
		borderColor:'#f73859',
		borderRadius:50,
		flex:0.2,
		borderWidth:0.5,
		borderColor:'rgba(0,0,255,0.5)',
		alignItems:'center',
		justifyContent:'center',
		marginHorizontal:'1.5%',	
	},
	optionText:{
		fontSize:15,
		fontWeight:'500'
	},
	optText:{
		fontSize:13,
		fontWeight:'400'		
	},
	listContent:{
		backgroundColor:'orange',
		flex:1,
		borderRadius:5
	},
	mainContainer:{
		alignItems:'center',
		justifyContent:'center'
	},
	mainText:{
		fontSize:18,
		fontWeight:'500'		
	},
	subContainer:{
		flexDirection:'row'
	},
	location:{
		marginRight:0,
		marginHorizontal:'3.0%',
		color:'#fff'
	},
	locationText:{
		marginLeft:10,
		fontWeight:'500'
	},
	selectedVehicle:{
		backgroundColor:"#000",
		color:"#fff"
	}
});


const mapStateToProps = state => ({
	auth:state.auth,
	vehicles:state.vehicle
});


export default connect(mapStateToProps,{ fetchVehicle })(SendParcel);
