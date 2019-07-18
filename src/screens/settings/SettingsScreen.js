import React, {Component} from 'react';
import { Text,Picker,TouchableOpacity,View,Alert,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SettingsScreen extends Component {

	state = {
		isLoading:false,
		ip:"http://35.188.138.47",
		catergory:""
	}

	handleReg = async()=>{
			this.setState({isLoading:true});
		const { ip } = this.state;
		if (ip === "http://35.188.138.47" || ip === "http://localhost:8000") {
			// await AsyncStorage.setItem('url',JSON.stringify());
			await AsyncStorage.setItem('url',this.state.ip);
			this.setState({isLoading:false});
			Alert.alert("Success!")
		}else{
			this.setState({isLoading:false});
			Alert.alert("Please Select Ip Address!")
		}
	}

	handleIpAdress = ip =>{
		this.setState({ip});
	}

  render() {
    return (
      <View style={styles.root}>
      	<Text style={styles.title}>REGISTER YOUR DEVICE</Text>
		   <Picker	
			  selectedValue={this.state.catergory}
			  style={{height: 50, margin:10,marginTop:20,color:"blue",width:250,marginHorizontal:"16%"}}
			  onValueChange={(itemValue, itemIndex) =>
			    this.setState({catergory: itemValue})
			  }>
			  <Picker.Item label="Select Catergory" value="Select Catergory" />
			  <Picker.Item label="Individual" value="Individual" />
			  <Picker.Item label="Company" value="Company" />
			</Picker>
			<Text>Make sure you select http://35.188.138.47 as you default server</Text>
			<Picker	
			  selectedValue={this.state.ip}
			  style={{height: 50, margin:10,marginTop:20,color:"blue",width:250,marginHorizontal:"16%"}}
			  onValueChange={this.handleIpAdress}>
			  <Picker.Item label="Select IP Address" value="Select IP Address" />
			  <Picker.Item label="http://35.188.138.47" value="http://35.188.138.47" />
			</Picker>
			{
				this.state.isLoading === true?

			<TouchableOpacity style={{marginHorizontal:"10%",backgroundColor:'#455a64',margin:10,width:250,borderRadius:20,fontSize:15,marginTop:10,padding:10,color:'#fff' }}>
				<Text style={{fontSize:16,color:'#000',textAlign:'center'}}>Updating you settings...</Text>
			</TouchableOpacity>:
			<TouchableOpacity onPress={this.handleReg} style={{marginHorizontal:"10%",backgroundColor:'#455a64',margin:10,width:250,borderRadius:20,fontSize:15,marginTop:10,padding:10,color:'#fff' }}>
				<Text style={{fontSize:16,color:'#000',textAlign:'center'}}>REGISTER DEVICE</Text>
			</TouchableOpacity>
			}
	    </View>
    );
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
	}
});

export default SettingsScreen