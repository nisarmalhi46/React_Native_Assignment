import Api from '../../services/api';
import * as redux from '../index';
import * as util from '../../utilities';

const api = Api.create();

export const signUpUser = params => {
  return dispatch => {
    util.navigate('home');
    // dispatch(redux.slices.showLoader());
    // api
    //   .signupUser(params)
    //   .then(function (response) {
    //     let {data} = response;
    //     dispatch(redux.slices.hideLoader());
    //     if (data?.code == 0) {
    //       util.showAlert(data.message);
    //       util.navigate('loginScreen');
    //     }
    //     if (data?.code == 1 && data?.data == null) {
    //       util.showAlert(data.message);
    //     }
    //   })
    //   .catch(function (error) {
    //     util.showAlert('Something went wrong');
    //   });
  };
};
export const loginUser = params => {
  return dispatch => {
    // dispatch(redux.slices.showLoader());
    // api
    //   .loginUser(params)
    //   .then(function (response) {
    //     dispatch(redux.slices.authSucess(response));
    //     dispatch(redux.slices.hideLoader());
    //   })
    //   .catch(function (error) {
    //     util.showAlert('Something went wrong');
    //   });
    util.navigate('home');
  };
};
