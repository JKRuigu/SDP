import React,{Component} from 'react';
import {Text,View,TouchableOpacity,ScrollView } from 'react-native';

export default ({
	styles,
	handleSubmit,
	item,
	isLoading
})=>(
	<View style={styles.view}>
		<ScrollView>
			{item.map(x=>
				<View style={styles.mainList} key={x}>
					<Text style={styles.listText}>{x}</Text>
				</View>
				)}
		</ScrollView>
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