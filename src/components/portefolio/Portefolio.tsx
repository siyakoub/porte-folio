import React from "react";
import './css/portefolio.scss';
import Logo from '../../assets/img/logoLayer7.png';
import LogoS from '../../assets/img/logoSoigneMoi.png';
import LogoO from '../../assets/img/logoOneForce.png';

const Portefolio: React.FC = () => {

    const handleLayer7 = (): void => {
        // Par exemple, naviguer vers une page dédiée au projet Layer7
        document.location.href = "https://layer7.fr/"
    }

    const handleSoigneMoi = () => {
        document.location.href = "https://github.com/siyakoub/soignemoifrontweb/tree/main"
    }

    const handleOneForce = () => {
        document.location.href = "https://github.com/siyakoub/one_force_reno_vitrine";
    }

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">PorteFolio</h2>
            <p className="portfolio__intro">
                Découvrez mes réalisations où design, performance et innovation se
                rencontrent. Chaque projet est pensé pour offrir une expérience
                utilisateur fluide, un code optimisé et une interface moderne.
            </p>
            <p className="portfolio__intro--sub">
                📌 Explorez mes projets et laissez-vous inspirer!
            </p>

            {/* Grille de projets */}
            <div className="portfolio__gallery">
                <div className="portfolio__item" onClick={handleLayer7}>
                    <img src={Logo} alt="Projet 1" />
                </div>
                <div className="portfolio__item" onClick={handleSoigneMoi}>
                    <img src={LogoS} alt="Projet 2" />
                </div>
                <div className="portfolio__item" onClick={handleOneForce}>
                    <img src={LogoO} alt="Projet 2" />
                </div>
            </div>
        </section>
    );
}

export default Portefolio;
