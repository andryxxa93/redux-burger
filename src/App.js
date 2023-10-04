import './App.css';
import IngredientsList from "./components/IngredientsList";
import BurgerConstructor from "./components/BurgerConstructor";
import {createContext, useEffect, useMemo, useState} from "react";
import {nanoid} from "nanoid";

export const IngredientContext = createContext({});
export const ConstructorContext = createContext({});

function App() {
    const [data, setData] = useState([]);
    const [addedIngredients, setAddedIngredients] = useState([]);

    useEffect(() => {
        fetch('https://norma.nomoreparties.space/api/ingredients')
            .then(res => res.ok ? res.json() : Promise.reject(res.json()))
            .then(res => setData(res.data));
    }, []);

    const addHandler = (ingredient) => {
        setAddedIngredients(prev => [...prev, { ...ingredient, uniqId: nanoid() }])
    }

    const deleteHandler = (ingredient) => {
        setAddedIngredients(addedIngredients.filter(({ uniqId }) => uniqId !== ingredient.uniqId))
    }

    const ingredientsContextValue = useMemo(() => ({
        data, onAdd: addHandler
    }), [data]);

    const constructorContextValue = useMemo(() => ({
        onDelete: deleteHandler, data: addedIngredients
    }), [addedIngredients, deleteHandler]);

  return (
        <div className="App">
            <IngredientContext.Provider value={ingredientsContextValue}>
                <IngredientsList />
            </IngredientContext.Provider>
            <ConstructorContext.Provider value={constructorContextValue}>
                <BurgerConstructor />
            </ConstructorContext.Provider>
            <button>Create Order</button>
        </div>
);
}

export default App;
