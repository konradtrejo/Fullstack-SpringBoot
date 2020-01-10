import axios from 'axios';
const API_URL = 'http://localhost:8080';


class DataService {
    retriveAllUsers(){
        return axios.get(`${API_URL}/users`);

    }
    userSave(name){
        return axios.post(`${API_URL}/saveUser`,name);
    }
}

export default new DataService();

