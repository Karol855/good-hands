import React from 'react';
import { Link } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";

const LogOut = () => {
    return (
        <section className="logout">
            <div className="title">
                <h2 className="title__text">Wylogowano się pomyślnie!</h2>
                <img className="title__img" src={decoration} alt="Decoration" />
            </div>
            <Link to="/" className="button">
                Strona główna
            </Link>
        </section>
    );
};

export default LogOut;