import React from "react";
import './css/about.scss';

const About: React.FC = () => {
    return (
        <section className="about">
            <h2 className="about__title">À propos de moi</h2>

            <p className="about__intro">
                Bienvenue ! Je suis <strong>Mourad</strong>, un Développeur Full Stack
                passionné par le code, l’innovation et l’optimisation. Mon quotidien ?
                Transformer des idées en expériences numériques fluides, performantes et intuitives.
            </p>

            <p className="about__vision">
                💡 <strong>Ma vision ?</strong> Un bon développement, c’est un équilibre
                entre technologie, design et performance. Chaque ligne de code que
                j’écris est pensée pour être efficace, scalable et sécurisée.
            </p>

            <h3 className="about__stack-title">🎯 Mon stack</h3>
            <ul className="about__stack">
                <li>💻 Front-end → React, Angular, Flutter</li>
                <li>⚙️ Back-end → Python (Flask, Django), Java (Spring Boot), Node.js, PHP</li>
                <li>💾 Bases de données → PostgreSQL, MySQL, Oracle, MongoDB</li>
                <li>☁️ Cloud & DevOps → Docker, CI/CD, Terraform, AWS, Azure, Google Cloud Platform</li>
            </ul>

            <h3 className="about__why-title">📌 Pourquoi moi ?</h3>
            <ul className="about__why">
                <li>✅ Expérience polyvalente : du web au mobile, du développement à l’infrastructure</li>
                <li>✅ Orienté performance : j’optimise chaque détail pour une expérience fluide</li>
                <li>✅ Toujours à jour : je suis passionné par les nouvelles technologies et l’apprentissage continu</li>
            </ul>

            <p className="about__conclusion">
                Prêt à collaborer sur un projet ambitieux ? <br />
                👉 Let’s build something great together !
            </p>
        </section>
    );
}

export default About;
