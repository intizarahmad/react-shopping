import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://guarded-atoll-70329.herokuapp.com/'
});

export default instance;