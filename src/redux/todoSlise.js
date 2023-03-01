import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        // {
        //     title: 'React',
        //     description: 'train',
        //     status: false,
        // },
        // {
        //     title: 'Redux',
        //     description: 'train',
        //     status: false,
        // },
    ],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (title, description) => {
                return { payload: { title, description, status: false } };
            },
        },

        deleteToDo: ({ items }, action) => {
            return { items: items.filter(item => item.id !== action.payload) };
        },
    },
});

export const { addToDo, deleteToDo } = todoSlice.actions;
