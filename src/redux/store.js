import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./tasksContacts";
import { filterReducer } from "./filterContacts";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'acontacts',
  storage,
  whitelist: ['token'],
};

// ВИВІД ІНФОРМАЦІЇ у консоль REDUX
export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts: persistReducer(persistConfig, contactsReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
