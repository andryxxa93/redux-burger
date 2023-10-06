import {nanoid} from "nanoid";

export const INGREDIENTS_REQUEST__SUCCESS = 'INGREDIENTS_REQUEST__SUCCESS';
export const INGREDIENTS_REQUEST__LOADING = 'INGREDIENTS_REQUEST__LOADING';
export const INGREDIENTS_REQUEST__FAILURE = 'INGREDIENTS_REQUEST__FAILURE';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const addIngredients = (ingredients) => ({ type: INGREDIENTS_REQUEST__SUCCESS, payload: ingredients })
export const deleteIngredient = (uniqId) => ({ type: DELETE_INGREDIENT, payload: uniqId });
export const addIngredient = (ingredient) => ({type: ADD_INGREDIENT, payload: { ...ingredient, uniqId: nanoid() }})

export const getIngredients = () => (dispatch) => {
    dispatch({ type: INGREDIENTS_REQUEST__LOADING });
    fetch('https://norma.nomoreparties.space/api/ingredients')
        .then(res => res.ok ? res.json() : Promise.reject(res.json()))
        .then(res => dispatch(addIngredients(res.data)))
        .catch(() => dispatch({ type: INGREDIENTS_REQUEST__FAILURE }))
}
