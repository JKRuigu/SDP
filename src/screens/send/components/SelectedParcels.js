import React,{Component} from 'react';
import {ScrollView,Text,View} from 'react-native';


export default ({
	styles,
	handleRemove,
	selectedItems,
	optText,
	vehicleNumber
})=>(<View>
		<Text style={styles.selectedVehicle}>Selected Vehicle {vehicleNumber.toString().toUpperCase()}</Text>
		<ScrollView>			
			{selectedItems.map((parcel,i)=>(
				<View style={styles.list} key={i}>
				<View style={styles.option}>
					<Text style={optText} onPress={()=>handleRemove(parcel)}>Cancel</Text>
				</View>
				<View style={styles.listContent}>
					<View style={styles.mainContainer}>
						<Text style={styles.mainText}>{parcel.regID}</Text>
					</View>
					<View style={styles.subContainer}>
						<Text style={styles.location}>catergory</Text>
						<Text style={styles.locationText}>{parcel.parcelCatergory} {parcel.receiverLocation}</Text>
					</View>
				</View>
			</View>))}
		</ScrollView>
	</View>)