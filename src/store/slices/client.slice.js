import { createSlice } from "@reduxjs/toolkit";

export const client = createSlice({
    name: 'client',
    initialState: '',
    reducers: {
        setClient: (state, action) => action.payload
    }
})

export const {setClient} = client.actions
export default client.reducer