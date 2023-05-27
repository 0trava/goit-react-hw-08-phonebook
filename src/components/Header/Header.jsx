import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm, toggleFormType } from '../../redux/Login form/form';
import { getUserLogin, getUser } from "../../redux/selectors";
import {logOutUser} from '../../redux/operetions';

import css from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const checkIsUserLogin = useSelector(getUserLogin);
    const user = useSelector(getUser);

    const openForm = () => {
        dispatch(toggleFormType("signup"));
        dispatch(toggleForm(true));
    };

    const handleLogOut = () => {

        dispatch(logOutUser());

    };

  return (

        <div className={css.header}>
            <div className={css.contacts__navigate}>
                    <a href="/" className={css.logo_box}>
                        <div className={css.icon}/>
                        <p className={css.logo}> <span>H</span>OME</p>
                    </a>
                    {checkIsUserLogin ? ( <a href="/contacts" className={css.logo_box2}>
                        <p className={css.logo}> <span>C</span>ONTACTS</p>
                    </a>) : (<></>) }

            </div>





            <div className={css.register_form}>

                
                { checkIsUserLogin ? (   
                <>                 
                <div className={css.user}>
                    <img  className={css.avatar} src="https://user-life.com/uploads/posts/2020-03/1584366922_1.png" alt="" />
                    <p className={css.username}>{user.name}, <span>({user.email})</span> </p>
                </div>
                <div className={css.login} onClick={handleLogOut}>Log <span>Out</span></div>
                </>)
                : (<div className={css.login} onClick={openForm}>Log <span>In</span> </div>)}


                

            </div>
        </div>

  )
}

export default Header;