import { configureStore } from '@reduxjs/toolkit';
import studiesReducer from './studiesRedux';

const store = configureStore({
  reducer: {
    list: studiesReducer,
  },
});

export default store;
