import {CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../actions";

const initialState = {
    error: null,
    isLoading: false,
    order: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                isLoading: false,
            }
        case CREATE_ORDER_ERROR:
            return {
                ...state,
                error: true,
                isLoading: false,
            }
        default:
            return state;
    }
}
