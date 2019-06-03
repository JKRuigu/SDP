import React,{ Component } from 'react';
import { View,TextInput,StyleSheet,Alert,Text,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Toolbar extends Component{
 
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
						<View>					
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
		paddingLeft:'30%'
	},
	icon:{
		marginHorizontal:5,
		alignItems:'center',
		justifyContent:'center',
		width:45,
		padding:10,
		borderRadius:40
	}

});