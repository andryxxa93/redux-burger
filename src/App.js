import './App.css';
import IngredientsList from "./components/IngredientsList";
import BurgerConstructor from "./components/BurgerConstructor";
import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState([]);
    const [addedIngredients, setAddedIngredients] = useState([]);

    useEffect(() => {
        fetch('https://norma.nomoreparties.space/api/ingredients')
            .then(res => res.ok ? res.json() : Promise.reject(res.json()))
            .then(res => setData(res.data));
    }, []);

    const addHandler = (ingredient) => {
        setAddedIngredients(prev => [...prev, ingredient])
    }

    const deleteHandler = (ingredient) => {
        setAddedIngredients(prev => prev.filter(({ _id }) => _id !== ingredient._id))
    }


  return (
        <div className="App">
            <IngredientsList data={data} onAdd={addHandler} />
            <BurgerConstructor onDelete={deleteHandler} data={addedIngredients} />
            <button>Create Order</button>
        </div>
);
}

export default App;
