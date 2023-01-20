import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

export const contactSlice = createSlice({
    name: "contact",

    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        },
    },

    extraReducers: {
        [fetchContacts.pending](state) {
            state.contacts.isLoading = true;
},
        [fetchContacts.fulfilled](state, action) { 
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;},

        [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
        //add 
            [addContact.pending](state) {
            state.contacts.isLoading = true;
        },
            [addContact.fulfilled](state, action) { 
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
            state.contacts.isLoading = false;
        },

        [addContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        }, 
        //delete
            [deleteContact.pending](state) {
            state.contacts.isLoading = true;
        },
            [deleteContact.fulfilled](state, action) {      
                state.contacts.error = null;
                const index = state.contacts.items.findIndex( el => el.id === action.payload.id);
                state.contacts.items.splice(index, 1);
                 state.contacts.isLoading = false;
        },

        [deleteContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        }, 

    },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;

export const contactSliceReducer = contactSlice.reducer;
