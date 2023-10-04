import Ingredient from "./Ingredient";

const IngredientsList = ({data, onAdd}) => {
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
