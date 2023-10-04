import Ingredient from "./Ingredient";

const BurgerConstructor = ({data, onDelete}) => {
    return (
        <div className="container">
            <h2>Burger Constructor</h2>
            {data.map(ingredient => <Ingredient onClick={onDelete} key={ingredient._id} ingredient={ingredient}/>)}
        </div>
    )
}

export default BurgerConstructor;
