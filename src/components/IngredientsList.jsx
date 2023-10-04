import Ingredient from "./Ingredient";
import {useContext} from "react";
import {IngredientContext} from "../App";

const IngredientsList = () => {

    const { data, onAdd } = useContext(IngredientContext);

    return (
        <div className="container">
            <h2>Ingredients List</h2>
            {data.map(ingredient => (
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
