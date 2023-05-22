import PropTypes from 'prop-types';
import css from "./ContactsList.module.css"; // підключення стилів на картку
import Loader from 'components/Loader/Loader'; // підключення Loadera

import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getFilteredContacts  } from "../../redux/selectors";
import { fetchContacts, deleteContact } from "../../redux/operetions";
import { useEffect } from 'react';

export const ContactsList = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts()); // Завантаження данних
    }, [dispatch]);

    // ОТРИМАННЯ МАСИВУ ДАННИХ
    const isLoading = useSelector(getIsLoading);
    const filteredContacts = useSelector (getFilteredContacts);


    return (
            <ul className={css.contacts__list}>
                {isLoading ?  (<Loader/>) : filteredContacts.map(contact => {
                return (<li>
                   <img src="data:image/png;base64,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" alt="avatar" width="30px" />
                   <p className={css.contacts__text}>{contact.name}</p>
                   <p className={css.contacts__text}>{contact.phone}</p> 
                   <button onClick={e => dispatch(deleteContact(e.currentTarget.id))} id = {contact.id} className={css.contacts__btn} type="button">Delete</button>
                </li>)
                })}
            </ul>
    );
  }
  
  ContactsList.prototype = {
    onClickDelete: PropTypes.func.isRequired,// функція
    contacts: PropTypes.func.isRequired,// функція
  };
  

