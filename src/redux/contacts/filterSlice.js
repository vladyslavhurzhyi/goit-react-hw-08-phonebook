import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({

    name: "filter",

    initialState: "",

    reducers: {

        setFilterValue: {
            reducer(state, action) {
            
                return  action.payload;
            }
        },

    }

});

export const { setFilterValue } = filterSlice.actions;
  
    export const filterSliceReducer = filterSlice.reducer;