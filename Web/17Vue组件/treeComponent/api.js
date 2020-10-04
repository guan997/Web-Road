import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:33333';

export const getTreeList = () => {
    return axios.get('/getTreeList');
}