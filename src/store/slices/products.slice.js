import { createSlice } from "@reduxjs/toolkit";
import menu from '../../utils/menu'

export const products = createSlice({
    name: 'products',
    initialState: menu,
    reducers: {
        setProducts: (state, action) => action.payload
    }
})

export const {setProducts} = products.actions
export default products.reducer