import React, {useState} from "react";
import './css/contact.scss';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Ajoute ici la logique pour envoyer le message (ex: API ou email service)
    };

    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">📩 Contactez-moi</h2>
            <p className="contact__intro">
                Une idée, un projet ou simplement envie d’échanger ? Discutons ensemble ! 🚀
            </p>
            <p className="contact__description">
                Que ce soit pour du UI/UX Design, du Web Design ou du développement
                d’applications, je suis à votre disposition pour collaborer et créer des solutions innovantes.
            </p>
            <p className="contact__cta">📩 Envoyez-moi un message et donnons vie à vos idées !</p>

            {/* Formulaire */}
            <form className="contact__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom Complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Commentaire"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;
