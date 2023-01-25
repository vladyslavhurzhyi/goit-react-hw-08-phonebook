import { register, login, logOut } from "./authOperation";
const { createSlice } = require("@reduxjs/toolkit");



const initialState = { 
    user: { name: null, email: null},
    token: null,
    isLoggedIn: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth", 
    initialState, 
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        
        [register.rejected](state, action) {
            state.error = action.payload;
        },

    [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [login.rejected](state, action) {
            state.error = action.payload;
        },

        [logOut.fulfilled](state, action) {
            state.user = { name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
        },

                [logOut.rejected](state, action) {
            state.error = action.payload;
        },
        
    }
})

export const authSliceReducer = authSlice.reducer;