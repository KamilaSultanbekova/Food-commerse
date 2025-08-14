import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("CartProducts")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const product = action.payload;
      const exists = state.find(item => item._id === product._id);
      let newState;
      if (exists) {
        newState = state.filter(item => item._id !== product._id);
      } else {
        newState = [...state, product];
      }
      localStorage.setItem("CartProducts", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;