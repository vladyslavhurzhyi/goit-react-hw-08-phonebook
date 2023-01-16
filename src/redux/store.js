import { configureStore } from "@reduxjs/toolkit";
import { filterSliceReducer } from "./filterSlice";
import { contactSliceReducer } from "./contactSlice";
 

export const store = configureStore({
  reducer: {
    contact: contactSliceReducer,
    filter: filterSliceReducer,
  }
});

