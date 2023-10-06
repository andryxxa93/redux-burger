import {INGREDIENTS_REQUEST__FAILURE, INGREDIENTS_REQUEST__LOADING, INGREDIENTS_REQUEST__SUCCESS} from "./actions";

const initialState = {
    ingredients: [],
    isLoading: false,
    constructorIngredients: [],
    error: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INGREDIENTS_REQUEST__LOADING: {
            return { ...state, isLoading: true }
        }
        case INGREDIENTS_REQUEST__FAILURE: {
            return { ...state, ingredients: [], isLoading: false, error: true }
        }
        case INGREDIENTS_REQUEST__SUCCESS: {
            return { ...state, ingredients: action.payload, isLoading: false }
        }
        case 'ADD_INGREDIENT': {
            return {...state, constructorIngredients: [...state.constructorIngredients, action.payload]}
        }
        case 'DELETE_INGREDIENT': {
            return {...state, constructorIngredients: state.constructorIngredients.filter(({ uniqId }) => uniqId !== action.payload),}
        }
        default:
            return state;
    }
}
