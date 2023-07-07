import './App.css';
import IngredientsList from "./components/IngredientsList";
import BurgerConstructor from "./components/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addIngredients} from "./services/actions";

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.isLoading);

    useEffect(() => {
        dispatch(addIngredients());
    }, [])


  return (
      <>
          {isLoading
              ? <div>Loading</div>
              : <div className="App">
              <IngredientsList/>
              <BurgerConstructor/>
          </div>}
      </>
);
}

export default App;
