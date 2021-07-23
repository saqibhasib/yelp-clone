import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "../SearchBar/SearchBar";

import logo from "../assets/logo.png";
import styles from "./HomePage.module.css";

export function HomePage() {
    return (
        <div>
            <NavBar/>
            <img src={logo} className={styles.logo} alt="logo"/>
            <SearchBar/>
        </div>
    );
};