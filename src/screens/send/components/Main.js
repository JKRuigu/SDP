import React,{Component} from 'react';
import {ScrollView,RefreshControl,Text,View} from 'react-native';


export default ({
	styles,
	handleAdd,
	parcels,
	onRefresh,
	refreshing,
	optionText
})=>(<ScrollView
		refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>						
		{parcels.map((parcel,i)=>(
			<View style={styles.list} key={i}>
			<View style={styles.option}>
				<Text style={optionText} onPress={()=>handleAdd(parcel)}>Add</Text>
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
	</ScrollView>)