import axios from 'axios';
import { Platform,Alert } from 'react-native';

let url;

if (Platform.OS === 'ios') {
  url = 'http://10.0.2.2:8000';
} else {
  url = 'http://localhost:8000';
}

axios.defaults.baseURL = url;


class UserApi {
  constructor() {
    this.path = '/api/user';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/login`, args);
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

  async registerParcels({token,partnerId,mydata}){
    let header = `Bearer ${token}`;
    // Alert.alert(header);
    try{
      const { data } = await axios.post(`/${partnerId}`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchParcels({token,partnerId}){
    // Alert.alert(partnerId)
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchCatergory({token,partnerId}){
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${this.catergoryPath}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchLocation({token,partnerId}){
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${this.locationPath}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchVehicle({token,partnerId}){
    let header = `Bearer ${token}`;
    try{
      const { data } = await axios.get(`${this.vehiclePath}/${partnerId}`,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async sendParcels({token,partnerId,mydata}){
    let header = `Bearer ${token}`;
    try{ 
      const { data } = await axios.patch(`/${partnerId}/send`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async receiveParcels({token,partnerId,mydata}){
    let header = `Bearer ${token}`;
    try{ 
      const { data } = await axios.patch(`/${partnerId}/receive`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async handOverParcels({token,partnerId,mydata}){
    // const { deliveryReceiver } = mydata;
    // Alert.alert(deliveryReceiver);
    let header = `Bearer ${token}`;
    try{ 
      const { data } = await axios.patch(`/${partnerId}/handover`,mydata,{headers:{authorization:header}});
      return data;
    }catch(e){
      throw e;
    }
  }

}


export const GeneralApi = new GeneralsApi();



