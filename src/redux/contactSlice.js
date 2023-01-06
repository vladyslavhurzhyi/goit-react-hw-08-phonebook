import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web






export const contactSlice = createSlice({
    name: "contact",
    
    initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],

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






const persistConfig = {
  key: 'root',
  storage,
}
export const persistedReducerContact = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact } = contactSlice.actions;
export const tasksReducer = contactSlice.reducer;
