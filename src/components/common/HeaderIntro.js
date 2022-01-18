import React from 'react';
import {Link} from "react-router-dom";
import heroImg from "../../assets/Home-Hero-Image.jpg"
import decoration from "../../assets/Decoration.svg"

const HeaderIntro = () => {
    return (
        <section className="header-intro">
            <img className="header-intro--img" src={heroImg} alt="home hero"/>
            <div className="header-intro--content">
                <h1 className="content-title">
                    Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img className="decoration" src={decoration} alt="title decoration"/>
                <div className="header-intro-btns">
                    <Link className="button" to="/logowanie">
                        <span>ODDAJ RZECZY</span>
                    </Link>
                    <Link className="button" to="/logowanie">
                        <span>ZORGANIZUJ ZBIÓRKĘ</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeaderIntro;