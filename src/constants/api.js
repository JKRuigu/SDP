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


class ParcelApi{
  constructor(){
    this.path = '/api/parcels';
  }

  async fetchParcels(token){
    try{
      const { data } = await axios.get(`${this.path}/login`,{authorization:`Brear ${token}`});
      return data;
    }catch(e){
      throw e;
    }
  }
}


export const ParcelsApi = new ParcelApi();