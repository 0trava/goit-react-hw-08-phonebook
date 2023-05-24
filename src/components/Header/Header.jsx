import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm, toggleFormType } from '../../redux/user/userSlice';
import { getIsLoad  } from "../../redux/selectors";

import style from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoad);

    const openForm = () => {
        dispatch(toggleFormType("signup"));
        dispatch(toggleForm(true));
    } 

  return (

        <div className={style.header}>
            <a href="/" className={style.logo_box}>
                <div className={style.icon}/>
                <p className={style.logo}> <span>C</span>ONTACT <span>B</span>OOK</p>
            </a>



            <div className={style.register_form}>
                
                { isLoading ? (   
                <>                 
                <div className={style.user}>
                    <img  className={style.avatar} src="https://user-life.com/uploads/posts/2020-03/1584366922_1.png" alt="" />
                    <p className={style.username}>Svetlana</p>
                </div>
                <div className={style.login}>Log <span>Out</span></div>
                </>)
                : (<div className={style.login} onClick={openForm}>Log <span>In</span> </div>)}


                

            </div>
        </div>

  )
}

export default Header;