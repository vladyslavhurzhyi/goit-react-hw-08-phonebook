import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./auth/authSlice";
import { contactSliceReducer } from "./contacts/contactSlice";
import { filterSliceReducer } from "./contacts/filterSlice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer
} from 'redux-persist'


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ["token"],
}

export const persistedReducerAuth = persistReducer(persistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    contact: contactSliceReducer,
    filter: filterSliceReducer,
    auth: persistedReducerAuth,
  },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);
