import React from 'react';

import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.header}>
            <a href="" className={style.logo_box}>
                <div className={style.icon}/>
                <p className={style.logo}> <span>C</span>ONTACT <span>B</span>OOK</p>
            </a>



            <div className={style.register_form}>
                <div className={style.user}>
                    <div className={style.avatar}></div>
                    <p className={style.username}>Hello, Sveta</p>
                </div>

                <div className={style.login}>Log <span>In</span> </div>
                {/* <div className={style.login}>Log <span>Out</span></div> */}
            </div>
        </div>

        
    </div>
  )
}

export default Header;