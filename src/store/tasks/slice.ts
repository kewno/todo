import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskItem} from "./model";

interface TasksState {
    item: TaskItem[]
}

const initialState: TasksState = {
    item: [
        {id: '1', text: 'Выучить Node.js', completed: false},
        {id: '2', text: 'Сделать пару проектов на Node.js', completed: false},
        {id: '3', text: 'Стать синьером помидором', completed: false}
    ],
}
export const counterSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<TaskItem>) => {
            state.item = [action.payload, ...state.item]
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.item = state.item.filter(todo => todo.id !== action.payload)
        },
        toggleCompletedTask: (state, action: PayloadAction<string>) => {
            state.item.forEach(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo.completed)
        }
    }
})


export const {createTask, removeTask, toggleCompletedTask} = counterSlice.actions
export default counterSlice.reducer