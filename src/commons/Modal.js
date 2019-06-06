import React,{Component} from 'react';
import {Modal,Text,View,TouchableHighlight,Button,TouchableOpacity,StatusBar,ActivityIndicator } from 'react-native';
import ReceiveSubmitForm from '../screens/receive/components/SubmitForm';
import HandOverSubmitForm from '../screens/handover/components/SubmitForm';
import SendSubmitForm from '../screens/send/components/SubmitForm';

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
		    {type === 'Receive'?	
		    		    <ReceiveSubmitForm 
	    		    		styles={styles}
	    		    		handleSubmit={handleSubmit}
	    		    		item={item}
	    		    		isLoading={isLoading}
	    		    		/>:
	    	type === 'Receive'?
		    		    <HandOverSubmitForm 
	    		    		styles={styles}
	    		    		handleSubmit={handleSubmit}
	    		    		item={item}
	    		    		isLoading={isLoading}
		    		    />:
		    <SendSubmitForm		    	
		    		styles={styles}
		    		handleSubmit={handleSubmit}
		    		item={item}
		    		isLoading={isLoading} 
	    		/>}
		    </View>
		</Modal>
	</View>)
