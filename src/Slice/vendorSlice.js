import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: [], 
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    addVendor: (state, { payload }) => {
      state.vendors.push(payload);

      localStorage.setItem("vendors", JSON.stringify(state.vendors));
    },
  },
});

export const { addVendor } = vendorSlice.actions;
export default vendorSlice.reducer;
