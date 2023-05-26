import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://646521639c09d77a62e49d07.mockapi.io/contacts';
// персональний mock-сервер

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; 
// beckend

export const registerUser = createAsyncThunk(
  'auth/register', 
  async credentials => {
  try {
      const {data} = await axios.post('/users/signup', credentials);
      return data;
  } catch (error) {
    alert("try one more time...");
  }
});

export const logInUser = createAsyncThunk(
  'auth/login', 
  async credentials => {
  try {
      const {data} = await axios.post('/users/login', credentials);
      return data;
  } catch (error) {
    alert("Wrong login or password...");
  }
});

export const logOutUser = createAsyncThunk(
  'auth/logout', 
  async () => {
  try {
      await axios.post('/users/logout');
  } catch (error) {
    console.log("error");
  }
});



export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', contact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        console.log(contactId);
        const response = await axios.delete(`/contacts/${contactId}`); // видаляємо контакт з бази
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );





  

