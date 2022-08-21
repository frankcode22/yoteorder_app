import axios from 'axios';

const API = axios.create({
    baseURL: 'https://yoteorder-server.herokuapp.com/'
})


export default API;