const Ingredient = ({ingredient}) => {
    return (
        <div className="ingredient">
            <span>
                {ingredient.name}
            </span>
        </div>
    )
}

export default Ingredient;
