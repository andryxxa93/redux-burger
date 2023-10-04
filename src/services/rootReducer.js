import {combineReducers} from "redux";
import {reducer as constructorReducer} from "./constructor/reducer";
import {reducer as mainReducer} from "./reducer";

export const rootReducer = combineReducers({
    constructor: constructorReducer,
    main: mainReducer,
})
