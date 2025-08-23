import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice'
import BeveragesReducer from './beveragesSlice'
import FruitReducer from './fruitSlice'
import favoritesReducer from "./favoritesSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice"
import checkoutReducer from "./checkoutSlice"
import vendorReducer from "./vendorSlice"
import productReducer from './crudSlice';
import filterSearchReducer from './filtersearchSlice';
export const store = configureStore({
    reducer: {
        form: formReducer,
        beveragesfilter: BeveragesReducer,
        fruitsfilter: FruitReducer,
        favorites: favoritesReducer,
        cart: cartReducer,
        auth: authReducer,
        checkout: checkoutReducer,
        vendor: vendorReducer,
        products: productReducer,
        filterSearch: filterSearchReducer,

    }
})