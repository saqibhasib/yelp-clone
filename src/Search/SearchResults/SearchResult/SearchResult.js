import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult(){
    return(
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src='https://via.placeholder.com/200' alt='business'/>
            <div className={styles['business-info']}>
                <h2 className='subtitle'><strong>Title</strong></h2>
                <BusinessRating/>
                <p>$$ <span className="tag">Pizza</span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>+123456789</p>
                <p>123 That street</p>
                <p>Porters Lake</p>
            </div>
        </div>
    );
}