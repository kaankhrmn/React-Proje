import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from './slice/ToDoSlice'

export const store = configureStore({
    reducer: {
        todo: ToDoReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch