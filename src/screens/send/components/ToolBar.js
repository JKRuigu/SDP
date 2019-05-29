import React,{Component} from 'react';
import {StatusBar,Text,View,TextInput} from 'react-native';


export default ({
	styles,
	handleToggle,
	handleInputFilter,
	filterItem,
	counter,
	isSelected
})=>(<View>
		<StatusBar
				backgroundColor="blue"
				barStyle="light-content"
			/>
		<View>					
			<TextInput
				style={styles.textInput}
				defaultValue={filterItem}
				placeholder="Search"
				placeholderTextColor="#000"
				onChangeText={handleInputFilter}
			/>
			<View style={styles.toolbar}>
				<Text style={styles.toggleBtn} onPress={handleToggle}>
					{isSelected === true? "Add More Parcels":"Show Selected Parcels"}
				</Text>
				<Text style={styles.counter}>{counter}</Text>
			</View>
		</View>
	</View>)