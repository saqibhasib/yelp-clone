import React from 'react';
import { NavBarMain } from '../NavBarMain/NavBarMain';
import { SubNav } from '../NavBarMain/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';
import { Router, useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

export function Search(props){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    

    return(
        <div>
            <NavBarMain term={term} location={locationParam}/>
            <SubNav/>
            <SearchResultSummary term={term} location={locationParam}/>
            <SearchResults/>
        </div>
    );
}