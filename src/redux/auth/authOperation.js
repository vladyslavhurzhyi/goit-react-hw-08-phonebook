import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}` ;
}

export const unsetToken = () => {
    axios.defaults.headers.common.Authorization = "" ;
}




export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/signup", credentials);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});



export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/login", credentials);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});


export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        unsetToken();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});


