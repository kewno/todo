import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from './tasks/slice'

export const rootReducer = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})

export type RootState = ReturnType<typeof rootReducer.getState>
export type AppDispatch = typeof rootReducer.dispatch