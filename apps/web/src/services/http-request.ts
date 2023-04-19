import axios from 'axios';

const httpRequest = axios.create({});

httpRequest.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});

httpRequest.interceptors.response.use((response) => {
  return response;
}, (err) => {
  return Promise.reject(err);
});

export default httpRequest;
