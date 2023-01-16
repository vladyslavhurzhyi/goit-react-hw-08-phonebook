import axios from "axios";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63c52ce9e1292e5bea1cb8ca.mockapi.io"



export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
try {
    const response = await axios.get("/contacts");
    return response.data;   
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}});
