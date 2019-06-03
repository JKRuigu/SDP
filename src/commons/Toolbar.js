import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { View,TextInput,StyleSheet,Alert,Text,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
		// await Alert.alert('Refreshing page!')
		if (this.props.auth) {
			const { auth } = this.props;
			let data ={
				"token":auth.token,
				"partnerId":auth.user.partnerId
			}
		
			await this.props.fetchParcels(data);
			await this.props.fetchCatergory(data);
			await this.props.fetchLocation(data);
			await this.props.fetchVehicle(data);
		}		
	}

	render(){
		const { isSearch,name } = this.state;
		
		return(
				<View style={styles.root}>
					<View style={isSearch === true ? {display:"none"}:""}>
						<Text style={styles.title}>{this.props.name}</Text>
					</View>
					<View style={this.props.index === 0? {display:"none",margin:5}:{flexDirection:"row"}}>
						<View style={isSearch !== true?{display:'none'}:{flex:1,justifyContent:'center',width:'80%'}}>
							<TextInput
								placeholder="search"
								style={styles.textInput}
							 />
						</View>
						<View style={{flexDirection:"row"}}>
							<Text style={styles.icon} onPress={this.handleFresh}>
								<Icon
									style={isSearch === true?{display:"none"}:""}
									name="md-refresh"
									size={26}
									color="#fff"
								/>
							</Text>					
							<Text style={styles.icon} onPress={this.handleSearch} >
								<Icon
									name={isSearch === true?"md-close": "md-search"}
									size={28}
									color="#fff"
								/>
							</Text>
						</View>
					</View>
				</View>

			)
	}
} 


const styles = StyleSheet.create({
	root:{
		backgroundColor:'blue',
		height:50,
		padding:3,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'center'
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
	icon:{
		marginHorizontal:3,
		alignItems:'center',
		justifyContent:'center',
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

