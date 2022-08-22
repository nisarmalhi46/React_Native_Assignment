import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RootContainer from './RootContainer';
import axios from 'axios';
import store, {persistor} from './store/storeConfig';
import {PersistGate} from 'redux-persist/integration/react';
import * as util from './utilities';

// create our store

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor(props) {
    super(props);
    // Override Axios Environment for Usage throughout
    axios.defaults.baseURL = util.constants.BASEURL;
    axios.interceptors.request.use(
      config => {
        if (!config.headers.Authorization) {
          if (util.Interceptor.getToken()) {
            config.headers.Authorization = `Bearer ${util.Interceptor.getToken()}`;
          }
        }
        return config;
      },
      error => Promise.reject(error),
    );
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
