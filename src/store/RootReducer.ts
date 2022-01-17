import {configureStore} from '@reduxjs/toolkit';
import user from './reducers/UserReducer';
import app from './reducers/AppReducer';

const rootReducer = configureStore({
  reducer: {
    user,
    app
  },
});

export default rootReducer;
