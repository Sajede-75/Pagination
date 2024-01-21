import { createSlice } from "@reduxjs/toolkit";
import { allBooks  } from "./action";

const initialState = {
    list:[],
    sending : false,
    error : ''
}

const getAllData = createSlice({
    name: "books",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(allBooks.fulfilled , (state, action)=>{
            // eslint-disable-next-line no-unused-expressions
            state.list =  action.payload,
            state.sending = false
        })
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(allBooks.pending , (state)=>{
            state.sending = true
        }) ,
        // eslint-disable-next-line no-unused-expressions
        /*eslint no-unused-expressions: "error"*/
        builder.addCase(allBooks.rejected , (state)=>{
            state.sending = false
            state.error = 'WRONG!'
        })
    }
})

export default getAllData.reducer;