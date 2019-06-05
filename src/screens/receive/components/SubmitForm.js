import React,{Component} from 'react';
import {Text,View,TouchableOpacity } from 'react-native';
// import Receive from '../screens/receive/component/SubmitForm';

export default ({
	styles,
	handleSubmit,
	item,
	isLoading
})=>(
	<View>
		<Text style={styles.listTitle}>Reg No.</Text>
		<View style={styles.listHolder}>
			<Text style={styles.modalTitleText}>{item.regID}</Text>
		</View>
		<Text style={styles.listTitle}>Batch No.</Text>
		<View style={styles.listHolder}>
			<Text style={styles.modalTitleText}>{item.batchNo}</Text>
		</View>
		<Text style={styles.listTitle}>Vehicle Number</Text>
		<View style={styles.listHolder}>
			<Text style={styles.modalTitleText}>{item.vehicleNumber}</Text>
		</View>
		<Text style={styles.listTitle}>Catergory</Text>
		<View style={styles.listHolder}>
			<Text style={styles.modalTitleText}>{item.parcelCatergory}</Text>
		</View>
		<View style={styles.submitBtn}>				
			{isLoading === true?
				<TouchableOpacity style={styles.btnLoading} >
					<Text style={styles.btnText}>Submitting... Please wait</Text>
				</TouchableOpacity>:
			<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
				<Text style={styles.btnText}>SUBMIT</Text>
			</TouchableOpacity>}
		</View>
	</View>)