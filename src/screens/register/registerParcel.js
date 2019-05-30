import React,{Component} from 'react';
import {Modal,Alert,Text,View,StyleSheet,StatusBar,Button,TextInput,ScrollView,TouchableHighlight } from 'react-native';

import {RegisterParcelForm,ModalForm} from './components';

export default class RegisterParcel extends Component{
	state = {
		username:'',
		password:'',
		isSelected:false,
		show:false,
		catergory:'',
		parcelCatergory:'Select Parcel Catergory',
		receiverLocation:'Select Receiver Location',
		senderLocation:'Select Sender Location',
		locations:[{"location":"Nairobi"},{"location":"Naivasha"},{"location":"Kiambu"}],
		catergories:[{"catergoryName":"BOX"},{"catergoryName":"ENVLOPE"},{"catergoryName":"BOX"},{"catergoryName":"MEDIUM BOX"}]
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
				<View style={styles.formContainer}>
				<RegisterParcelForm 
					styles={styles}
					handleModal={this.handleModal}
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
		        	items={this.state.catergory ==='Catergory'?this.state.catergories:this.state.locations}
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
		margin:20,
		alignItems:'center',
		justifyContent:'center',
		flex:1		
	},
	formContainer:{
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
		 color:"blue",
		 borderRadius:20,
		 fontSize:15,
		 paddingLeft:20,
		 margin:5,
		width:'90%'
	},
	btn:{
		backgroundColor:'#455a64',
		width:250,
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
		backgroundColor:'blue',
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
		backgroundColor:'blue',
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
