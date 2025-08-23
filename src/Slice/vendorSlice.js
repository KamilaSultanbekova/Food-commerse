import { createSlice } from "@reduxjs/toolkit";

const loadVendors = () => {
  try {
    const raw = localStorage.getItem("vendors");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveVendors = (vendors) => {
  localStorage.setItem("vendors", JSON.stringify(vendors));
};

const initialState = {
  vendors: loadVendors(), 
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    addVendor: (state, { payload }) => {
      const idx = state.vendors.findIndex((v) => v.userId === payload.userId);
      if (idx >= 0) {
        state.vendors[idx] = { ...state.vendors[idx], ...payload };
      } else {
        state.vendors.push(payload);
      }
      saveVendors(state.vendors);
    },
    removeVendor: (state, { payload: userId }) => {
      state.vendors = state.vendors.filter((v) => v.userId !== userId);
      saveVendors(state.vendors);
    },
    setVendors: (state, { payload }) => {
      state.vendors = payload || [];
      saveVendors(state.vendors);
    },
  },
});

export const { addVendor, removeVendor, setVendors } = vendorSlice.actions;

export const selectVendorByUser = (state, userId) =>
  state.vendor.vendors.find((v) => v.userId === userId);

export const selectIsVendor = (state, userId) =>
  !!selectVendorByUser(state, userId);

export default vendorSlice.reducer;
