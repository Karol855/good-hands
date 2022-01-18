import React from 'react';
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";
import AboutApp from "../pages/AboutApp";

const TopMenu = () => {
    return (
        <>
            <header className="header-container">
                <div className="header-container--small">
                    <nav className="header-navigation">
                        <ul className="header-nav--1">
                            <li>
                                <Link to="/logowanie">Zaloguj</Link>
                            </li>
                            <li>
                                <Link className="yellow-link" to="/rejestracja">Załóż konto</Link></li>
                        </ul>
                        <ul className="header-nav--2">
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <ScrollLink
                                    activeClass="active"
                                    className="scroll-links"
                                    to="about-app"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                > O co chodzi
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    activeClass="active"
                                    className="scroll-links"
                                    to="about-us"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                > O nas
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    activeClass="active"
                                    className="scroll-links"
                                    to="fundations-and--orgaznizations"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                > Fundacja i organizacje
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    activeClass="active"
                                    className="scroll-links"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                > Kontakt
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default TopMenu;