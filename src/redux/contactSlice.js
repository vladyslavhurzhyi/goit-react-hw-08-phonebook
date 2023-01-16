import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

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
            state.contacts.error = action.payload;
        },
    },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;

export const contactSliceReducer = contactSlice.reducer;
