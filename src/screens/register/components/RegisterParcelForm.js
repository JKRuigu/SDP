import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
// import styles from '../styles/AuthScreen';


export default ({
	styles,
	handleModal,
	isSelected,
	senderLocation,
	receiverLocation,
	parcelCatergory
})=>(<ScrollView>
			<View  style={styles.text}><Text>Sender Details</Text></View>
			<View style={styles.inputHolder}>
				<TextInput 
					placeholder="Full Name"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>
			<View style={styles.inputHolder}>
				<TextInput 
					placeholder="ID Number"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>
			<View style={styles.inputHolder}>
				<TextInput 
					placeholder="Mobile Number"
					placeholderTextColor="black"
					style={styles.inputText}
				/>	
			</View>
			<View style={styles.locationHolder}>
				<TouchableOpacity style={styles.location} onPress={()=>handleModal('Sender')}>
					<Text style={styles.btnText}>{senderLocation}</Text>
				</TouchableOpacity>	
			</View>
			<View  style={styles.text}><Text>Receiver Details</Text></View>
			<View style={styles.inputHolder}>
				<TextInput 
					placeholder="Full Name"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>						
			<View style={styles.inputHolder}>
				<TextInput 
					placeholder="ID Number"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>						
			<View style={styles.inputHolder}>
			<TextInput 
				placeholder="Mobile Number"
				placeholderTextColor="black"
				style={styles.inputText}
			/>	
			</View>						
			<View style={styles.locationHolder}>
				<TouchableOpacity style={styles.location} onPress={()=>handleModal('Receiver')}>
					<Text style={styles.btnText}>{receiverLocation}</Text>
				</TouchableOpacity>	
			</View>
			<View  style={styles.text}><Text>Parcel Details</Text></View>
			<View style={styles.inputHolder}>
				<TextInput 
					placeholder="Parcel Cost"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>						
			<View style={styles.locationHolder}>
				<TouchableOpacity style={styles.location} onPress={()=>handleModal('Catergory')}>
					<Text style={styles.btnText}>{parcelCatergory}</Text>
				</TouchableOpacity>	
			</View>	
			<View style={styles.submitBtn}>				
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnText}>REGISTER PARCEL</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>)