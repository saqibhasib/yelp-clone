import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Signup.module.css';

export function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function signUp(event){
        event.preventDefault();
    }
    return (
        <div className={`${styles.signup}`}>
            <div className={`box ${styles.boxbox}`}>
                <Link to='/'>
                    <img className={styles.logo} src={logo}/>
                </Link>
                <h3>Sign Up</h3>
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
                                onClick={signUp}>
                            Create account
                            </button>
                        </p>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}