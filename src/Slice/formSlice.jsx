import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const savedForm = localStorage.getItem("contactForm");
if (savedForm) {
  Object.assign(initialState, JSON.parse(savedForm));
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      localStorage.setItem("contactform", JSON.stringify(state));
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.subject = "";
      state.message = "";
      localStorage.removeItem("contactForm");
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
