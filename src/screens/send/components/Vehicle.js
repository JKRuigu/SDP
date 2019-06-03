import React,{Component} from 'react';
import {ScrollView,Text,View} from 'react-native';


export default ({
	vehicles,
	styles,
	handleSelectDriver,
	optText
})=>(<ScrollView>						
		{vehicles.map((vehicle,i)=>(
			<View style={styles.list} key={i}>
			<View style={styles.option}>
				<Text style={optText} onPress={()=>handleSelectDriver(vehicle)}>Select</Text>
			</View>
			<View style={styles.listContent}>
				<View style={styles.mainContainer}>
					<Text style={styles.mainText}>{vehicle.vehicleNumber}</Text>
				</View>
				<View style={styles.subContainer}>
					<Text style={styles.location}>Driver ID</Text>
					<Text style={styles.locationText}>{vehicle.driverName}</Text>
				</View>
			</View>
		</View>))}
	</ScrollView>)