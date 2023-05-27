import React from 'react';
// import { Route } from "react-router-dom";
// import { ROUTES } from "../Utils/routes";
import { useSelector } from 'react-redux';
import { getUserLogin } from 'redux/selectors';
// import Home from "../Home/Home";
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
const UserLogin = useSelector(getUserLogin);

return UserLogin ? <Navigate to={addres} /> : Component ;
// if (UserLogin) {
//   return <Route path={ROUTES.CONTACTS} element={children} />   
// } else {
//     return <Route path={ROUTES.HOME} element={<Home />} />
// }

};
