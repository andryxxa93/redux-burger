import './App.css';
import IngredientsList from "./components/IngredientsList";
import BurgerConstructor from "./components/BurgerConstructor";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addIngredients, getIngredients} from "./services/ingredients/actions";
import {makeOrder} from "./services/order/actions";

function App() {
    const dispatch = useDispatch();
    const addedIngredients = useSelector(state => state.ingredients.constructorIngredients);

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);


    const onOrder = () => {
        const ids = addedIngredients.map(({_id}) => _id);
        dispatch(makeOrder(ids));
    }

  return (
        <div className="App">
                <IngredientsList />
                <BurgerConstructor />
            <button onClick={onOrder}>Create Order</button>
        </div>
);
}

export default App;
