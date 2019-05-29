import React, {Component} from 'react';
import {Modal, Text,StyleSheet,Button,SectionList,TouchableHighlight, View, Alert} from 'react-native';

export default class Test extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.root}>
        


        <TouchableHighlight
        	style={styles.btn}	
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
         <Button 
         	onPress={() => {
	            this.setModalVisible(true);
	          }}
         	title="CLICK HERE!! SHOW MODAL"
         	/>
         	<SectionList
				  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
				  renderSectionHeader={({section: {title}}) => (
				    <Text style={{fontWeight: 'bold'}}>{title}</Text>
				  )}
				  sections={[
				    {title: 'Title1', data: ['item1', 'item2']},
				    {title: 'Title2', data: ['item3', 'item4']},
				    {title: 'Title3', data: ['item5', 'item6']},
				  ]}
				  keyExtractor={(item, index) => item + index}
				/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	root:{
		backgroundColor:'blue',
		alignItems:'center',
		justifyContent:'center',
		flex:1,
		marginTop: 22		
	},
	btn:{
		backgroundColor:'#fff'
	},
});
