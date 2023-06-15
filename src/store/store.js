import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducers from './reducers';

// logger middleware logs the actions and state, before
// and after the state changed for this certain action

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
