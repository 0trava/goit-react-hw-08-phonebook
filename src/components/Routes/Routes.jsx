import React from "react";
import { Route, Routes } from "react-router-dom";
// import { ROUTES } from "../Utils/routes";


import Home from "../Home/Home";
import ContactsBook from "../ContactsBook/ContactsBook";
import PrivateRoute from "./PrivateRoute";



const AppRoutes = () => {
  return (
    <>
  <Routes>
      <Route path="/" index element={<Home />}/>
      <Route path="/contacts" element={<PrivateRoute><ContactsBook/></PrivateRoute>} />
      <Route path="*" element={<Home />}/>


  </Routes>
  </>)
};

export default AppRoutes;