import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// import { Button } from 'react-native-elements';
import {StyleSheet,ScrollView,Text,View,Button,TextInput,StatusBar,ProgressBarAndroid} from 'react-native';
import { connect } from 'react-redux';


class ReceiveParcel extends Component{

	static navigationOptions = {
		tabBarIcon : ({ tintColor,focused})=>(
				<Icon 
					name="md-subway"
					size={focused === true ? 28 : 26}
					color={focused === true? 'blue':'gray'}
				/>
			)
	}


	state ={
		counter:0,
		filterItem:'',
		filterItem2:'',
		parcels:[{"regId":"FG3458897","location":"Nairobi"},{"regId":"JG3458897","location":"Kisumu"},{"regId":"FG03458897","location":"Nairobi"},{"regId":"JG3458s897","location":"Kisumu"},{"regId":"FsG345889f7","location":"Nairobi"},{"regId":"JGEE3458897","location":"Kisumu"},{"regId":"FG3DE458897","location":"Nairobi"},{"regId":"JG34588sf97","location":"Kisumu"},{"regId":"FG3DF458897","location":"Nairobi"},{"regId":"JG34DEG58897","location":"Kisumu"}],
		parcels2:[{"regId":"FG3458897","location":"Nairobi"},{"regId":"JG3458897","location":"Kisumu"},{"regId":"FG03458897","location":"Nairobi"},{"regId":"JG3458s897","location":"Kisumu"},{"regId":"FsG345889f7","location":"Nairobi"},{"regId":"JGEE3458897","location":"Kisumu"},{"regId":"FG3DE458897","location":"Nairobi"},{"regId":"JG34588sf97","location":"Kisumu"},{"regId":"FG3DF458897","location":"Nairobi"},{"regId":"JG34DEG58897","location":"Kisumu"}]
	}

	handleSelect =x=>{
		
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

		const { filterItem,parcels } = this.state;
		return(
			<View style={styles.root}>				
				<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
				<View>
				{this.props.parcels.isLoading === true?	
				<ProgressBarAndroid styleAttr="Horizontal" style={{margin:-5,width:'100%'}} color="#2196F3" />:<Text />}
					<ScrollView>						
						{this.props.parcels.parcel.map((parcel,i)=>(
							<View style={styles.list} key={i}>
							<View style={styles.option}>
								<Text style={styles.optionText} onPress={()=>this.handleSelect(parcel)}>
									Add
								</Text>
							</View>
							<View style={styles.listContent}>
								<ScrollView>
									<View style={styles.mainContainer}>
										<Text style={styles.mainText}>
											<Text style={{color:'#fff'}}>Reg ID:</Text>
												{parcel.regID}
										</Text>
									</View>
									<View style={styles.subContainer}>
										<Text style={styles.location}>catergory</Text>
										<Text style={styles.locationText}>{parcel.parcelCatergory}</Text>
									</View>
									<View style={styles.subContainer}>
										<Text style={styles.location}>Vehicle</Text>
									<Text style={styles.locationText}> {parcel.vehicleNumber}</Text>
									</View>
								</ScrollView>
							</View>
						</View>))}
					</ScrollView>
				</View>
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
	list:{
		height:60,
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


export default connect(mapStateToProps,{})(ReceiveParcel);
