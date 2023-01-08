import { createSlice, current } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const contactSlice = createSlice({
    name: "contact",    
    initialState: {items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]},
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






const persistConfig = {
  key: 'root',
    storage,
    whitelist: [contactSlice],
}
export const persistedReducerContact = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact } = contactSlice.actions;
export const tasksReducer = contactSlice.reducer;
