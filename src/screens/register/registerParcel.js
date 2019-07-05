import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Modal,Alert,Text,View,StyleSheet,ActivityIndicator,StatusBar,Button,TextInput,ScrollView,TouchableHighlight,ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {RegisterParcelForm,ModalForm} from './components';
import { fetchParcels,fetchCatergory,fetchLocation,fetchVehicle,registerParcels } from './actions';

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
		senderName:'',
		isErrorsenderName:false,
		senderID:'',
		isErrorsenderID:false,
		senderTel:'',
		isErrorsenderTel:false,
		receiverName:'',
		isErrorreceiverName:false,
		receiverID:'',
		isErrorreceiverID:false,
		receiverTel:'',
		isErrorreceiverTel:false,
		parcelCost:'',
		isErrorparcelCost:false,
		isSelected:false,
		show:false,
		catergory:'',
		parcelCatergory:'Select Parcel Catergory',
		isparcelCatergory:false,
		receiverLocation:'Select Receiver Location',
		isreceiverLocation:false,
		senderLocation:'Select Sender Location',
		issenderLocation:false
	}

	handlesenderName = text =>{this.setState({senderName:text});}
	handlesenderID = text =>{this.setState({senderID:text});}
	handlesenderTel = text =>{this.setState({senderTel:text});}
	handlereceiverName = text =>{this.setState({receiverName:text});}
	handlereceiverID = text =>{this.setState({receiverID:text});}
	handlereceiverTel = text =>{this.setState({receiverTel:text});}
	handleparcelCost = text =>{this.setState({parcelCost:text});}

	handleModal = catergory=> {
	    this.setState({isSelected: !this.state.isSelected,catergory});		
	}
	validate = () =>{
		const { senderName,isErrorsenderName,senderID,isErrorsenderID,senderTel,isErrorsenderTel,receiverName,isErrorreceiverName,receiverID,isErrorreceiverID,receiverTel,isErrorreceiverTel,parcelCost,isErrorparcelCost} = this.state;

		if (!senderName || senderName.length <10) {this.setState({isErrorsenderName:true});}else{this.setState({isErrorsenderName:false});}
		if (!senderID || senderID.length <6 ) {this.setState({isErrorsenderID:true});}else{this.setState({isErrorsenderID:false});}	
		if (!senderTel || senderTel.length <8) {this.setState({isErrorsenderTel:true});}else{this.setState({isErrorsenderTel:false});}	
		if (!receiverName || receiverName.length <8) {this.setState({isErrorreceiverName:true});}else{this.setState({isErrorreceiverName:false});}	
		if (!receiverID || receiverID.length <6 ) {this.setState({isErrorreceiverID:true});}else{this.setState({isErrorreceiverID:false});}	
		if (!receiverTel || receiverTel.length <8) {this.setState({isErrorreceiverTel:true});} else {this.setState({isErrorreceiverTel:false});}	
		if (!parcelCost || parcelCost.length <2) {this.setState({isErrorparcelCost:true});} else {this.setState({isErrorparcelCost:false});}	
	}

	handleSubmit = async()=>{
		const { isErrorsenderName,isErrorsenderID,isErrorsenderTel,isErrorreceiverName,isErrorreceiverID,isErrorreceiverTel,isErrorparcelCost,isparcelCatergory,isreceiverLocation,issenderLocation,senderName,senderID,senderTel,receiverName,receiverID,receiverTel,parcelCost,senderLocation,receiverLocation,parcelCatergory} = this.state;
		await this.validate();

		if (isErrorsenderName === true || isErrorsenderID === true || isErrorsenderTel === true || isErrorreceiverName === true || isErrorreceiverID === true || isErrorreceiverTel === true || isErrorparcelCost === true || isparcelCatergory === false || isreceiverLocation === false || issenderLocation === false ) {
			Alert.alert("There are Error!");
		}else{
			const { isErrorsenderName,isErrorsenderID,isErrorsenderTel,isErrorreceiverName,isErrorreceiverID,isErrorreceiverTel,isErrorparcelCost,isparcelCatergory,isreceiverLocation,issenderLocation,senderName,senderID,senderTel,receiverName,receiverID,receiverTel,parcelCost,senderLocation,receiverLocation,parcelCatergory} = this.state;
			const { auth } = this.props;
			// Alert.alert(auth.token);
			let data ={
				"token":auth.token,
				"partnerId":auth.user.partnerId,
				"mydata":{
					"senderName":senderName,
					"senderID":senderID,
					"senderTel":senderTel,
					"senderLocation":senderLocation,
					"receiverName":receiverName,
					"receiverTel":receiverTel,
					"receiverID":receiverID,
					"receiverLocation":receiverLocation,
					"parcelCost":parcelCost,
					"parcelCatergory":parcelCatergory,
					"senderServedBy":auth.user.username
				}
			}
			await this.props.registerParcels(data);

			if (this.props.parcels.isError === true) {
				Alert.alert(this.props.parcels.error);
			}else{
				this.setState({
					senderName:'',
					isErrorsenderName:false,
					senderID:'',
					isErrorsenderID:false,
					senderTel:'',
					isErrorsenderTel:false,
					receiverName:'',
					isErrorreceiverName:false,
					receiverID:'',
					isErrorreceiverID:false,
					receiverTel:'',
					isErrorreceiverTel:false,
					parcelCost:'',
					isErrorparcelCost:false,
					show:false,
					catergory:'',
					parcelCatergory:'Select Parcel Catergory',
					isparcelCatergory:false,
					receiverLocation:'Select Receiver Location',
					isreceiverLocation:false,
					senderLocation:'Select Sender Location',
					issenderLocation:false
				});
				Alert.alert("Success");
			}
		}


	}

	handleSelect = item =>{
		if (this.state.catergory === 'Catergory') {
			this.setState({parcelCatergory:item.catergoryName,isSelected:false,isparcelCatergory:true});
		}
		if(this.state.catergory === 'Sender'){
			this.setState({senderLocation:item.location,isSelected:false,issenderLocation:true});
		}
		if(this.state.catergory === 'Receiver'){
			this.setState({receiverLocation:item.location,isSelected:false,isreceiverLocation:true});			
		}
	}

	render(){
		const {isparcelCatergory,issenderLocation,isreceiverLocation, isErrorsenderID,isErrorsenderTel,isErrorreceiverName,isErrorreceiverID,isErrorreceiverTel,isErrorparcelCost,senderName,isErrorsenderName,senderID,senderTel,receiverName,receiverID,receiverTel,parcelCost } = this.state;
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
					isErrorsenderName
					isErrorsenderID={isErrorsenderID}
					isErrorsenderTel={isErrorsenderTel}
					isErrorreceiverName={isErrorreceiverName}
					isErrorreceiverID={isErrorreceiverID}
					isErrorreceiverTel={isErrorreceiverTel}
					isErrorparcelCost={isErrorparcelCost} 
					isErrorsenderName={isErrorsenderName}
					senderName={senderName}
					parcelCost={parcelCost}
					handleSubmit={this.handleSubmit}
					handleparcelCost={this.handleparcelCost}
					handlesenderName={this.handlesenderName}
					senderID={senderID}
					handlesenderID={this.handlesenderID}
					senderTel={senderTel}
					handlesenderTel={this.handlesenderTel}
					receiverName={receiverName}
					handlereceiverName={this.handlereceiverName}
					receiverID={receiverID}
					handlereceiverID={this.handlereceiverID}
					receiverTel={receiverTel}
					handlereceiverTel={this.handlereceiverTel}
					styles={styles}
					handleModal={this.handleModal}
					isLoadingCatergory={this.props.catergory.isLoading}
					isLoadingLocation={this.props.location.isLoading}
					isSelected={this.state.isSelected}
					senderLocation={this.state.senderLocation}
					receiverLocation={this.state.receiverLocation}
					parcelCatergory={this.state.parcelCatergory}
					isparcelCatergory={isparcelCatergory}
					issenderLocation={issenderLocation}
					isreceiverLocation={isreceiverLocation}
					isLoading={this.props.parcels.isLoading}
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
	inputTextError:{
		 backgroundColor:'#fff',
		 color:"rgba(0,0,255,0.5)",
		 borderRadius:20,
		 fontSize:15,
		 borderColor:'red',
		 borderWidth:2,
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
	locationDisabled:{
		backgroundColor:'rgba(0,0,255,0.5)',
		width:'90%',
		borderRadius:20,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#fff'		
	},	
	location:{
		backgroundColor:'green',
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
	parcels:state.parcel,
	catergory:state.catergory,
	location:state.location
});

export default connect(mapStateToProps,{ registerParcels,fetchParcels,fetchCatergory,fetchLocation,fetchVehicle })(RegisterParcel);

