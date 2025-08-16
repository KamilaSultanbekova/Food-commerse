import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('products')) || [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.unshift(action.payload);
      localStorage.setItem('products', JSON.stringify(state));
    },
    updateProduct: (state, action) => {
      const { _id, updatedData } = action.payload;
      const index = state.findIndex((item) => item._id === _id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
        localStorage.setItem('products', JSON.stringify(state));
      }
    },
    deleteProduct: (state, action) => {
      const newState = state.filter((item) => item._id !== action.payload);
      localStorage.setItem('products', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;