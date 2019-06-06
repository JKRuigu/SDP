import React,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Alert} from 'react-native';
import { connect } from 'react-redux';

import {SelectedParcels,MainDisplay } from './components';
import Modal from '../../commons/Modal';
import { sendParcels } from './actions';

class ManageParcels extends Component{
	
	static navigationOptions ={
		header:null
	}

	state ={
		isSelected:false,
		counter:0,
		selectedItems:[],
		filterItem:'',
		isDriverSelected:true,
		filterItem2:'',
		text:'Kamaiu',
		myListId:[],
		myListRegId:[],
		suggestions:[],
		item:{},
		parcels:[],
		displayParcels:[],
		show:false,
		type:'ManageParcels',
		title:'Send Parcels'
	}

	handleAdd =x=>{
		const {selectedItems,displayParcels,suggestions,myListId,myListRegId }= this.state;

		const delicate = selectedItems.filter(parcel=>parcel.regID === x.regID)
		if (delicate.length >0) {
			const filteredParcels = displayParcels.filter(parcel=>parcel.regID !== x.regID);
			this.setState({displayParcels:filteredParcels});
		}else{
			if(suggestions.length >0){
				const filterSuggestions = suggestions.filter(parcel=>parcel.regID !== x.regID)
				this.setState({suggestions:filterSuggestions}); 
			}
			// Alert.alert(`myListId ${myListId.length} myListRegId ${myListRegId.length} selectedItems ${selectedItems.length}`)
			const filteredParcels = displayParcels.filter(parcel=>parcel.regID !== x.regID)
			this.setState({
				myListId:[...myListId,x._id],
				myListRegId:[...myListRegId,x.regID],
				text:x.regID,
				selectedItems:[...this.state.selectedItems,x],
				displayParcels:filteredParcels,
				counter:selectedItems.length+1
			});
		}
		
	}

	handleRemove =x=>{
		const {selectedItems,displayParcels,myListId,myListRegId }= this.state;
		const filterSelectedList = selectedItems.filter(parcel=>parcel.regID !== x.regID);
		const myListIdFilter = myListId.filter(item=> item !== x._id);
		// Alert.alert(myListIdFilter.length)
		const myListRegIdFilter = myListRegId.filter(item=> item !== x.regID);

		this.setState({text:x.regID,displayParcels:[...displayParcels,x],myListRegId:myListRegIdFilter,myListId:myListIdFilter,counter:selectedItems.length-1,selectedItems:filterSelectedList});
	}

	componentWillMount(){	
		if (this.props.auth) {
			this.handleFetchData();
		}		
	}

	handleFetchData = async ()=>{
		const { parcel } = this.props.parcels;
		await this.setState({displayParcels:parcel,parcels:parcel});
	}

	handleSubmit = async()=>{
		if (this.props.auth) {
			const { auth } = this.props;

			let data ={
				"token":auth.token,
				"partnerId":auth.user.partnerId,
				"mydata":{					
					"vehicleNumber":this.props.navigation.getParam('vehicleNumber'),
					"parcels":this.state.myListId
				}
			}
			await this.props.sendParcels(data);

			if (this.props.parcels.isError === true) {
				Alert.alert(this.props.parcels.error);
			}else{
				this.setState({show:false,selectedItems:[],counter:0});
				Alert.alert("Success !");
			}
		}
	
	}

	handleModal = ()=>{
		this.setState({show:!this.state.show});
	}

	handleToggle=()=>{
		this.setState({isSelected:!this.state.isSelected});
	}
	handleGoBack =()=>{
		this.props.navigation.push('SendParcel');
	}
	handleInputFilter =n=>{
		const {suggestions,filterItem,isSelected }= this.state;
		// ********ONLY ALLOW NUMBERS AND LETTERS*********//
		const text = n.toString();
		this.setState({filterItem:text});
		if (!isSelected) {
				const regex = new RegExp(`^${text}`,'i');
				if (text.split('').length > filterItem.split('').length) {
					const {displayParcels }= this.state;
					const filter = displayParcels.sort().filter(parcel=>regex.test(parcel.regID));
					this.setState({suggestions:filter});
				}else{
					const {displayParcels }= this.state;
					const filter = displayParcels.sort().filter(parcel=>regex.test(parcel.regID));
					this.setState({suggestions:filter});
				} 
		}

	}

