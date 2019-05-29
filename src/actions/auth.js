import axios from 'axios';
import * as types from '../consts';

export const authSignin = (data) => ( dispatch) => axios.post(`http://localhost:${types.SERVER_PORT}/auth/signin`,{data},{timeout: 45000})
 .then( res => {
   dispatch({
            type: types.AUTH_SIGNIN,
            payload: res.data
         });
   })
 .catch( err=>{
    dispatch({
            type: types.AUTH_SIGNIN,
            payload: error
         });
   
 });