// Here we will create slice for our todo .
import { createSlice, nanoid } from "@reduxjs/toolkit";

// For any slice to be constructed we need 3 entities:
/**
 * 1) name of the slice.
 * 2) initialState, this is the state with which our stores are configured.
 * 3) reducers : set of functions which will operate on our states.
 * We can create initial state, and different reducer functions separately which will further enhance our readibility.
 */

const initialState = {
    todos: []
}

export const TODO_LIST_TAG = 'todoList';

export const TodoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        initTodo:(state,action)=>{
            state.todos = action.payload
        },
        addTodo: (state,action)=>{
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                isCompleted: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        updateTodo: (state,action)=>{
            const {id,text,isCompleted} = action.payload
            state.todos = state.todos.map((todo)=>(
                (todo.id === id) ? {...todo,
                    text: text,
                    isCompleted: isCompleted
                }:todo))
            console.log(state.todos)    
            localStorage.setItem(TODO_LIST_TAG,JSON.stringify(state.todos))    
        }
    }
})

//Once the slice is defined we need to export the individual functions for their usage in components.
// After the functions are exported we need to export the reducer , for store configuration.

export const{addTodo, removeTodo, updateTodo, initTodo} = TodoSlice.actions
export const todoReducer = TodoSlice.reducer;