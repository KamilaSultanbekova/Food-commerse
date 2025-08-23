import { createSlice } from "@reduxjs/toolkit";
import { FruitsVegetables, Beverages } from "../Data/Data";

const allProducts = [...FruitsVegetables, ...Beverages];

const filterSearchSlice = createSlice({
  name: "filterSearch",
  initialState: {
    searchQuery: "",
    filteredProducts: allProducts,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterProducts: (state) => {
      const query = state.searchQuery.trim().toLowerCase();

      if (!query) {
        state.filteredProducts = allProducts;
      } else {
        state.filteredProducts = allProducts.filter((p) =>
          (p.name || "").toLowerCase().includes(query)
        );
      }
    },
    resetFilter: (state) => {
      state.searchQuery = "";
      state.filteredProducts = allProducts;
    },
  },
});

export const { setSearchQuery, filterProducts, resetFilter } =
  filterSearchSlice.actions;

export default filterSearchSlice.reducer;
