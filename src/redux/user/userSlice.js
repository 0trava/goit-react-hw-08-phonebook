import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { BASE_URL } from "../../utils/constants";


const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      contacts: [],
      isLoading: false,
      formType: "signup",
      showForm: false,
    },


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
      toggleForm: (state, { payload }) => {
        state.showForm = payload;
      },
      toggleFormType: (state, { payload }) => {
        state.formType = payload;
      },
    },
    // extraReducers: (builder) => {
    //   builder.addCase(createUser.fulfilled, addCurrentUser);
    //   builder.addCase(loginUser.fulfilled, addCurrentUser);
    //   builder.addCase(updateUser.fulfilled, addCurrentUser);
    // },
  });


export const { addItemToCart, removeItemFromCart, toggleForm, toggleFormType } = userSlice.actions;
export default userSlice.reducer;