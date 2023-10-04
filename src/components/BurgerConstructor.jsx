import Ingredient from "./Ingredient";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../services/actions";
import {getConstructorIngredients} from "../services/selectors";
import {deleteIngredient} from "../services/ingredientSlice";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(getConstructorIngredients);


    const onDelete = (ingredient) => {
        dispatch(deleteIngredient(ingredient.id));
    }

    const onOrder = () => {
        dispatch(createOrder(ingredients));
    }

    return (
        <>
            <div className="container">
                <h2>Burger Constructor</h2>
                {ingredients && ingredients.map(ingredient => <Ingredient onClick={onDelete} key={ingredient._id} ingredient={ingredient}/>)}
            </div>
        </>
)
}

export default BurgerConstructor;
