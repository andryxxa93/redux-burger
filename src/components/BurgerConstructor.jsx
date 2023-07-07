import Ingredient from "./Ingredient";

const BurgerConstructor = ({data}) => {
    return (
        <div className="container">
            <h2>Burger Constructor</h2>
            {data.map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient}/>)}
        </div>
    )
}

export default BurgerConstructor;
