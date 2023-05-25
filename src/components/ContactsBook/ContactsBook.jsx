import React from 'react';

import {ContactForm} from "./Form/ContactForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";

import css from './ContactsBook.module.css';

const ContactsBook = () => {


  return (
        <>
            <div className={css.contact_boximg}>
                <h2 className={css.section_title}>Phonebook</h2>
                <ContactForm />
            </div>
            <div className={css.contact_box}>
                <h2 className={css.section_title}>Contacts</h2>
                <Filter/>
                <ContactsList/>
            </div>
            </>
  )
}

export default ContactsBook;