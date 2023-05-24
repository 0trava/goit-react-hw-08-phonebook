import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./tasksContacts";
import { filterReducer } from "./filterContacts";
import userSlice from './user/userSlice';

// ВИВІД ІНФОРМАЦІЇ у консоль REDUX
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userSlice,
  },
});
