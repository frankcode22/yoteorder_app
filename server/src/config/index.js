
const dotenv = require('dotenv');

// const { parsed } = dotenv.config();
// export const PORT = process.env.PORT || parsed.PORT;

// export const baseURL = `http://localhost:${PORT}`;


const { parsed } = dotenv.config();

 const PORT = process.env.PORT || parsed.PORT;

//export const baseURL = 'https://yoteorder-server.herokuapp.com';
 const baseURL = 'http://localhost:8080';




