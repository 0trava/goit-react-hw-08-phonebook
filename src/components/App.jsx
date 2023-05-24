// Встановлення через термінал генератора id
// $ npm install --save nanoid

import {ContactForm} from "./Form/ContactForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";
import Header from './Header/Header';

import css from "./App.module.css"; // підключення стилів




export const App = () => {

// РЕНДНЕРІНГ сторінки
      return (
        <div className={css.container}>
        <Header></Header>   
        <section className={css.body}>
            <div className={css.contact_boximg}>
                <h1 className={css.section_title}>Phonebook</h1>
                <ContactForm />
            </div>
            <div className={css.contact_box}>
                <h2 className={css.section_title}>Contacts</h2>
                <Filter/>
                <ContactsList></ContactsList>
            </div>

        </section >
        </div>

  );};