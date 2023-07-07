import Ingredient from "./Ingredient";
import {useDispatch, useSelector} from "react-redux";
import {addIngredient} from "../services/constructor/reducer";

const IngredientsList = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.ingredients.ingredients);

    const onAdd = (ingredient) => {
        dispatch(addIngredient({...ingredient, id: Math.random()}));
    }

    if (!ingredients?.length) return null;

    return (
        <div className="container">
            <h2>Ingredients List</h2>
            {ingredients.map(ingredient => <Ingredient onClick={onAdd} key={ingredient._id} ingredient={ingredient}/>)}
        </div>
    )
}

export default IngredientsList;
