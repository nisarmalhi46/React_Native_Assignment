import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import AuthReducer from './slices/authSlice';
import UiReducer from './slices/uiSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['signup'],
};
const rootReducer = combineReducers({
  auth: AuthReducer,
  ui: UiReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// if (module.hot) {
//   module.hot.accept(() => {
//     const nextRootReducer = require('./').reducers;
//     store.replaceReducer(nextRootReducer);

//     const newYieldedSagas = require('../Sagas').default;
//     sagasManager.cancel();
//     sagasManager.done.then(() => {
//       sagasManager = sagaMiddleware(newYieldedSagas);
//     });
//   });
// }

// return store;
export const persistor = persistStore(store);
export default store;
