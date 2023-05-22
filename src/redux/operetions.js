import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://646521639c09d77a62e49d07.mockapi.io/contacts';// персональний mock-сервер

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
        console.log(contact);
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

  

