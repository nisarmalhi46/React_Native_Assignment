import {showLoader, hideLoader} from './slices/uiSlice';
import {authSucess} from './slices/authSlice';
import {signUpUser, loginUser} from './actions/authActions';
export const slices = {
  showLoader,
  hideLoader,
  authSucess,
};
export const actions = {
  signUpUser,
  loginUser,
};
