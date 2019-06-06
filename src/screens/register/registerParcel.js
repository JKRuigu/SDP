import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Modal,Alert,Text,View,StyleSheet,ActivityIndicator,StatusBar,Button,TextInput,ScrollView,TouchableHighlight,ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {RegisterParcelForm,ModalForm} from './components';
import { fetchParcels,fetchCatergory,fetchLocation,fetchVehicle } from './actions';

class RegisterParcel extends Component{

	static navigationOptions = {
		tabBarIcon : ({ tintColor,focused})=>(
			<Icon 
				name="md-add"
				size={focused === true ? 28 : 26}
				color={focused === true? 'blue':'gray'}
			/>
		)
	}
	state = {
		username:'',
		password:'',
		isSelected:false,
		show:false,
		catergory:'',
		parcelCatergory:'Select Parcel Catergory',
		receiverLocation:'Select Receiver Location',
		senderLocation:'Select Sender Location',
	}

	handleUsername = text =>{
		this.setState({username:text});
	}

	handlePassword = text =>{
		this.setState({password:text});	
	}
	handleModal = catergory=> {
	    this.setState({isSelected: !this.state.isSelected,catergory});		
	}

	handleSelect = item =>{
		if (this.state.catergory === 'Catergory') {
			this.setState({parcelCatergory:item.catergoryName,isSelected:false});
		}else if(this.state.catergory === 'Sender'){
			this.setState({senderLocation:item.location,isSelected:false});
		}else{
			this.setState({receiverLocation:item.location,isSelected:false});			
		}
	}

	render(){

		return(
			<View style={styles.root}>
				<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
				{this.props.catergory.isLoading === true || this.props.location.isLoading === true?	
					<ProgressBarAndroid styleAttr="Horizontal" style={{margin:-5,width:'100%'}} color="#2196F3" />:<Text />}
				<View style={styles.formContainer}>
				<RegisterParcelForm 
					styles={styles}
					handleModal={this.handleModal}
					isLoadingCatergory={this.props.catergory.isLoading}
					isLoadingLocation={this.props.location.isLoading}
					isSelected={this.state.isSelected}
					senderLocation={this.state.senderLocation}
					receiverLocation={this.state.receiverLocation}
					parcelCatergory={this.state.parcelCatergory}
					/>
				</View>
		        <ModalForm
		        	styles={styles}
		        	handleModal={this.handleModal}
		        	isSelected={this.state.isSelected}
		        	items={this.state.catergory ==='Catergory'?this.props.catergory.catergory:this.props.location.location}
		        	catergory={this.state.catergory}
		        	handleSelect={this.handleSelect}
		        	/>
			</View>			
			)
	}
}


const styles = StyleSheet.create({
	root:{
		backgroundColor:'#f4f4f4',
		alignItems:'center',
		justifyContent:'center',
		flex:1		
	},
	formContainer:{
		flex:1,
		width:'100%'
	},
	scrollContainer:{
		alignItems: 'center',
		justifyContent:'center',
		flex:1,
		width:'100%'
	},
	text:{
		alignItems:'center',
		justifyContent:'center',
		width:'100%'
	},
	inputHolder:{		
		alignItems:'center',
		justifyContent:'center'
	},
	inputText:{
		 backgroundColor:'#fff',
		 color:"rgba(0,0,255,0.5)",
		 borderRadius:20,
		 fontSize:15,
		 paddingLeft:20,
		 margin:5,
		width:'90%'
	},
	submitBtn:{		
		alignItems:'center',
		justifyContent:'center',
		margin:10
	},
	btn:{
		backgroundColor:'#455a64',
		width:'100%',
		borderRadius:20,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#fff'
	},
	locationHolder:{
		alignItems:'center',
		justifyContent:'center'
	},	
	location:{
		backgroundColor:'rgba(0,0,255,0.5)',
		width:'90%',
		borderRadius:20,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#fff'		
	},
	btnText:{
		fontSize:16,
		color:'#000',
		textAlign:'center'
	},
	modal:{
		backgroundColor:'rgba(0,0,0,0.5)',
		flex:1
	},
	modalTitleHolder:{
		alignItems:'center',
		justifyContent:'center'
	},
	modalTitleText:{
		fontSize:20,
		fontWeight:'500'
	},
	closeBtn:{
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'rgba(0,0,255,0.5)',
		width:40,
		height:40,
		borderRadius:20,		
		marginHorizontal:'80.5%'
	},
	closeBtnText:{
		fontSize:20,
		color:'#fff'
	},
	itemHolder:{
		backgroundColor:'red',
		height:50,
		margin:5,
		alignItems:'center',
		justifyContent:'center'
	},
	itemText:{
		color:'#fff',
		fontSize:14
	}
});

const mapStateToProps = state => ({
	auth:state.auth,
	catergory:state.catergory,
	location:state.location
});

export default connect(mapStateToProps,{ fetchParcels,fetchCatergory,fetchLocation,fetchVehicle })(RegisterParcel);

