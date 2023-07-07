import './App.css';
import IngredientsList from "./components/IngredientsList";
import BurgerConstructor from "./components/BurgerConstructor";
import {data} from "./data";


function App() {
  return (
      <>
        <div className="App">
          <IngredientsList data={data}/>
          <BurgerConstructor data={data}/>
        </div>
        <button>Create Order</button>
      </>
);
}

export default App;
