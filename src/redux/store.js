import { configureStore } from "@reduxjs/toolkit";
import { contactSliceReducer } from "./contacts/contactSlice";
import { filterSliceReducer } from "./contacts/filterSlice";
 

export const store = configureStore({
  reducer: {
    contact: contactSliceReducer,
    filter: filterSliceReducer,
  }
});

