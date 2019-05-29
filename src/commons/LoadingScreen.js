import React from 'react';
import { ActivityIndicator, View,StatusBar } from 'react-native';
// import styles from './styles/LoadingScreen';

export default class LoadingScreen extends Component{
  render(){
     return(
        <View style={{flex:1,backgroundColor:"blue",alignItems:'center',justifyContent:'center'}}>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
          <ActivityIndicator
            size="large"
            color='gray'
          />
        </View>
    )
  }
}

