import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

import logo from "../assets/logo.png";
import styles from "./HomePage.module.css";
import { Link, useHistory } from "react-router-dom";

export function HomePage() {
    
    const history = useHistory();

    function search(term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);

        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return (
        <div className={styles["home"]}>
            <div className={styles["search-area"]}>
                <NavBar/>
                <Link to='/'>
                    <img src={logo} className={styles.logo} alt="logo"/>
                </Link>
                <SearchBar search={search}/>
                <SearchSuggestion/>
            </div>
        </div>
        
    );
};