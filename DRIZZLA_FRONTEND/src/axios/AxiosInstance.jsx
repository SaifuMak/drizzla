import axios from 'axios';

const Axiosinstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
//   baseURL : 'https://app.cashplus.sc/',
//   withCredentials: true, // Allows cookies to be sent with requests
});



export default Axiosinstance;