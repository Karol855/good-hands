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
                    <Link className="button-give" to="/logowanie">
                        <span>ODDAJ <br/> RZECZY</span>
                    </Link>
                    <Link className="button-make" to="/logowanie">
                        <span>ZORGANIZUJ <br/> ZBIÓRKĘ</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeaderIntro;