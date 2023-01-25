import axios from "axios";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"



export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
try {
    const {data} = await axios.get("/contacts");
    return data;  
} catch (error) {
    return thunkAPI.rejectWithValue(error);
        }
    });


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
try {
    const {data} = await axios.post("/contacts", newContact);
    return data;   
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}});


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
try {
    const {data} = await axios.delete(`/contacts/${id}`);
    return data;   
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}});


