import React from 'react';
import styles from './SearchBar.module.css';


export function SearchBar() {
    return(
        <div>
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-static">
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input ${styles['input-control']}`} type="text" placeholder="restaurants, movers ..."/>
                </p>
                <p className="control">
                    <button className="button is-static">
                        Near
                    </button>
                </p>
                <p className="control">
                    <input className={`input ${styles['input-control']}`} type="text" placeholder="Where"/>
                </p>
                <button className={`button ${styles["search-button"]}`}>
                    <span className={`icon is-small ${styles["search-icon"]}`}>
                        <i className="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </div>
    );
}