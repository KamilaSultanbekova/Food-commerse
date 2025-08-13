import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice'
import BeveragesReducer from './beveragesSlice'
import FruitReducer from './fruitSlice'
import favoritesReducer from "./favoritesSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
    reducer: {
        form: formReducer,
        beveragesfilter: BeveragesReducer,
        fruitsfilter: FruitReducer,
        favorites: favoritesReducer,
        cart: cartReducer,

    }
})