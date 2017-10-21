import axios from 'axios';

axios.defaults.baseURL = "https://b75b9a56.ngrok.io";

export default class API {
    static async createUser(data) {
        return await axios.post(`/api/create-user`, data);
    }
    static async addDescriptions(data) {
        return await axios.post(`/api/add-decriptions`, data);
    }
}