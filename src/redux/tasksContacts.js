import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, registerUser } from "../redux/operetions";

const initialState = {

  currentUser: null,
  token: null,
  items: [],
  // contacts: [],
  formType: "signup",
  showForm: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {...state, isLoading: true, };
};

const handleRejected = (state, action) => {
  return {...state, isLoading: false, error: action.payload, };
};

const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
  return {...state, isLoading: false, error: null, items: [action.payload, ...state.items],};
};

const handleDeleteContactSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: state.items.filter(item => item.id !== action.payload.id),};
};


const handleAddUserSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null,};
};

// для кожного з цих екшенів буде створено actionCreator
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [registerUser.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContactsSuccess,
    [addContact.fulfilled]: handleAddContactSuccess,
    [deleteContact.fulfilled]: handleDeleteContactSuccess,
    [registerUser.pending]: handleAddUserSuccess,
  },
});

export const contactsReducer = contactsSlice.reducer;