import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../Utils/routes";


import Home from "../Home/Home";
import ContactsBook from "../ContactsBook/ContactsBook";
import PrivateRoute from "./PrivateRoute";
import UsersFormSignIn from "components/Users/UsersFormSignIn";
import UsersFormSignUp from "components/Users/UsersFormSignUp";



const AppRoutes = () => {
  return (
    <>
  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path={ROUTES.HOME} index element={<Home />}/>
        <Route path={ROUTES.CONTACTS} element={<PrivateRoute><ContactsBook/></PrivateRoute>} />
        <Route path={ROUTES.LOGIN} index element={<UsersFormSignIn />} />
        <Route path={ROUTES.REGISTER} index element={<UsersFormSignUp />} />

  </Routes>
  </>)
};

export default AppRoutes;