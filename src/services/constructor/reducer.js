import {ADD_INGREDIENT, DELETE_INGREDIENT} from "../actions";

const initialState = {
    error: null,
    isLoading: false,
    constructorIngredients: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            const constructorIngredients = state.constructorIngredients?.length
                ? [...state.constructorIngredients, action.payload] : [action.payload]
            return {
                ...state,
                constructorIngredients,
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                constructorIngredients:
                    state.constructorIngredients.filter(ingredient => ingredient.id !== action.payload)
            }
        default:
            return state;
    }
}
