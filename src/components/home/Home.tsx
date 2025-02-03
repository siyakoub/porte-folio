import React from 'react';
import './css/home.scss';

const Home: React.FC = () => {
    return (
        <section className="hero">
            {/* Colonne gauche : Textes */}
            <div className="hero__content">
                <p className="hero__hello">Hello,</p>
                <h1 className="hero__title">
                    Je suis <span className="hero__highlight">Mourad</span>
                </h1>
                <h2 className="hero__subtitle">Développeur Full-Stack</h2>
                <p className="hero__desc">
                    &#127919; Codeur, créateur, innovateur – Je transforme des idées
                    en applications fluides, rapides et scalables, du front-end au back-end.
                </p>
            </div>

            {/* Colonne droite : Image */}
            <div className="hero__image">
                {/* Remplace ceci par ton <img src="..." alt="moi" /> */}
            </div>
        </section>
    );
};

export default Home;
