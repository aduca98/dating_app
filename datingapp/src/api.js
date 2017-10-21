import axios from 'axios';
import { AsyncStorage } from 'react-native';

axios.defaults.baseURL = "https://b75b9a56.ngrok.io";

export default class API {

    static async createUser(data) {
        return await axios.post(`/api/create-user`, data);
    }

    static async getMyInfo() {
        const jwt = await API.getJwt();
        return await axios.get(`/api/my-info`, { 
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer: ${jwt}`
            }
        });
    }

    static async addDescriptions(data) {
        const jwt = await API.getJwt();
        return await axios.post(`/api/add-descriptions`, data, { 
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer: ${jwt}`
            }
        });
    }

    static async storeJwt(jwt) {
        try {
            await AsyncStorage.setItem('@jwt', jwt);
            return true;
        } catch(e) {
            return e;
        }
    }

    static async getJwt() {
        const jwt = await AsyncStorage.getItem('@jwt');
        return jwt;
    }

}