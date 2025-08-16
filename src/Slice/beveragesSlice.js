import { createSlice } from "@reduxjs/toolkit";
import { Beverages } from "../Data/Data";

const initialState = {
  products: Beverages,
  filteredProducts: Beverages,
  minPrice: 0,
  maxPrice: Math.max(...Beverages.map(p => Number(p.price.replace("$", ""))))
};

const beveragesSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      state.minPrice = min;
      state.maxPrice = max;
      state.filteredProducts = state.products.filter(
        (p) => {
          const priceValue = Number(p.price.replace("$", ""));
          return priceValue >= min && priceValue <= max;
        }
      );
    },
    addNewProductToFilter: (state, action) => {
      state.filteredProducts.unshift(action.payload);
    },
    updateProductInFilter: (state, action) => {
      const { _id, updatedData } = action.payload;
      const index = state.filteredProducts.findIndex((item) => item._id === _id);
      if (index !== -1) {
        state.filteredProducts[index] = { ...state.filteredProducts[index], ...updatedData };
      }
    },
  },
});

export const { setPriceRange, updateProductInFilter, addNewProductToFilter } = beveragesSlice.actions;
export default beveragesSlice.reducer;