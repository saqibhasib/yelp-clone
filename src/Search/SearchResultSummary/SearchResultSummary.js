import React from 'react';
import styles from './SearchResultSummary.module.css';

export function SearchResultSummary(){
    return(
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>restaurants</strong> burnaby</h1>
                <p>Showing 1-20 out of 500 results</p>
            </div>
            <div className={styles.filters}>
                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon is-small">
                        <i className="fas fa-sliders-h"></i>
                    </span>
                    <span>All Filters</span>
                </button>
                <div className="buttons has-addons">
                    <button className="button is-rounded">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button is-rounded">$$$$</button>
                </div>
                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon is-small">
                        <i className="fas fa-clock"></i>
                    </span>
                    <span>Open Now</span>
                </button>
                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon is-small">
                        <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span>Cashback</span>
                </button>
            </div>
        </div>
    );
}