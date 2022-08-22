import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {response: ''},
  reducers: {
    authSucess(state, action) {
      const {payload} = action;
      return {
        ...state,
        response: payload == null ? payload : payload.data,
      };
    },
  },
});

export const {authSucess} = authSlice.actions;

export default authSlice.reducer;
