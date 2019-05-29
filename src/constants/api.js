import axios from 'axios';
import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS === 'ios') {
  url = 'http://10.0.3.2:8000';
} else {
  // url = 'http://localhost:8000';
  url = 'http://10.0.1.1:8000';
}

axios.defaults.baseURL = url;


class UserApi {
  constructor() {
    this.path = '/auth';
    this.pathFetch='/parcels/fetch/hdjhdj'
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/signin`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async fetchData() {
    try {
      const { data } = await axios.get(this.pathFetch);
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserApi();
