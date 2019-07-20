import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { View,TextInput,StyleSheet,Alert,Text,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import { fetchParcels,fetchCatergory,fetchLocation,fetchVehicle } from '../screens/register/actions';

class Toolbar extends Component{
 
	state = {
		name:'Register',
		isSearch:false,
		index:''
	}

	// static navigationOptions = ({ navigation }) =>{
	// 		const { routeName } = navigation.state.routes[navigation.state.index]
	// 		this.setState({name:routeName,index:navigation.state.index});
	// 	}

	handleSearch = ()=>{
		this.setState({isSearch:!this.state.isSearch});
	}

	handleFresh = async ()=>{
		await Alert.alert('Refreshing page!')
		if (this.props.auth) {
			const { auth } = this.props;
			const value = await AsyncStorage.getItem('url');
			let data ={
				"token":auth.token,
				"partnerId":auth.user.partnerId,
				"url":value
			}
		
			await this.props.fetchParcels(data);
			await this.props.fetchCatergory(data);
			await this.props.fetchLocation(data);
			await this.props.fetchVehicle(data);
		}		
	}

	handleToggle = ()=>{
		this.props.navigation.toggleDrawer();
	}

	handleSetting = ()=>{
		// this.props.navigation.push('SettingsScreen');
		let email = "shiftdeliveryplatform@gmail.com";
		let version = "v0.3.8";
		let title = "SETTINGS";
		let web = "www.shiftdeliveryplatform.xyz"
		let company = "H & S Technology"
		Alert.alert(version,email)
	}

	render(){
		const { isSearch,name } = this.state;
		
		return(

				<View style={styles.root}>
					<Text style={styles.menu} onPress={this.handleToggle} >
						<Icon
							name="md-menu"
							size={28}
							color="#fff"
						/>
					</Text>
					{this.props.index === 0?
						<View style={isSearch === true ? {display:"none"}:""}>
							<Text style={styles.title}>{this.props.name}</Text>
						</View>:
					isSearch === true?
						<View style={{flexDirection:"row"}}>
							<View style={{flex:1,justifyContent:'center',width:'80%'}}>
								<TextInput
									placeholder="search"
									style={styles.textInput}
								 />
							</View>
							<Text style={styles.iconMore} onPress={this.handleSearch} >
								<Icon
									name="md-close"
									size={28}
									color="#fff"
								/>
							</Text>
						</View>:
						<View style={{flexDirection:"row"}}>
							<View style={{padding:5}}>	
								<Text style={styles.title}>{this.props.name}</Text>
							</View>
							<View style={{marginRight:-70,flexDirection:"row"}}>
								<Text style={styles.icon} onPress={this.handleFresh}>
										<Icon
											name="md-refresh"
											size={26}
											color="#fff"
										/>
								</Text>							
								<Text style={styles.icon} onPress={this.handleSetting}>
									<Icon
										name="md-more"
										size={28}
										color="#fff"
									/>
								</Text>
							</View>
						</View>}					
				</View>
			)
	}
} 


const styles = StyleSheet.create({
	root:{
		backgroundColor:'blue',
		height:50,
		alignItems:'center',
		justifyContent:"flex-start",
		padding:3,
		flexDirection:'row'
	},
	title:{
		color:'#fff',
		fontSize:18,
		display:'flex'
	},
	textInput:{
		backgroundColor:'#fff',
		flex:1,
		width:'95%',
		borderWidth:1,
		borderColor:'#fff',
		borderRadius:20,
		alignItems:'center',
		justifyContent:'center',
		fontSize:18,
		margin:4,
		marginHorizontal:15,
		padding:5,
		paddingLeft:10
	},
	menu:{
		margin:2,
		marginHorizontal:1,
		width:40,
		padding:5,
		borderRadius:40
	},
	icon:{
		marginHorizontal:3,
		alignItems:'center',
		justifyContent:'center',
		width:40,
		padding:5,
		borderRadius:40
	},
	iconMore:{
		flex:1,
		marginRight:5,
		marginHorizontal:3,
		justifyContent:'flex-end',
		width:40,
		padding:5,
		borderRadius:40
	}

});



const mapStateToProps = state => ({
	auth:state.auth,
	catergory:state.catergory,
	location:state.location,
	vehicle:state.vehicle
});

export default connect(mapStateToProps,{ fetchParcels,fetchCatergory,fetchLocation,fetchVehicle })(Toolbar);

