// Встановлення через термінал генератора id
// $ npm install --save nanoid


import Header from './Header/Header';
import Footer from './Footer/Footer';
import UserForm from './Users/UserForm';
import AppRoutes from './Routes/Routes';

import css from "./App.module.css"; // підключення стилів
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchCurrentUser} from '.././redux/operetions';


export const App = () => {
  const dispatch = useDispatch();

  useEffect (()=> {
    dispatch(fetchCurrentUser());
  }, [dispatch])

// РЕНДНЕРІНГ сторінки
      return (
        <div className={css.container}>
        <Header/> 
        <UserForm/>
        <section className={css.body}>
            <AppRoutes />
        </section >
        <Footer/>
        </div>

  );};