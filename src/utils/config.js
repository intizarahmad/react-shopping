import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shopping-node.herokuapp.com/'
});

export default instance;