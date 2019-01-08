import axios from 'axios';
import fetch from 'isomorphic-unfetch'

let http = axios.create({
  baseURL: 'https://cnodejs.org',
  // timeout: 5000,
});

export default http;
