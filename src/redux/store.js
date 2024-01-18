import { configureStore } from "@reduxjs/toolkit";
import getAllData from "./getAllData";
// import getSearch from "./getSearch";


const store = configureStore({
    reducer:{
        // search: getSearch ,
        getAll : getAllData
    }

})

export default store