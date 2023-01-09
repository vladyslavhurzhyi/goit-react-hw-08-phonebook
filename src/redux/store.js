import { configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { filterSlice } from "./filterSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { contactSlice } from "./contactSlice";
 


const persistConfig = {
  key: 'contacts',
    storage,
    
}
export const persistedReducerContact = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
        contact: persistedReducerContact,
        filter: filterSlice.reducer,
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);