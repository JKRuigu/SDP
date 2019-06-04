import React,{Component} from 'react';
import {Modal,Text,View,TouchableHighlight,Button,TouchableOpacity,StatusBar,ActivityIndicator } from 'react-native';
import ReceiveSubmitForm from '../screens/receive/components/SubmitForm';
import HandOverSubmitForm from '../screens/handover/components/SubmitForm';

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
	    {isLoading === true?
		        <View style={{flex:1,backgroundColor:"blue",alignItems:'center',justifyContent:'center'}}>
			          <StatusBar
			            backgroundColor="blue"
			            barStyle="light-content"
			          />
			          <ActivityIndicator
			            size="large"
			            color='#fff'
			          />
			          <Text style={{color:'#fff'}}>Submit... Please Wait</Text>
		         </View>:
	     	<View style={styles.modal}>            
			    <TouchableHighlight
		        	style={styles.closeBtn}	
			        onPress={handleModal}
			       >
		          <Text style={styles.closeBtnText}>X</Text>
			    </TouchableHighlight>
		    	<View style={styles.modalTitleHolder}><Text style={styles.modalTitleText}>{title}</Text></View>
		    {type === 'Receive'?	
		    		    <ReceiveSubmitForm 
	    		    		styles={styles}
	    		    		handleSubmit={handleSubmit}
	    		    		item={item}
	    		    		/>:
		    		    <HandOverSubmitForm 
	    		    		styles={styles}
	    		    		handleSubmit={handleSubmit}
	    		    		item={item}
		    		    />}
		    </View>}
		</Modal>
	</View>)
