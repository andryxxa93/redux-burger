import {GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../actions";

const initialState = {
    ingredients: [],
    error: null,
    isLoading: false,
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
                ingredients: action.payload,
                isLoading: false,
            }
        case GET_INGREDIENTS_ERROR:
            return {
                ...state,
                error: true,
                isLoading: false,
            }
        default:
            return state;
    }
}
