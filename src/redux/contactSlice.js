import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
    name: "contact",    
    initialState: {items: []},
    reducers: {

        addContact: {
            reducer(state, action) {
                // return [...state.items, action.payload];
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },

        deleteContact: {
            reducer(state, action) {  
            const index = state.items.findIndex(task => task.id === action.payload);
            state.items.splice(index, 1);
        //    return state.items.filter(item => item.id !== action.payload);
            }
        }
    },
});





export const { addContact, deleteContact } = contactSlice.actions;
export const tasksReducer = contactSlice.reducer;
