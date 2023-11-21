import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import carttSlice from "./slices/carttSlice";


const store = configureStore({
    reducer:{
         wishListReducer:wishListSlice,
         cartReducer:carttSlice
    }
})
export default store