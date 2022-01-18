import React from 'react';
import HomeThreeColumns from "./HomeThreeColumns";
import AboutApp from "./AboutApp";
import AboutUs from "./AboutUs";
import FoundationsAndOrganizations from "./FoundationsAndOrganizations";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <HomeThreeColumns />
            <AboutApp/>
            <AboutUs/>
            <FoundationsAndOrganizations/>
            <Contact/>
        </>
    );
};

export default Home;