import React,{Component} from 'react';
import {Text,View,TouchableOpacity,ScrollView } from 'react-native';

export default ({
	styles,
	handleSubmit,
	item,
	isLoading
})=>(
	<View>
		<ScrollView>
			<View>
				<Text style={styles.listTitle}>Parcel Reg No.</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.regID}</Text>
				</View>
				<Text style={styles.listTitle}>Parcel Catergory</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.parcelCatergory}</Text>
				</View>
				<Text style={styles.listTitle}>Sender Name</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.senderName}</Text>
				</View>
				<Text style={styles.listTitle}>Sender Location</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.senderLocation}</Text>
				</View>
				<Text style={styles.listTitle}>Receiver Name</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.receiverName}</Text>
				</View>
				<Text style={styles.listTitle}>Receiver ID</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.receiverID}</Text>
				</View>
				<Text style={styles.listTitle}>Receiver Tel</Text>
				<View style={styles.listHolder}>
					<Text style={styles.modalTitleText}>{item.receiverTel}</Text>
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
			</View>	
		</ScrollView>
	</View>)