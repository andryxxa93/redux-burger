const BURGER_API_URL = "https://norma.nomoreparties.space/api";

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then(checkReponse)
        .then((data) => {
            if (data?.success) return data.data;
            return Promise.reject(data);
        });
};

export const orderBurger = (data) => {
    return fetch(`${BURGER_API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            ingredients: data,
        }),
    })
        .then(checkReponse)
        .then((data) => {
            if (data?.success) return data;
            return Promise.reject(data);
        });
};
