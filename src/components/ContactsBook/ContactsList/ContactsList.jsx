import PropTypes from 'prop-types';
import css from "./ContactsList.module.css"; // підключення стилів на картку
import Loader from 'components/Loader/Loader'; // підключення Loadera

import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getFilteredContacts  } from "../../../redux/selectors";
import { fetchContacts, deleteContact } from "../../../redux/operetions";
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
                return (<li key={contact.id}>
                  <div className={css.contacts__item}>
                   <img   className={css.avatar} src="https://user-life.com/uploads/posts/2020-03/1584366922_1.png" alt="avatar" width="30px" />
                    <div className={css.contacts__block}>
                   <p className={css.contacts__text_name}>{contact.name}</p>
                   <p className={css.contacts__number}>{contact.number}</p> 
                    </div>
                  </div>
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
  

