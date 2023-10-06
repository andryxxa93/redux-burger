import Ingredient from "./Ingredient";
import {useDispatch, useSelector} from "react-redux";
import {getConstructorIngredients} from "../services/ingredients/selectors";
import {deleteIngredient} from "../services/ingredients/actions";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const data = useSelector(getConstructorIngredients);

    const onDelete = ({uniqId}) => {
        dispatch(deleteIngredient(uniqId));
    }

    return (
        <div className="container">
            <h2>Burger Constructor</h2>
            {data.map(ingredient => <Ingredient onClick={onDelete} key={ingredient.uniqId} ingredient={ingredient}/>)}
        </div>
    )
}

export default BurgerConstructor;
