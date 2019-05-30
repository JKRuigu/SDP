import React,{Component} from 'react';
// import { Button } from 'react-native-elements';
import {StyleSheet,Text,View,Alert} from 'react-native';
import { Vehicle } from './components';
// import ManageParcels from './ManageParcels';

export default class SendParcel extends Component{

	static navigationOptions ={
		header:null
	}

	state ={
		vehicle:[{"vehicleNumber":"KSC754h","driverId":"34567899"},{"vehicleNumber":"KSC154h","driverId":"34567899"},{"vehicleNumber":"KSC004h","driverId":"34567899"},{"vehicleNumber":"KSC754G","driverId":"34567899"},{"vehicleNumber":"KSC154I","driverId":"34567899"},{"vehicleNumber":"KSC034K","driverId":"34567899"},{"vehicleNumber":"KSC054G","driverId":"34567899"},{"vehicleNumber":"KSC404I","driverId":"34567899"},{"vehicleNumber":"KCC034K","driverId":"34567899"}],
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
				<Vehicle
					vehicle={vehicle}
					styles={styles}
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