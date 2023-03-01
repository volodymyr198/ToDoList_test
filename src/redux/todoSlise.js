import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: [],
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
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        status: false,
                    },
                };
            },
        },

        detailsToDo: (state, action) => {
            const { id, status } = action.payload;
            const index = state.items.findIndex(todo => todo.id === id);
            if (index >= 0) {
                state.items[index].status = status;
            }
        },
    },
});

export const { addToDo, detailsToDo } = todoSlice.actions;
