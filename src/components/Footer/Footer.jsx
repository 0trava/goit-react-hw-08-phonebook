import React from 'react';
// import {Link} from "react-router-dom";

import styles from './Footer.module.css';
// import { ROUTES } from '../../utils/routes';

function Footer() {
  return (
    <section className={styles.footer}>
        <div>
            <a href="" className={styles.logo_box}>
                <p className={styles.logo}> <span>C</span>ONTACT <span>B</span>OOK</p>
            </a>
        </div>
        <div className={styles.rights}>Developed by {""}
        <a href="https://github.com/0trava"
           target='_blank'
           rel="noreferrer"
           >0trava</a>
        </div>
        <div className={styles.socials}>
            <a href="https://www.instagram.com" target='_blank' rel="noreferrer">                
                <svg  className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}></use>
                </svg>
            </a>
            <a href="https://www.facebook.com" target='_blank' rel="noreferrer">                
                <svg  className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}></use>
                </svg>
            </a>
            <a href="https://www.youtube.com" target='_blank' rel="noreferrer">                
                <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
                </svg>
            </a>
        </div>
    </section>
  )
}

export default Footer