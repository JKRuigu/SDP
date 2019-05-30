import React,{Component} from 'react';
import {Modal,Text,View,ScrollView,TouchableHighlight,TouchableOpacity } from 'react-native';


export default ({
	styles,
	isSelected,
	handleModal,
	items,
	catergory,
	handleSelect
})=>(
	<View>
		<Modal
	      animationType="slide"
	      transparent={false}          
	      visible={isSelected}
	      >
	        <View style={styles.modal}>            
		    <TouchableHighlight
	        	style={styles.closeBtn}	
		        onPress={handleModal}
		       >
	          <Text style={styles.closeBtnText}>X</Text>
		    </TouchableHighlight>
		    <View style={styles.modalTitleHolder}><Text style={styles.modalTitleText}>{catergory === 'Catergory'?`Select Parcel ${catergory}`:`Select ${catergory} Location`}</Text></View>
		   {
		   	catergory === 'Catergory'?
		   		<ScrollView>
		    	{items.map((item,i)=>(
		    		<View key={i}>
			    		<TouchableOpacity style={styles.itemHolder} onPress={()=>handleSelect(item)}>
			    			<Text style={styles.itemText}>{item.catergoryName}</Text>
				    		</TouchableOpacity>
			    		</View>))}
			    </ScrollView>:
			    <ScrollView>
			    	{items.map((item,i)=>(
			    		<View key={i}>
				    		<TouchableOpacity style={styles.itemHolder} onPress={()=>handleSelect(item)}>
				    			<Text style={styles.itemText}>{item.location}</Text>
				    		</TouchableOpacity>
			    		</View>))}
			    </ScrollView>
		   }		    
            </View>
		</Modal> 
	</View>
);
