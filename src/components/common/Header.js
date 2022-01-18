import React from 'react';
import {Link} from "react-router-dom";
import TopMenu from "./TopMenu";
import HeaderIntro from "./HeaderIntro";

const Header = () => {
    return (
        <>
            <TopMenu />
            <HeaderIntro />
        </>
    );
};

export default Header;