import { configureStore } from '@reduxjs/toolkit';
import testimonialReducer from './testimonialSlice';


const store = configureStore({
  reducer: {
    testimonials: testimonialReducer,
  },
});

export default store;
