import React,{Component} from 'react';
// import { Button } from 'react-native-elements';
import {StyleSheet,Text,View} from 'react-native';
import {SelectedParcels,MainDisplay } from './components';

export default class ManageParcels extends Component{
	
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
		suggestions:[],
		parcels:[{"regId":"FG3458897","location":"Nairobi"},{"regId":"JG3458897","location":"Kisumu"},{"regId":"FG03458897","location":"Nairobi"},{"regId":"JG3458s897","location":"Kisumu"},{"regId":"FsG345889f7","location":"Nairobi"},{"regId":"JGEE3458897","location":"Kisumu"},{"regId":"FG3DE458897","location":"Nairobi"},{"regId":"JG34588sf97","location":"Kisumu"},{"regId":"FG3DF458897","location":"Nairobi"},{"regId":"JG34DEG58897","location":"Kisumu"}],
		displayParcels:[{"regId":"FG3458897","location":"Nairobi"},{"regId":"JG3458897","location":"Kisumu"},{"regId":"FG03458897","location":"Nairobi"},{"regId":"JG3458s897","location":"Kisumu"},{"regId":"FsG345889f7","location":"Nairobi"},{"regId":"JGEE3458897","location":"Kisumu"},{"regId":"FG3DE458897","location":"Nairobi"},{"regId":"JG34588sf97","location":"Kisumu"},{"regId":"FG3DF458897","location":"Nairobi"},{"regId":"JG34DEG58897","location":"Kisumu"}]
	}

	handleAdd =x=>{
		const {selectedItems,displayParcels,suggestions }= this.state;

		const delicate = selectedItems.filter(parcel=>parcel.regId === x.regId)
		if (delicate.length >0) {
			const filteredParcels = displayParcels.filter(parcel=>parcel.regId !== x.regId);
			this.setState({displayParcels:filteredParcels});
		}else{
			if(suggestions.length >0){
				const filterSuggestions = suggestions.filter(parcel=>parcel.regId !== x.regId)
				this.setState({suggestions:filterSuggestions}); 
			}

			const filteredParcels = displayParcels.filter(parcel=>parcel.regId !== x.regId)
			this.setState({
				text:x.regId,
				selectedItems:[...this.state.selectedItems,x],
				displayParcels:filteredParcels,
				counter:selectedItems.length+1
			});
		}
		
	}

	handleRemove =x=>{
		const {selectedItems,displayParcels }= this.state;
		const filterSelectedList = selectedItems.filter(parcel=>parcel.regId !== x.regId);

		this.setState({text:x.regId,displayParcels:[...displayParcels,x],counter:selectedItems.length-1,selectedItems:filterSelectedList});
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
					const filter = displayParcels.sort().filter(parcel=>regex.test(parcel.regId));
					this.setState({suggestions:filter});
				}else{
					const {displayParcels }= this.state;
					const filter = displayParcels.sort().filter(parcel=>regex.test(parcel.regId));
					this.setState({suggestions:filter});
				}
		}

	}

	render(){
		var optText = styles.optText;
		var optionText = styles.optionText; 
		const vehicleNumber = this.props.navigation.getParam('vehicleNumber');

		const { isSelected,filterItem,suggestions,parcels,counter,selectedItems,displayParcels } = this.state;
		return(
			<View style={styles.root}>	
				<View style={styles.toolbar}>
					<Text style={styles.toggleBtn} onPress={this.handleToggle}>
						{isSelected === true? "Add More Parcels":"Show Selected Parcels"}
					</Text>
					<Text style={styles.counter}>{counter}</Text>
					<Text style={styles.toggleBtn} onPress={this.handleGoBack}>Back</Text>
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
	 	height:20,
		flexDirection:"row",
		backgroundColor:'rgba(0,0,0,0.4)'
	 },
	 textInput:{
	 	backgroundColor:'rgba(0,0,0,0.5)',
	 	width:200,
	 	borderRadius:20,
	 	fontSize:15,
	 	paddingLeft:20
	 },
	 toggleBtn:{ 
	 	color:'#000',
	 	backgroundColor:"rgba(0,0,255,0.5)"
	},
	counter:{ 
		color:'#000'
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
