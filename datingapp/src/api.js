import axios from 'axios';
import { AsyncStorage } from 'react-native';

axios.defaults.baseURL = "https://b75b9a56.ngrok.io";

export default class API {

    static async createUser(data) {
        return await axios.post(`/api/create-user`, data);
    }

    static async getMyInfo(fbId) {
        const jwt = await API.getJwt();
        return await axios.get(`/api/my-info`, { 
            params: {
                fbId: fbId
            },
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

    static async logout() {
        await AsyncStorage.removeItem('@jwt');
    }

    static async getMatches() {
        return true;
    }

    static async uploadFile(results) {
        const jwt = await API.getJwt();
        var data = new FormData();
        data.append('photo', {
            uri: results.uri,
            type: 'image',
            name: new Date().getTime() + "_" + Math.random() * 10000
        });

        return await axios.post(`/api/upload`, data, {
            headers: {
                'Authorization': `bearer: ${jwt}`
            }
        });

    }
}