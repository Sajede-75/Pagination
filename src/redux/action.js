import { createAsyncThunk } from "@reduxjs/toolkit"

export const allBooks = createAsyncThunk('books/allBooks',
    async (search)=>{
        let post= "''"
        if(search){
            post = Object.values(search)[0]
        }
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${post}`)
        const data = await response.json()
        return data
    }
)
