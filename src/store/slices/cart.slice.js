import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name: 'cart',
    initialState: '',
    reducers: {
        setCart: (state, action) => action.payload
    }
})

export const {setCart} = cart.actions
export default cart.reducer