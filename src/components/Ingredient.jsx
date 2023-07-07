
const Ingredient = ({ingredient, onClick}) => {

    const onClickHandler = () => {
        onClick(ingredient);
    }

    return (
        <div onClick={onClickHandler} className="ingredient">
            <span>
                {ingredient.name}
            </span>
        </div>
    )
}

export default Ingredient;
