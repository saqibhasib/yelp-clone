import React from 'react';
import logo from '../assets/logo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBarMain.module.css';
import { Link } from 'react-router-dom';

export function NavBarMain(props){
   

    return(
        <div className={styles['nav-bar']}>
            <Link to='/'>
                <img src={logo} className={styles.logo} alt="logo"/>
            </Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <Link to='/login'>
                <span className={`button ${styles['nav-button']}`}>Login</span>
            </Link>
            <Link to='/signup'>
                <span className={`button ${styles['nav-button']}`}>Sign up</span>
            </Link>
        </div>
    );
};