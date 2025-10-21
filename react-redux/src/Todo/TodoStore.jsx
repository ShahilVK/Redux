import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./Todoslice"



export const Todostore = configureStore({
    reducer:{
        todos:todoreducer,
    }
})