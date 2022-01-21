import React from 'react';
import people from "../../assets/People.jpg";
import signature from "../../assets/Signature.svg";
import decoration from "../../assets/Decoration.svg";

const AboutUs = () => {
    return (
        <>
            <section className="about-us">
                <div className="about-us--content">
                    <div className="title">
                        <h2 className="title-text">O nas</h2>
                        <img className="title-img" src={decoration} alt="decoration" />
                    </div>
                    <p className="content-text">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
                        turnip greens parsnip.
                    </p>
                    <img src={signature} alt="signature" />
                </div>
                <img className="about-us--img" src={people} alt="people" />
            </section>
        </>
    );
};

export default AboutUs;