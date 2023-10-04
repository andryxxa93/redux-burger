import Ingredient from "./Ingredient";
import {useContext} from "react";
import {ConstructorContext} from "../App";

const BurgerConstructor = () => {

    const {data, onDelete} = useContext(ConstructorContext)

    return (
        <div className="container">
            <h2>Burger Constructor</h2>
            {data.map(ingredient => <Ingredient onClick={onDelete} key={ingredient.uniqId} ingredient={ingredient}/>)}
        </div>
    )
}

export default BurgerConstructor;
