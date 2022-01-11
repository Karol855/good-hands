import React from 'react';
import {Link} from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <ul className="header-links">
                <li> <Link to="/logowanie">Logowanie</Link> </li>
                <li> <Link to="/rejestracja">Rejestracja</Link> </li>
            </ul>
        </div>
    );
};

export default Home;