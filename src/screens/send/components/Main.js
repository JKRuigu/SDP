import React,{Component} from 'react';
import {ScrollView,Text,View} from 'react-native';


export default ({
	styles,
	handleAdd,
	parcels,
	optionText
})=>(<ScrollView>						
		{parcels.map((parcel,i)=>(
			<View style={styles.list} key={i}>
			<View style={styles.option}>
				<Text style={optionText} onPress={()=>handleAdd(parcel)}>Add</Text>
			</View>
			<View style={styles.listContent}>
				<View style={styles.mainContainer}>
					<Text style={styles.mainText}>{parcel.regId}</Text>
				</View>
				<View style={styles.subContainer}>
					<Text style={styles.location}>Location</Text>
					<Text style={styles.locationText}>{parcel.location}</Text>
				</View>
			</View>
		</View>))}
	</ScrollView>)