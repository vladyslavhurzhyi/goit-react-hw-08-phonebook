import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({

    name: "filter",

    initialState: "",

    reducers: {

        setFilterValue: {
            reducer(state, action) {
            
                return state = action.payload;
            }
        },

    }

});

export const { setFilterValue } = filterSlice.actions;