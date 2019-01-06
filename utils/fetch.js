import axios from 'axios';
let http = axios.create({
  baseURL: 'https://cnodejs.org',
  // timeout: 5000,
});

export default http;
