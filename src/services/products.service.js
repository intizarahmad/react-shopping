import axios from '../utils/config';
import endPoint from '../utils/endpoints';

export const fetchProductList = (page) => {
    return axios
      .get(endPoint.getProductsList(page))
      .then(response => {
            return Promise.resolve(response.data);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };