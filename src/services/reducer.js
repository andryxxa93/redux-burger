import {combineReducers} from "redux";
import {reducer as ingredientsReducer} from "./ingredients/reducer";
import {reducer as orderReducer} from "./order/reducer";
import {reducer as constructorReducer} from "./constructor/reducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    constructor: constructorReducer
})
