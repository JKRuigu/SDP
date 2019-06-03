import axios from 'axios';
import { Platform } from 'react-native';

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

  async fetchParcels({token,partnerId}){
    try{
      const { data } = await axios.get(`${this.path}/AOSA9Z6W6QM`,{header:{Authorization:token}});
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchCatergory({token,partnerId}){
    try{
      const { data } = await axios.get(`${this.catergoryPath}/AOSA9Z6W6QM`);
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchLocation({token,partnerId}){
    try{
      const { data } = await axios.get(`${this.locationPath}/AOSA9Z6W6QM`);
      return data;
    }catch(e){
      throw e;
    }
  }
  async fetchVehicle({token,partnerId}){
    try{
      const { data } = await axios.get(`${this.vehiclePath}/AOSA9Z6W6QM`);
      return data;
    }catch(e){
      throw e;
    }
  }


}


export const GeneralApi = new GeneralsApi();