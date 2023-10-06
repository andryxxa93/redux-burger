import {combineReducers} from "redux";
import ingredientReducer from './ingredients/reducer';
import {configureStore} from "@reduxjs/toolkit";
import {customMiddleware} from "./middleware/middleware";

const rootReducer = combineReducers({
    ingredients: ingredientReducer
})

export const store = configureStore({
        reducer: rootReducer,
        // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleware()),
    }
)
