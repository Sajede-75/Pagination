import { configureStore } from "@reduxjs/toolkit";
import getAllData from "./getAllData";


const store = configureStore({
    reducer:{
        search : getAllData,
        all : getAllData
    }

})

export default store