
export const ORDER_REQUEST__SUCCESS = 'ORDER_REQUEST__SUCCESS';
export const ORDER_REQUEST__LOADING = 'ORDER_REQUEST__LOADING';
export const ORDER_REQUEST__FAILURE = 'ORDER_REQUEST__FAILURE';

const orderBurger = (ingredientsIds) => {
    return fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ ingredients: ingredientsIds }),
    })
        .then(res => res.ok ? res.json() : Promise.reject(res.json()))
}


export const makeOrder = (ingredientsIds) => (dispatch) => {
    dispatch({ type: ORDER_REQUEST__LOADING })
    orderBurger(ingredientsIds)
        .then(res => {
            dispatch({ type: ORDER_REQUEST__SUCCESS, payload: res})
        })
        .catch(() => {
            dispatch({type: ORDER_REQUEST__FAILURE})
        })
}
