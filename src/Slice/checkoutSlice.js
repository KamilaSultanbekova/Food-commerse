import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    billingData: {},
    totalPrice: 0,
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        submitOrder: (state, action) => {
            state.billingData = action.payload.billingData;
            state.orderItems = action.payload.orderItems;
            state.totalPrice = action.payload.totalPrice;

            localStorage.setItem("billingData", JSON.stringify(state.billingData));
            localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
            localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        },
    },
});

export const { submitOrder } = checkoutSlice.actions;
export default checkoutSlice.reducer;