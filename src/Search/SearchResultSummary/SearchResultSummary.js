import React, { useEffect, useState } from 'react';
import styles from './SearchResultSummary.module.css';

export function SearchResultSummary(props) {
    let resultStats = null;
    if(props.amountResults && props.shownResults){
        resultStats = <p>Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    };
    return(
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>{props.term || 'Businesses'}</strong> in {props.location}</h1>
                {resultStats}
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