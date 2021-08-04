import React from 'react';
import { Link } from 'react-router-dom';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult(props){
    if(!props.business){
        return(<div></div>);
    }
    
    const displayDetail = props.business.phone ? 
                            (<div>
                                <p>{props.business.phone}</p>
                                <p>{props.business.location.address1}</p>
                                <p>{props.business.location.city}</p>
                            </div>) : 
                            (<div>
                                <p>{props.business.location.address1}</p>
                                <p>{props.business.location.city}</p>
                            </div>);

    const categories = props.business.categories.map(cat=><span className={`tag ${styles['tag-custom']}`}>{cat.title}</span>);

    return(
        <a href={props.business.url}>
            <div className={`box ${styles.boxbox}`}>
                <div className={styles['search-result']}>
                    <img className={styles['business-image']} src={props.business.image_url} alt='business'/>
                    <div className={styles['business-info']}>
                        <h2 className='subtitle'><strong>{props.business.name}</strong></h2>
                        <BusinessRating reviewCount={props.business.review_count} rating={props.business.rating}/>
                        <p>{props.business.price} {categories}</p>
                    </div>
                    <div className={styles['contact-info']}>
                        {displayDetail}
                    </div>
                </div>
            </div>
        </a>
    );
}