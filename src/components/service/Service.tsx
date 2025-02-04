import React from "react";
import './css/service.scss';
import uiuxImg from '../../assets/img/uiuxDesign.png';
import webImg from '../../assets/img/webDesign.png';
import appImg from '../../assets/img/appDesign.png';

const Service: React.FC = () => {
    return (
        <section className="services" id="service">
            <h2 className="services__title">Services</h2>

            <div className="services__container">
                {/* Service 1 */}
                <div className="service">
                    <div className="service__image-wrapper">
                        <img src={uiuxImg} alt="UI/UX Design" className="service__image" />
                    </div>
                    <div className="service__content">
                        <h3 className="service__name">🎨 UI/UX Design</h3>
                        <p className="service__desc">
                            Je conçois des interfaces intuitives et esthétiques en mettant
                            l’utilisateur au cœur de l’expérience. Mon objectif : créer des
                            designs ergonomiques, engageants et accessibles, alliant créativité
                            et performance.
                        </p>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="service">
                    <div className="service__image-wrapper">
                        <img src={webImg} alt="Web Design" className="service__image" />
                    </div>
                    <div className="service__content">
                        <h3 className="service__name">🖥 Web Design</h3>
                        <p className="service__desc">
                            Du site vitrine à la plateforme interactive, je développe des sites
                            modernes, rapides et responsifs. Un design soigné, une navigation fluide
                            et une performance optimisée sont au cœur de mon approche.
                        </p>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="service">
                    <div className="service__image-wrapper">
                        <img src={appImg} alt="App Design" className="service__image" />
                    </div>
                    <div className="service__content">
                        <h3 className="service__name">📱 App Design</h3>
                        <p className="service__desc">
                            Je crée des applications mobiles et web fluides et performantes,
                            en harmonisant design et fonctionnalité. Expérience utilisateur,
                            interactivité et réactivité sont les piliers de mes conceptions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
