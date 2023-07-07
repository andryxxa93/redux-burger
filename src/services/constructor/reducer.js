import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    error: null,
    isLoading: false,
    constructorIngredients: [],
}

export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        addIngredient(state, action) {
            let constructorIngredients = [];
            if (state.constructorIngredients?.length) {
                constructorIngredients = [...state.constructorIngredients, action.payload];
            } else {
                constructorIngredients = [action.payload];
            }

            return { constructorIngredients };
        },
        deleteIngredient(state, action) {
               return state.constructorIngredients.filter(ing => ing.id !== action.payload);
        }
    },
})

export const { addIngredient, deleteIngredient } = constructorSlice.actions;
export default constructorSlice.reducer;


// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_INGREDIENT:
//             const constructorIngredients = state.constructorIngredients?.length
//                 ? [...state.constructorIngredients, action.payload] : [action.payload]
//             return {
//                 ...state,
//                 constructorIngredients,
//             }
//         case DELETE_INGREDIENT:
//             return {
//                 ...state,
//                 constructorIngredients:
//                     state.constructorIngredients.filter(ingredient => ingredient.id !== action.payload)
//             }
//         default:
//             return state;
//     }
// }
