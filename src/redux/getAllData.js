import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('get/fetch',
    async ()=>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=''`)
        const data = await response.json()
        return data
    })

const initialState = {
    list:[],
    sending: true,
    error:''
}

const getAllData = createSlice({
    name: "books",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(fetchData.fulfilled , (state, action)=>{
            state.list =  action.payload
            state.sending = false
        }),
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(fetchData.pending , (state)=>{
            state.sending = true
        }) ,
        // eslint-disable-next-line no-unused-expressions
        builder.addCase(fetchData.rejected , (state)=>{
            state.sending = false
            state.error = 'WRONG!'
        })
    }
})

export default getAllData.reducer;