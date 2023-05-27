import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../Utils/routes";


import Home from "../Home/Home";
import ContactsBook from "../ContactsBook/ContactsBook";
import {PrivateRoute} from "./PrivateRoute";



const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} index element={<Home />} />
    {/* <PrivateRoute path={ROUTES.CONTACTS}>
        <ContactsBook />
    </PrivateRoute> */}
    <Route path={ROUTES.CONTACTS} element={
      <PrivateRoute component= {<ContactsBook redirectTo="/"/>}/>
    } />
    {/* <Route path="*" element={<Navigate to="/" replace />}
    /> */}
  </Routes>
);

export default AppRoutes;