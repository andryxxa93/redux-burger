import Ingredient from "./Ingredient";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../services/ingredients/selectors";
import {addIngredient} from "../services/ingredients/actions";

const IngredientsList = () => {
    const dispatch = useDispatch();
    const data = useSelector(getIngredients);

    if (!data) return null;

    const onAdd = (ingredient) => {
        dispatch(addIngredient(ingredient));
    }

    return (
        <div className="container">
            <h2>Ingredients List</h2>
            {data?.map(ingredient => (
                <Ingredient
                    onClick={onAdd}
                    key={ingredient._id}
                    ingredient={ingredient}/>
                )
            )}
        </div>
    )
}

export default IngredientsList;
