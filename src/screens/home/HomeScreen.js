import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,StatusBar} from 'react-native';

export default class HomeScreen extends Component{
	render(){
		return(
			<View style={styles.main}>
				<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
				<ScrollView  style={{flex:1,width:'100%'}}>
					<View  style={{flex:1}}>
						<View style={styles.container}>
							<TouchableOpacity style={styles.content}>
								<Text style={styles.text}>Register Parcels</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.content}>
								<Text style={styles.text}>Send Parcels</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.container}>
							<TouchableOpacity style={styles.content}>
								<Text style={styles.text}>Receive Parcels</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.content}>
								<Text style={styles.text}>Handover Parcels</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.container}>
							<TouchableOpacity style={styles.content}>
								<Text style={styles.text}>Settings</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.content}>
								<Text style={styles.text}>Profile</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

			</View>
			)
	}
}

const styles = StyleSheet.create({
	main:{
		backgroundColor:"#f4f4f4",
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	container:{
		flexDirection:'row',
		height:180
	},
	content:{
		backgroundColor:"rgba(0,0,249,0.7)",
		flex:1,
		margin:10,
		borderRadius:15,
		alignItems:'center',
		justifyContent:'center'
	}, 
	text:{
		color:'#000',
		fontSize:15
	}
});