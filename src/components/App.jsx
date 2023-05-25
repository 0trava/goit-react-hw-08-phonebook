// Встановлення через термінал генератора id
// $ npm install --save nanoid


import Header from './Header/Header';
import Footer from './Footer/Footer';
import UserForm from './Users/UserForm';
import AppRoutes from './Routes/Routes';

import css from "./App.module.css"; // підключення стилів


export const App = () => {

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