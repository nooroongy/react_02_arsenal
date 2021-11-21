import { configureStore, createSlice } from "@reduxjs/toolkit";
import players from "../data/players";

const slice = createSlice({
    name:'reducer',
    initialState:{
        players
    },
    reducers:{
    }
})

export const actions = slice.actions;
export default configureStore({reducer:slice.reducer})