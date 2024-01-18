import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

export const fetchDataSearch = createAsyncThunk('get/fetch',
    async ()=>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=`)
        const data = await response.json()
        return data
    })

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
        builder.addCase(fetchDataSearch.fulfilled , (state, action)=>{
            state.bookname =  action.payload
            state.finding = false
        }),
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(fetchDataSearch.pending , (state)=>{
            state.finding = true
        }),
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(fetchDataSearch.rejected , (state)=>{
            state.finding = false 
            state.errorSearch = 'WRONG!'
        })
    }
})

export default bookSlice.reducer;