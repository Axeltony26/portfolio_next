// Importez configureStore depuis @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import testimonialReducer from './testimonialSlice';

// Créez le store Redux en utilisant configureStore
const store = configureStore({
  reducer: {
    testimonials: testimonialReducer,
  },
});

// Exportez le store pour pouvoir l'utiliser dans votre application
export default store;
