import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('redux-store') ? JSON.parse(localStorage.getItem('redux-store')) : []

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        taskAdded: (tasks, action) => {
            tasks.push(action.payload);
        },
    },
});

export const getTasks = (state) => state.tasks;

export default tasksSlice.reducer;