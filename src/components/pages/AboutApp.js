import React from 'react';
import { Link } from "react-router-dom";
import shirt from "../../assets/Icon-1.svg";
import bag from "../../assets/Icon-2.svg";
import magnifier from "../../assets/Icon-3.svg";
import reload from "../../assets/Icon-4.svg";
import decoration from "../../assets/Decoration.svg";

const AboutApp = () => {
    return (
        <section className="about-app--main">
            <div className="title">
                <h2 className="title-text">Wystarczą 4 proste kroki</h2>
                <img className="title-img" src={decoration} alt="decoration" />
            </div>
            <div className="about-app">
                <div className="about-app--container">
                    <div className="about-app--content">
                        <img src={shirt} alt="shirt icon" />
                        <h3>Wybierz rzeczy</h3>
                        <span>ubrania, zabawki, sprzęt i inne</span>
                    </div>
                    <div className="about-app--content">
                        <img src={bag} alt="bag icon" />
                        <h3>Spakuj je</h3>
                        <span>skorzystaj z worków na śmieci</span>
                    </div>
                    <div className="about-app--content">
                        <img src={magnifier} alt="magnifier icon" />
                        <h3>
                            Zdecyduj komu <br />
                            chcesz pomóc
                        </h3>
                        <span>wybierz zaufane miejsce</span>
                    </div>
                    <div className="about-app--content">
                        <img src={reload} alt="reload icon" />
                        <h3>Zamów kuriera</h3>
                        <span>kurier przyjedzie w dogodnym terminie</span>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <Link className="button-give--second" to="/logowanie">
                    <span>ODDAJ <br/> RZECZY</span>
                </Link>
            </div>
        </section>
    );
};

export default AboutApp;