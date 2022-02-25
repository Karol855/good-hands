import React from 'react';
import HeaderIntro from "../common/HeaderIntro";

const HomeThreeColumns = () => {
    return (
        <>
            <HeaderIntro />
            <section className="home-three--columns">
                <div className="container">
                    <div className="column">
                        <span className="column-number">10</span>
                        <h2 className="column-title">ODDANYCH WORKÓW</h2>
                        <span className="column-text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                            enim a elit viverra elementuma. Aliquam erat volutpat.
                        </span>
                    </div>
                    <div className="column">
                        <span className="column-number">5</span>
                        <h2 className="column-title">WSPARTYCH ORGANIZACJI</h2>
                        <span className="column-text">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.
              </span>
                    </div>
                    <div className="column">
                        <span className="column-number">7</span>
                        <h2 className="column-title">ZORGANIZOWANY ZBIÓREK</h2>
                        <span className="column-text">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.
              </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeColumns;