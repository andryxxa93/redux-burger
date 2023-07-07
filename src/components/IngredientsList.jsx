import Ingredient from "./Ingredient";

const IngredientsList = ({data}) => {
    return (
        <div className="container">
            <h2>Ingredients List</h2>
            {data.map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient}/>)}
        </div>
    )
}

export default IngredientsList;
