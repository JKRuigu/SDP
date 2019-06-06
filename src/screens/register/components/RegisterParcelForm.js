import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
// import styles from '../styles/AuthScreen';


export default ({
	isparcelCatergory,
	issenderLocation,
	isreceiverLocation,
	isErrorsenderID,
	isErrorsenderTel,
	isErrorreceiverName,
	isErrorreceiverID,
	isErrorreceiverTel,
	isErrorparcelCost,
	senderName,
	isErrorsenderName,
	handlesenderName,
	senderID,
	handlesenderID,
	senderTel,
	handlesenderTel,
	receiverName,
	handlereceiverName,
	receiverID,
	handlereceiverID,
	receiverTel,
	handlereceiverTel,
	parcelCost,
	handleparcelCost,
	styles,
	handleSubmit,
	handleModal,
	isSelected,
	senderLocation,
	receiverLocation,
	parcelCatergory,
	isLoadingCatergory,
	isLoadingLocation
})=>(<ScrollView>
			<View  style={styles.text}><Text>Sender Details</Text></View>
			<View style={isErrorsenderName === false? styles.inputHolder : styles.inputTextError}>
				<TextInput 
					defaultValue={senderName}
					onChangeText={handlesenderName}
					placeholder="Full Name"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>
			<View style={isErrorsenderID === false? styles.inputHolder : styles.inputTextError}>
				<TextInput  
					defaultValue={senderID}
					onChangeText={handlesenderID}
					placeholder="ID Number"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>
			<View style={isErrorsenderTel === false? styles.inputHolder : styles.inputTextError}>
				<TextInput 
					defaultValue={senderTel}
					onChangeText={handlesenderTel} 
					placeholder="Mobile Number"
					placeholderTextColor="black"
					style={styles.inputText}
				/>	
			</View>
			{isLoadingLocation === true?
				<View style={styles.locationHolder}>
					<TouchableOpacity style={styles.location}>
						<Text style={styles.btnText}>Loading...</Text>
					</TouchableOpacity>	
				</View>:
				<View style={styles.locationHolder}>
					<TouchableOpacity style={issenderLocation === false? styles.locationDisabled : styles.location} onPress={()=>handleModal('Sender')}>
						<Text style={styles.btnText}>{senderLocation}</Text>
					</TouchableOpacity>	
				</View>}
			<View  style={styles.text}><Text>Receiver Details</Text></View>
			<View style={isErrorreceiverName === false? styles.inputHolder : styles.inputTextError}>
				<TextInput 
					defaultValue={receiverName}
					onChangeText={handlereceiverName} 
					placeholder="Full Name"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>						
			<View style={isErrorreceiverID === false? styles.inputHolder : styles.inputTextError}>
				<TextInput 
					defaultValue={receiverID}
					onChangeText={handlereceiverID} 
					placeholder="ID Number"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>						
			<View style={isErrorreceiverTel === false? styles.inputHolder : styles.inputTextError}>
			<TextInput 
				defaultValue={receiverTel}
				onChangeText={handlereceiverTel} 
				placeholder="Mobile Number"
				placeholderTextColor="black"
				style={styles.inputText}
			/>	
			</View>	
			{isLoadingLocation === true?
				<View style={styles.locationHolder}>
					<TouchableOpacity style={styles.location}>
						<Text style={styles.btnText}>Loading...</Text>
					</TouchableOpacity>	
				</View>:
				<View style={styles.locationHolder}>
					<TouchableOpacity style={isreceiverLocation === false? styles.locationDisabled : styles.location} onPress={()=>handleModal('Receiver')}>
						<Text style={styles.btnText}>{senderLocation}</Text>
					</TouchableOpacity>	
				</View>}
			<View  style={styles.text}><Text>Parcel Details</Text></View>
			<View style={isErrorparcelCost === false? styles.inputHolder : styles.inputTextError}>
				<TextInput 
					defaultValue={parcelCost}
					onChangeText={handleparcelCost} 
					placeholder="Parcel Cost"
					placeholderTextColor="black"
					style={styles.inputText}
				/>
			</View>	
			{ isLoadingCatergory === true?					
			<View style={styles.locationHolder}>
				<TouchableOpacity style={styles.location}>
					<Text style={styles.btnText}>Loading...</Text>
				</TouchableOpacity>	
			</View>:						
			<View style={styles.locationHolder}>
				<TouchableOpacity style={isparcelCatergory === false? styles.locationDisabled : styles.location} onPress={()=>handleModal('Catergory')}>
					<Text style={styles.btnText}>{parcelCatergory}</Text>
				</TouchableOpacity>	
			</View>}	
			<View style={styles.submitBtn}>				
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>REGISTER PARCEL</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>)