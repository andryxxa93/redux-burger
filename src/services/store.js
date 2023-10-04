import reducer from './ingredientSlice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer,
})
