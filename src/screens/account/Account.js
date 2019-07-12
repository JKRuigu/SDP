import React,{Component} from 'react';
import { TextInput,View,Text,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Account extends Component{
	render(){
		return(
			<View style={styles.root}>
				<Text style={styles.title}>Account</Text>
				<View>
					<Text style={styles.subtitle}>Username:</Text>
					<Text style={styles.text}>{this.props.auth.user.username}</Text>
					<Text style={styles.subtitle}>Sacco Name:</Text>
					<Text style={styles.text}>{this.props.auth.user.saccoName}</Text>
					<Text style={styles.subtitle}>Branch: </Text>
					<Text style={styles.text}>{this.props.auth.user.branch}</Text>
					<Text style={styles.subtitle}>Location: </Text>
					<Text style={styles.text}>{this.props.auth.user.location}</Text>
					<Text style={styles.subtitle}>Account Status: </Text>
					<Text style={{color:"green",marginHorizontal:20}}>Active</Text>
				</View>
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
		fontSize:15,
		color:"#000",
		fontWeight:"500",
		marginHorizontal:10
	},
	text:{
		color:"blue",
		fontSize:20,
		padding:5,
		marginHorizontal:20
	}
});

const mapStateToProps = state => ({
	auth:state.auth
});

export default connect(mapStateToProps,{})(Account);

