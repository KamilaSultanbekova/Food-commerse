import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("likedProducts")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const exists = state.find(item => item._id === product._id);
      let newState;
      if (exists) {
        newState = state.filter(item => item._id !== product._id);
      } else {
        newState = [...state, product];
      }
      localStorage.setItem("likedProducts", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { toggleLike } = favoritesSlice.actions;
export default favoritesSlice.reducer;
