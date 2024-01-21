import { createSlice } from "@reduxjs/toolkit";
import { searchBook } from "./action";

const initialState = {
    bookname:'',
    finding: false,
    errorSearch:''
} 

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers:{},
    extraReducers : (builder)=> {
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(searchBook.fulfilled , (state, action)=>{
            state.bookname =  action.payload
            state.finding = false
        }),
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(searchBook.pending , (state)=>{
            state.finding = true
        }),
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(searchBook.rejected , (state)=>{
            state.finding = false 
            state.errorSearch = 'WRONG!'
        })
    }
})

export default bookSlice.reducer;