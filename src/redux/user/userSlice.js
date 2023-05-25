import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      token: null,
      isLoggedIn: false,
      contacts: [],
      isLoading: false,
      formType: "signup",
      showForm: false,
      error: null,
    },



    // const register = createAsyncThunk('auth/register', async credentials => {
    //     try {
    //         const {data} = await axios.post('/users/signup', credentials);
    //         return data;
    //     } catch (error) {

    //     }
    // })


    reducers: {

        
    //   addItemToCart: (state, { payload }) => {
    //     let newCart = [...state.cart];
    //     const found = state.cart.find(({ id }) => id === payload.id);
  
    //     if (found) {
    //       newCart = newCart.map((item) => {
    //         return item.id === payload.id
    //           ? { ...item, quantity: payload.quantity || item.quantity + 1 }
    //           : item;
    //       });
    //     } else newCart.push({ ...payload, quantity: 1 });
  
    //     state.cart = newCart;
    //   },
    //   removeItemFromCart: (state, { payload }) => {
    //     state.cart = state.cart.filter(({ id }) => id !== payload);
    //   },

    //   addUser: (state, { payload }) => {


    //   },

      toggleForm: (state, { payload }) => {
        state.showForm = payload;
      },
      toggleFormType: (state, { payload }) => {
        state.formType = payload;
      },
    },
    // extraReducers: {
    //     [authOperations.register.fulfilled] (state, action) {

    //     },
    //  },
    // extraReducers: (builder) => {
    //   builder.addCase(createUser.fulfilled, addCurrentUser);
    //   builder.addCase(loginUser.fulfilled, addCurrentUser);
    //   builder.addCase(updateUser.fulfilled, addCurrentUser);
    // },
  });


export const { addItemToCart, removeItemFromCart, toggleForm, toggleFormType } = userSlice.actions;
export default userSlice.reducer;