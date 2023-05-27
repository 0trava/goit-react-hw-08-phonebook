import React from 'react';
import { useSelector } from 'react-redux';

import {ContactForm} from "./Form/ContactForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";
// import { RedirectFunction } from 'react-router-dom';

import css from './ContactsBook.module.css';
import { getUserLogin } from 'redux/selectors';

const ContactsBook = () => {
    const UserLogin = useSelector(getUserLogin);

    if (!UserLogin) {
        return 
    }    

  return (
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
  )
}

export default ContactsBook;