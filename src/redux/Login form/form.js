import { createSlice } from "@reduxjs/toolkit";

const formReduser = createSlice({
    name: "form",
    initialState: {
      formType: "signup",
      showForm: false,

    },

    reducers: {

      toggleForm: (state, { payload }) => {
        state.showForm = payload;
      },
      toggleFormType: (state, { payload }) => {
        state.formType = payload;
      },
    },
  });


export const { toggleForm, toggleFormType } = formReduser.actions;
export default formReduser.reducer;