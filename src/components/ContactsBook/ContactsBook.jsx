import React, { useEffect } from 'react';

import {ContactForm} from "./Form/ContactForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";

import css from './ContactsBook.module.css';
// import { getUserLogin } from 'redux/selectors';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const ContactsBook = () => {
    const userIsLogin = window.localStorage.getItem('checkLogIn');


  useEffect(()=> {
    console.log(userIsLogin);  
  }, [userIsLogin])

  return (userIsLogin === 'true') ?  (
        <>
            <div className={css.contact_boximg}>
                <h2 className={css.section_title}>Phonebook</h2>
                <ContactForm />
                <h2 className={css.section_title}>Filter</h2>
                <Filter/>
            </div>
            <div className={css.contact_box}>
                <h2 className={css.section_title}>Contacts</h2>

                <ContactsList/>
            </div>
            </>
  ) : <Navigate to='/' />;
}

export default ContactsBook;