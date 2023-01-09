import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
    name: "contact",    
    initialState: {items: []},
    reducers: {

        addContact: {
            reducer(state, action) {
            
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

            }
        }
    },
});





export const { addContact, deleteContact } = contactSlice.actions;
export const tasksReducer = contactSlice.reducer;
