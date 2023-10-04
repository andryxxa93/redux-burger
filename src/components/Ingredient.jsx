const Ingredient = ({ingredient, onClick}) => {
    return (
        <div className="ingredient" onClick={() => onClick(ingredient)}>
            <span>
                {ingredient.name}
            </span>
        </div>
    )
}

export default Ingredient;
