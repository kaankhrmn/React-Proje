import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoInitalState, ToDoType } from '../../types/Types'

const initialState: ToDoInitalState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createToDo: (state: ToDoInitalState, action: PayloadAction<ToDoType>) => {
            state.todos = [...state.todos, action.payload]
        },

        removeTodoById: (state: ToDoInitalState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: ToDoType) => todo.id !== action.payload)]
        },

        updateToDo: (state: ToDoInitalState, action: PayloadAction<ToDoType>) => {
            state.todos = [...state.todos.map((todo: ToDoType) => todo.id === action.payload.id ? action.payload : todo)]
        }
    },
})

export const { createToDo, removeTodoById, updateToDo } = todoSlice.actions

export default todoSlice.reducer