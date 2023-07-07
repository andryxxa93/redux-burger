import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getIngredients} from "../../api/api";

const initialState = {
    ingredients: [],
    error: null,
    isLoading: false,
}

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchIngredients',
    async () => {
        const response = await getIngredients();
        return response;
    }
)

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
        })
    })
})

export default ingredientsSlice.reducer;

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_INGREDIENTS_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         case GET_INGREDIENTS_SUCCESS:
//             return {
//                 ...state,
//                 ingredients: action.payload,
//                 isLoading: false,
//             }
//         case GET_INGREDIENTS_ERROR:
//             return {
//                 ...state,
//                 error: true,
//                 isLoading: false,
//             }
//         default:
//             return state;
//     }
// }
