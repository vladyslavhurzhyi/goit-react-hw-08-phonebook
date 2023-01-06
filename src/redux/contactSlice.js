import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


export const contactSlice = createSlice({
    name: "contact",
    
    initialState: [],

    reducers: {

        addContact: {
            reducer(state, action) {
                return [...state, action.payload];
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
                
              return state.filter(item => item.id !== action.payload);
            }
        }
    },
});


export const { addContact, deleteContact } = contactSlice.actions;
export const tasksReducer = contactSlice.reducer;