import axios from 'axios';

const API = axios.create({
  //  baseURL: 'https://yoteorder-server.herokuapp.com/'
   // baseURL: 'http://localhost:3001/'

 // baseURL: 'http://localhost:8080/api/'

   baseURL: 'http://backend.patamtaani.com/api/'

   


})


export default API;