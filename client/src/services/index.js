import axios from 'axios';

const API = axios.create({
    baseURL: 'https://yoteorder-server.herokuapp.com/'
    //baseURL: 'http://localhost:3001/'
})


export default API;