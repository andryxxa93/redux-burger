import {fetchIngredients, orderBurger} from "../api/burger-api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT, payload: ingredient
})

export const deleteIngredient = (ingredient) => ({
    type: DELETE_INGREDIENT, payload: ingredient
})

export const getIngredients = () => (dispatch) => {
    dispatch({type: GET_INGREDIENTS_REQUEST});
    return fetchIngredients()
        .then(res => dispatch({type: GET_INGREDIENTS_SUCCESS, payload: res}))
        .catch(error => dispatch({type: GET_INGREDIENTS_ERROR, payload: error}))
}

export const createOrder = (ingredients) => (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST})
    return orderBurger(ingredients)
        .then(res => {
            return dispatch({type: CREATE_ORDER_SUCCESS, payload: res.order})
        })
        .catch(error => dispatch({ type: CREATE_ORDER_ERROR }))
}
