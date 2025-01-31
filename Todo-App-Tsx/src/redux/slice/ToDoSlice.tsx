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

        }
    },
})

export const { createToDo } = todoSlice.actions

export default todoSlice.reducer