import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';

export function SearchResults(props){
    console.log(props)

    if(!props.businesses || !props.businesses.length){
        return(
        <div className={styles['search-results']}>
            nothing matched the search query...
            <span className={`icon ${styles["search-icon"]}`}>
                <i className="far fa-frown fa-2x"></i>
            </span>
        </div>);
    }
    console.log(props.businesses.length);
    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
        
    return(
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}