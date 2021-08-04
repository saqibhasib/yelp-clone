import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../../auth/Login/Login";
import styles from './NavBar.module.css';

export function NavBar() {
    return(
        <div className={styles["nav-bar"]}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                <Link to='/login'>
                    <span className="button">Login</span>
                </Link>
                <Link to='/signup'>
                    <span className="button">Sign up</span>
                </Link>
            </div>
        </div>
    );
}