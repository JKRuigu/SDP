import React,{Component} from 'react';
import {Text,View,TouchableOpacity } from 'react-native';
// import Receive from '../screens/receive/component/SubmitForm';

export default ({
	styles,
	handleSubmit,
	item
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
			<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
				<Text style={styles.btnText}>SUBMIT</Text>
			</TouchableOpacity>
		</View>
	</View>)