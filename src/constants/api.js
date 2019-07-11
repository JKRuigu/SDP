import axios from 'axios';
import { Platform,Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


// const url = AsyncStorage.getItem('url');

// Alert.alert(JSON.parse(url)); 
// Alert.alert(AsyncStorage.getItem('url')); 
// let url;

// if (Platform.OS === 'ios') {
//   url = 'http://10.0.2.2:8000';
// } else {
//   url = 'http://localhost:8000';
//   // url = 'http://35.188.138.47';    
// }

// axios.defaults.baseURL = url


class UserApi {
  constructor() {
    this.path = '/api/user';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${args.url}${this.path}/login`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserApi();


class GeneralsApi{
  constructor(){
    this.path = '/api/parcel';
    this.catergoryPath ='/api/catergory';
    this.locationPath ='/api/location';
    this.vehiclePath ='/api/vehicle';
  }

  async registerParcels({token,partnerId,mydata,url}){
    let header = `Bearer ${token}`;
    Alert.alert(url);
    try{
      const { data } = await axios.post(`${url}${this.path}/${partnerId}`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchParcels({token,partnerId,url}){
  	// Alert.alert(url)
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${url}${this.path}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchCatergory({token,partnerId,url}){
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${url}${this.catergoryPath}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchLocation({token,partnerId,url}){
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${url}${this.locationPath}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchVehicle({token,partnerId,url}){
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${url}${this.vehiclePath}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async sendParcels({token,partnerId,mydata,url}){
    let header = `Bearer ${token}`;
    try{ 
      const { data } = await axios.patch(`${url}${this.path}/${partnerId}/send`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async receiveParcels({token,partnerId,mydata,url}){
    let header = `Bearer ${token}`;
    try{ 
      const { data } = await axios.patch(`${url}${this.path}/${partnerId}/receive`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async handOverParcels({token,partnerId,mydata,url}){
    // const { deliveryReceiver } = mydata;
    // Alert.alert(deliveryReceiver);
    let header = `Bearer ${token}`;
    try{ 
      const { data } = await axios.patch(`${url}${this.path}/${partnerId}/handover`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }

}


export const GeneralApi = new GeneralsApi();



