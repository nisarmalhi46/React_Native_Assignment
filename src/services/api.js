import axios from 'axios';
import * as util from '../utilities';
const create = (baseURL = util.constants.BASEURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 5000,
  });
  const signupUser = params => api.post('signup/url/here', params);
  const loginUser = params => api.post('login/url/here', params);
  return {
    signupUser,
    loginUser,
  };
};

export default {
  create,
};
