import {ADD_INGREDIENT, DELETE_INGREDIENT} from "../actions";

const initialState = {
    ingredients: [],
    error: null,
    isLoading: false,
    constructorIngredients: [],
    order: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            const constructorIngredients = state.constructorIngredients?.length
                ? [...state.constructorIngredients, action.payload]
                : [action.payload]
            return {
                ...state,
                constructorIngredients,
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                constructorIngredients: state.constructorIngredients.filter(({id}) => id !== action.payload),
            }
        default:
            return state;
    }
}