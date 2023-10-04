import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchIngredients} from "../api/burger-api";

const initialState = {
    ingredients: [],
    constructorIngredients: [],
}

export const getIngredients = createAsyncThunk(
    'ingredients/fetchIngredients',
    async () => {
        const response = await fetchIngredients();
        return response;
    }
)

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            let constructorIngredients = [];
            if (state.constructorIngredients?.length) {
                constructorIngredients = [...state.constructorIngredients, action.payload];
            } else {
                constructorIngredients = [action.payload];
            }

            return { ...state, constructorIngredients };
        },
        deleteIngredient: (state, action) => {
            return {...state, constructorIngredients: state.constructorIngredients.filter(ing => ing.id !== action.payload)};
        }
    },
    extraReducers: (builder => {
        builder.addCase(getIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
        })
    })
})

export const { addIngredient, deleteIngredient } = ingredientsSlice.actions

export default ingredientsSlice.reducer
