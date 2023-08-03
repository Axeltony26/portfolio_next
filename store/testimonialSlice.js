import { createSlice } from '@reduxjs/toolkit';

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: [
    {
      id: 1,
      name: "Ange Olivier",
      content: "J'ai eu la chance de collaborer avec Tony sur plusieurs projets de développement web et je dois dire que son expertise technique et sa créativité ont été des atouts majeurs",
    },
    {
      id: 2,
      name: "Gabin",
      content: "Travailler avec Axel a été une expérience exceptionnelle. Sa maîtrise des langages de programmation et sa capacité à résoudre les problèmes complexes sont remarquables",
    },
  ],
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
    deleteTestimonial: (state, action) => {
      return state.filter((testimonial) => testimonial.id !== action.payload);
    },
    updateTestimonial: (state, action) => {
      const { id, name, content } = action.payload;
      const index = state.findIndex((testimonial) => testimonial.id === id);
      if (index !== -1) {
        state[index].name = name;
        state[index].content = content;
      }
    },
  },
});

export const { addTestimonial, deleteTestimonial, updateTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
