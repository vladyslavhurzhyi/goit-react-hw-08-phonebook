import { register, login, logOut, refreshUser,  } from "./authOperation";
const { createSlice } = require("@reduxjs/toolkit");



const initialState = { 
    user: { name: null, email: null},
    token: null,
    isLoggedIn: false,
    error: null,
    isRefreshing: false,
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

         [refreshUser.pending](state) {
        state.isRefreshing = true;
    },        
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        },

                [refreshUser.rejected](state, action) { 
                    // state.error = action.payload;
                    state.isRefreshing = false;
                    
        },
        
    }
})

export const authSliceReducer = authSlice.reducer;