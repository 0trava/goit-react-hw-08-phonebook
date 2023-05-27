import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, registerUser, logInUser, logOutUser, fetchCurrentUser } from "../redux/operetions";
// const USER = 'contacts'; // ключ для localStorage


const initialState = {
  currentUser: { email: "", password: null, name: "" },
  token: '',
  isLogin: false,
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
  return { ...state, 
    isLoading: false, 
    error: null,
    currentUser: action.payload.user,
    token: action.payload.token,
    isLogin: true,
  };
};


const handleLoginUserSuccess = (state, action) => {
  return { ...state, 
    isLoading: false, 
    error: null,
    currentUser: action.payload.user,
    token: action.payload.token,
    isLogin: true,
  };
};

export const handlelogOutUser = state => {
  return { ...state, 
    isLoading: false, 
    error: null,
    currentUser: { email: "", password: "", name: "" },
    token: '',
    isLogin: false,
  };
};

const handleCurrentUserSuccess = (state, action) => {
  if (action.payload) {
    return { ...state, 
      isLoading: false, 
      error: null,
      currentUser: action.payload,
      isLogin: true,
    };
  }

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
    [registerUser.fulfilled]: handleAddUserSuccess,
    [logInUser.fulfilled]: handleLoginUserSuccess,
    [logInUser.rejected]: handleRejected,
    [logOutUser.fulfilled]: handlelogOutUser,
    [fetchCurrentUser.fulfilled]: handleCurrentUserSuccess,
    [fetchCurrentUser.rejected]: handlelogOutUser,
  },
});

export const contactsReducer = contactsSlice.reducer;