	render(){
		var optText = styles.optText;
		var optionText = styles.optionText; 
		const vehicleNumber = this.props.navigation.getParam('vehicleNumber');

		const { isSelected,filterItem,suggestions,type,myListRegId,show,parcels,counter,selectedItems,displayParcels,title } = this.state;
		return(
			<View style={styles.root}>	
				<View style={styles.toolbar}>
					<TouchableOpacity style={styles.toggleBtn} onPress={this.handleToggle}>
						<Text style={styles.txt}>
							{isSelected === true? "Add More Parcels":"Show Selected Parcels"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity  style={styles.counter}>
						<Text style={styles.txt}>{counter}</Text>
					</TouchableOpacity>
					{isSelected === false?
						<TouchableOpacity style={styles.back} onPress={this.handleGoBack}>
							<Text style={styles.txt}>Back</Text>
						</TouchableOpacity>:
						<TouchableOpacity style={styles.back} onPress={this.handleModal}>
							<Text style={styles.txt}>SUBMIT</Text>
						</TouchableOpacity>}
				</View>

				{isSelected === true?
					<SelectedParcels
						styles={styles}
						isSelected={isSelected}
						optText={optText}
						vehicleNumber={vehicleNumber}
						handleRemove={this.handleRemove}
						selectedItems={selectedItems}
					/>:
					<MainDisplay
						styles={styles}
						isSelected={isSelected}
						optionText={optionText}
						handleAdd={this.handleAdd}
						parcels={suggestions.length>0 || filterItem.split('').length>0?suggestions: selectedItems.length>0?displayParcels:parcels}
					/>}

				<Modal
					styles={styles}
					handleSubmit={this.handleSubmit}
					show={show}
					item={myListRegId}
					handleModal={this.handleModal}
					title={title}
					type={type}
					isLoading={this.props.parcels.isLoading}
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
	  view:{
	  	backgroundColor:"#f4f4f4"
	  },
	 toolbar:{
		alignItems:'center',
		justifyContent:'center',
	 	height:40,
	 	margin:1,
	 	borderRadius:15,
		flexDirection:"row"
	 },
	 txt:{
	 	color:"#fff"
	 },
	 toggleBtn:{
		alignItems:'center',
		justifyContent:'center', 
	 	color:'#fff',
	 	backgroundColor:"green",
	 	borderRadius:10,
	 	color:'#fff',
	 	width:'60%',
	 	height:35,
	 	padding:6,
		marginHorizontal:3
	},
	counter:{
		alignItems:'center',
		justifyContent:'center', 
		color:'#fff',
	 	width:'10%',
	 	borderRadius:15,
		backgroundColor:'red',
		marginHorizontal:3,
	 	height:35,
	 	padding:6
	},
	back:{
		alignItems:'center',
		justifyContent:'center',		 
	 	color:'#000',
	 	backgroundColor:"green",
	 	borderRadius:10,
	 	color:'#fff',
	 	width:'25%',
	 	height:35,
	 	padding:6
	},
	modal:{
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
	listHolder:{
		alignItems:'center',
		justifyContent:'center'
	},
	listTitle:{
		color:'#fff',
		fontWeight:'400',
		fontSize:18,
		marginHorizontal:5
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
	submitBtn:{		
		alignItems:'center',
		justifyContent:'center',
		margin:10
	},
	btn:{		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'blue',
		width:'100%',
		borderRadius:15,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#fff'
	},
	btnLoading:{		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#f4f4f4',
		width:'100%',
		borderRadius:15,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#000'
	},
	btnText:{
		color:'#fff'
	},
	mainList:{		
		alignItems:'center',
		justifyContent:'center',
		height:40,
		backgroundColor:'orange',
		borderRadius:10,
		margin:5
	},
	listText:{
		color:'#fff',
		fontSize:20,
		fontWeight:'400'
	},
	list:{
		height:60,
		margin:5,
		borderRadius:10,
		flexDirection:"row"
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
	submitBtnHolder:{
		alignItems:'center',
		justifyContent:'center',
		margin:5
	},
	submitBtn:{
		alignItems:'center',
		justifyContent:'center',
		borderRadius:20,
		height:35
	},
	btn:{		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'blue',
		width:'70%',
		borderRadius:15,
		fontSize:15,
		marginTop:10,
		padding:10,
		color:'#fff'
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
	btnText:{
		color:'#fff'
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
	parcels:state.parcel
});


export default connect(mapStateToProps,{ sendParcels })(ManageParcels);
