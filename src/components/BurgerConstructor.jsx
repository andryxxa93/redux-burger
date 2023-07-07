import Ingredient from "./Ingredient";
import {useDispatch, useSelector} from "react-redux";
import {createOrder, deleteIngredient} from "../services/actions";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const orderNumber = useSelector(state => state.order.order?.order.number);
    const ingredients = useSelector(state => state.constructor.constructorIngredients);


    const onDelete = (ingredient) => {
        dispatch(deleteIngredient(ingredient.id));
    }

    const createOrderHandler = (e) => {
        dispatch(createOrder(ingredients));
    }

    return (
        <>
            <div className="container">
                <h2>Burger Constructor</h2>
                {ingredients?.length
                    ? ingredients.map(ingredient => <Ingredient onClick={onDelete} key={ingredient._id} ingredient={ingredient}/>) : null}
            </div>
            <button onClick={createOrderHandler}>Create Order</button>
            {orderNumber && <h3>{orderNumber}</h3>}
        </>
)
}

export default BurgerConstructor;
