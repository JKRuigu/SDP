import React,{Component} from 'react';
import {Modal,Text,View,TouchableHighlight,Button,TouchableOpacity,StatusBar,ActivityIndicator } from 'react-native';
import ReceiveSubmitForm from './SubmitForm';

export default ({
	styles,
	handleSubmit,
	item,
	type,
	title,
	isLoading,
	handleModal,
	show
})=>(
	<View>
		<Modal
	      animationType="slide"
	      transparent={false}          
	      visible={show}
	    >
	     	<View style={styles.modal}>            
			   {isLoading === true ?
			    <TouchableHighlight
		        	style={styles.closeBtn}
			       >
		          <Text style={styles.closeBtnText}>X</Text>
			    </TouchableHighlight>:
			    <TouchableHighlight
		        	style={styles.closeBtn}	
			        onPress={handleModal}
			       >
		          <Text style={styles.closeBtnText}>X</Text>
			    </TouchableHighlight>}
		    	<View style={styles.modalTitleHolder}><Text style={styles.modalTitleText}>{title}</Text></View>	
	    		    <ReceiveSubmitForm 
	    		    		styles={styles}
	    		    		handleSubmit={handleSubmit}
	    		    		item={item}
	    		    		isLoading={isLoading}
    		    		/>
		    </View>
		</Modal>
	</View>)
