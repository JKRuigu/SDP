import React,{Component} from 'react';
import { connect } from 'react-redux';
// import { Button } from 'react-native-elements';
import {StyleSheet,ScrollView,Text,View,Button,Alert,TextInput,StatusBar,ProgressBarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from './components/Modal';

import { handOverParcels } from './actions';


class HandOver extends Component{

	static navigationOptions = {
		tabBarIcon : ({ tintColor,focused})=>(
				<Icon 
					name="md-person"
					size={focused === true ? 28 : 26}
					color={focused === true? 'blue':'gray'}
				/>
			)
	}

	state ={
		counter:0,
		type:'HandOver',
		title:'HandOver Parcel',
		isLoading:false,
		show:false,
		item:{},
		parcels:[]
	}

	handleSelect =x=>{
		this.setState({item:x,show:true});
	}

	handleSubmit = async() =>{
		// Alert.alert(this.state.item.regID)
		
		if (this.props.auth) {
			const { auth } = this.props;

			let data ={
				"token":auth.token,
				"partnerId":auth.user.partnerId,
				"mydata":{					
					"receiverServedBy":auth.user.username,
					"regID":this.state.item.regID
				}
			}
			await this.props.handOverParcels(data);

			if (this.props.parcels.isError === true) {
				Alert.alert(this.props.parcels.error);
			}else{
				this.setState({show:false});
				Alert.alert("Success");
			}
		}
	
	}

	handleModal = () => {
	    this.setState({show: !this.state.show});		
	}
	handleInputFilter =n=>{
		
		const {parcels,parcels2,filterItem }= this.state;
		//ONLY ALLOW NUMBERS AND LETTERS//
		let text = n.toString()
		this.setState({filterItem:text});
		if (text) {
			const regex = new RegExp(`^${text}`,'i');
			if (text.split('').length > filterItem.split('').length) {
				const {parcels }= this.state;
				const filter = parcels.sort().filter(parcel=>regex.test(parcel.regId));
				this.setState({parcels:filter});
			}else{
				const {parcels2 }= this.state;
				const filter = parcels2.sort().filter(parcel=>regex.test(parcel.regId));
				this.setState({parcels:filter});
			}
		}else{
			this.setState({parcels:parcels2});
		}

	}

	render(){
		const filteredParcels = this.props.parcels.parcel.filter(x => x.status === true && x.isParcelCollected === false && x.reachedDestination === true && x.receiverLocation.toLowerCase() === this.props.auth.user.location.toLowerCase());
		const filteredParcelsLength = filteredParcels.length;

		const { show,type,item,title } = this.state;
		
		return(
			<View style={styles.root}>				
				<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
				{ this.props.parcels.isLoading === true?	
				<ProgressBarAndroid styleAttr="Horizontal" style={{margin:-5,width:'100%'}} color="#2196F3" />:<Text />}
				{filteredParcelsLength < 1 ? 
					<Text style={{fontWeight:"400",fontSize:25,marginHorizontal:10}}>No Parcels</Text>:
					<Text></Text>}
				<View>
					<ScrollView>						
						{filteredParcels.map((parcel,i)=>(
							<View style={styles.list} key={i}>
									<View style={styles.option}>
										<Text style={styles.optionText} onPress={()=>this.handleSelect(parcel)}>
											Add
										</Text>
									</View>
									<View style={styles.listContent}>
										<ScrollView>
											<View style={styles.mainContainer}>												
												<Text style={styles.mainText}><Text style={styles.location}>RegID</Text> {parcel.regID}</Text>
											</View>
											<View style={styles.subContainer}>
												<Text style={styles.location}>Receiver</Text>
												<Text style={styles.locationText}>{parcel.receiverName}</Text>
											</View>
											<View style={styles.subContainer}>
												<Text style={styles.location}>Receiver ID</Text>
												<Text style={styles.locationText}>{parcel.receiverID}</Text>
											</View>

											<View style={styles.subContainer}>
												<Text style={styles.location}>Parcel from:</Text>
												<Text style={styles.locationText}>{parcel.senderLocation}</Text>
											</View>

											<View style={styles.subContainer}>
												<Text style={styles.location}>Catergory</Text>
												<Text style={styles.locationText}>{parcel.parcelCatergory}</Text>
											</View>
										</ScrollView>
									</View>
						</View>))}
					</ScrollView>
				</View>
				<Modal
					styles={styles}
					handleSubmit={this.handleSubmit}
					show={show}
					item={item}
					isLoading={ this.props.parcels.isLoading}
					handleModal={this.handleModal}
					title={title}
					type={type}
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
		backgroundColor:'#455a64',
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
	list:{
		height:80,
		margin:5,
		borderRadius:10,
		flexDirection:"row"
	},
	option:{
		backgroundColor:"#fff",
		borderColor:'#f73859',
		borderRadius:45,
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
	}
});


const mapStateToProps = state => ({
	auth:state.auth,
	parcels:state.parcel
});


export default connect(mapStateToProps,{ handOverParcels })(HandOver);
