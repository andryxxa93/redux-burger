import './App.css';
import IngredientsList from "./components/IngredientsList";
import BurgerConstructor from "./components/BurgerConstructor";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "./services/ingredientSlice";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);

  return (
      <>
        <div className="App">
          <IngredientsList />
          <BurgerConstructor />
        </div>
      </>
);
}

export default App;
