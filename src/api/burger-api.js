const BURGER_API_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchIngredients = () => {
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then(checkResponse)
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
        .then(checkResponse)
        .then((data) => {
            if (data?.success) return data;
            return Promise.reject(data);
        });
};
