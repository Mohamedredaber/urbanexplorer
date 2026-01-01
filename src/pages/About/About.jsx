import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>À propos de nous</h1>
        <p>
          Bienvenue sur notre application ! Nous sommes passionnés par le
          développement web et la création de solutions modernes et utiles.
        </p>
      </section>

      <section className="about-content">
        <h2>Notre mission</h2>
        <p>
          Offrir des applications simples, performantes et accessibles, en
          mettant l’accent sur l’expérience utilisateur et les bonnes pratiques
          du développement.
        </p>

        <h2>Ce que nous faisons</h2>
        <ul>
          <li>🚀 Développement d’applications web modernes</li>
          <li>🎨 Interfaces claires et responsives</li>
          <li>🔐 Respect des bonnes pratiques et de la sécurité</li>
          <li>📚 Apprentissage continu et innovation</li>
        </ul>

        <h2>Notre vision</h2>
        <p>
          Construire des projets qui apportent de la valeur et aider les
          développeurs à progresser chaque jour.
        </p>
      </section>
    </div>
  );
}

export default About;
