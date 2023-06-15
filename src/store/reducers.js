import { combineReducers } from 'redux';
import { authSlice } from '../features/auth/slice/AuthSlice';
import { authApi } from '../features/auth/api/authApi';

export default combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
});
