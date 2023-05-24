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
        <>
              <Header></Header>   
      <div className={css.container}>
        <h1 className={css.section_title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.section_title}>Contacts</h2>
        <Filter/>
        <ContactsList></ContactsList>
      </div>
        </>

  );};