import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Login.module.css';

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logIn(event){
        event.preventDefault();
    }

    return (
        <div className={`${styles.login}`}>
            <div className={`box ${styles.boxbox}`}>
                <Link to='/'>
                    <img className={styles.logo} src={logo}/>
                </Link>
                <h3>Sign in</h3>
                <form className="">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input 
                                className="input" 
                                type="text" placeholder="Email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="password" placeholder="Password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-warning"
                                onClick={logIn}>
                            Login
                            </button>
                        </p>
                    </div>
                    <div className={styles['not-registered']}>
                        Not registered?
                        <Link to='/signup'>
                            <span className={`button is-info ${styles.signup}`}>
                                Sign up
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};