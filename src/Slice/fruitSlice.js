import { createSlice } from "@reduxjs/toolkit";
import { FruitsVegetables } from "../Data/Data";

const initialState = {
  products: FruitsVegetables,
  filteredProducts: FruitsVegetables,
  minPrice: 0,
  maxPrice: Math.max(...FruitsVegetables.map(p => Number(p.price.replace("$", ""))))
};

const FruitsSlice = createSlice({
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
  },
});

export const { setPriceRange } = FruitsSlice.actions;
export default FruitsSlice.reducer;