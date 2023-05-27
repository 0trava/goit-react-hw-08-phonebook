import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../Utils/routes";

import Home from "../Home/Home";
import ContactsBook from "../ContactsBook/ContactsBook";


const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} index element={<Home />} />
    <Route path={ROUTES.CONTACTS} element={<ContactsBook />} />
  </Routes>
);

export default AppRoutes;