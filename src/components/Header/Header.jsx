import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleForm, toggleFormType } from '../../redux/Login form/form';
import { getUserLogin, getUser } from "../../redux/selectors";
import {logOutUser} from '../../redux/operetions';

import css from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'components/Utils/routes';

const Header = () => {
    const dispatch = useDispatch();
    const checkIsUserLogin = useSelector(getUserLogin);
    const user = useSelector(getUser);
    const navigate = useNavigate();

    const openForm = () => {
        navigate(ROUTES.LOGIN);
        // dispatch(toggleFormType("signup"));
        // dispatch(toggleForm(true));
    };

// LOG OUT
    const handleLogOut = () => {
        dispatch(logOutUser());
        navigate(ROUTES.HOME);// Повертаємо на головну сторінку  
    };

  return (

        <div className={css.header}>
            <div className={css.contacts__navigate}>
                    <a href="home" className={css.logo_box}>
                        <div className={css.icon}/>
                        <p className={css.logo}> <span>H</span>OME</p>
                    </a>
                    {checkIsUserLogin ? ( <a href="contacts" className={css.logo_box2}>
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