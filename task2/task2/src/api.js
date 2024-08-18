// src/api.js
import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzOTYyNzE1LCJpYXQiOjE3MjM5NjI0MTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM2ZjEzYThjLTU3NjctNDEzNy1iMTZmLWRjZTJhY2VjMzU4ZiIsInN1YiI6IjIyNjk1QTA1MjhAbWl0cy5hYy5pbiJ9LCJjb21wYW55TmFtZSI6Ik1hZGFuYXBhbGxlIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IGFuZCBTY2llbmNlIiwiY2xpZW50SUQiOiJjNmYxM2E4Yy01NzY3LTQxMzctYjE2Zi1kY2UyYWNlYzM1OGYiLCJjbGllbnRTZWNyZXQiOiJzaVpUelpwRkJTa3JtQ3hrIiwib3duZXJOYW1lIjoiUnVkcmEiLCJvd25lckVtYWlsIjoiMjI2OTVBMDUyOEBtaXRzLmFjLmluIiwicm9sbE5vIjoiMjI2OTVBMDUyOCJ9.yVJNeUoWco3QCA3UDn3upf60pwKFNldV5ZTsx1Isz7I';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

export const fetchProducts = () => {
  return axiosInstance.get('/');
};
