import React,{Component} from 'react';
import { TextInput,View,Text,StyleSheet,ScrollView,Linking } from 'react-native';

class About extends Component{
	render(){
		return(
			<View style={styles.root}>
				<ScrollView>
				<Text style={styles.title}>About</Text>
				<View>
					<Text style={styles.subtitle}>Powered by:</Text>
					<Text style={styles.text}>H & S Technologies</Text>
					<Text style={styles.subtitle}>Version:</Text>
					<Text style={styles.text}>v0.2.9</Text>
					<Text style={styles.subtitle}>Name: </Text>
					<Text style={styles.text}>Shift Delivery Platform (SDP)</Text>
					<Text style={styles.subtitle}>About</Text>
					<Text style={styles.text}>This mobile app helps you to record,store and manage your Delivery records online using the latest Cloud databases.</Text>
					<Text style={styles.subtitle}>official Website:</Text>
					<Text style={styles.textLink}  onPress={()=> Linking.openURL('https://shiftdeliveryplatform.xyz')}>www.shiftdeliveryplatform.xyz</Text>
					<Text style={styles.subtitle}>Email:</Text>
					<Text style={styles.text}>shiftdeliveryplatform@gmail.com</Text>
					<Text style={styles.subtitle}>Call or SMS:</Text>
					<Text style={styles.text}>(+254) 0729 614 021</Text>

					<Text style={{fontSize:8,padding:8}}>Give us your feedback i.e to report a bug,request new feature,account management,technical assistance</Text>
				</View>
				</ScrollView>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	root:{
		backgroundColor:'#f4f4f4',
		flex:1		
	},
	title:{
		fontSize:20,	
		alignItems:'center',
		justifyContent:'center',
		textAlign:"center",
		height:50,
		backgroundColor:'blue',
		color:"#fff",
		width:"100%",
		flexDirection:"row",
		padding:7
	},
	subtitle:{
		fontSize:12,
		color:"#000",
		fontWeight:"500",
		marginHorizontal:10
	},
	text:{
		color:"blue",
		fontSize:14,
		padding:5,
		marginHorizontal:20
	},
	textLink:{
		color:"red",
		fontSize:14,
		textDecorationLine:'underline',
		fontStyle:'italic',
		padding:5,
		marginHorizontal:20
	}
});

export default About

