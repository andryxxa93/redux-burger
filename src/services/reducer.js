import {
    ADD_INGREDIENT, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS,
    DELETE_INGREDIENT,
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS
} from "./actions";

const initialState = {
    ingredients: [],
    error: null,
    isLoading: false,
    constructorIngredients: [],
    order: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ingredients: action.payload,
            }
        case GET_INGREDIENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                order: action.payload,
            }
        case CREATE_ORDER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
