// In this file we will configure our store, store is the single cehtralised repo of all the data we are maintaining.
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features/todoSlice"; 

export const todoStore = configureStore({
    reducer: todoReducer
})