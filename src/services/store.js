import {configureStore} from '@reduxjs/toolkit'
import ingredientsReducer from "./ingredients/reducer";
import constructorReducer from "./constructor/reducer";

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        constructor: constructorReducer,
    }
}
);
