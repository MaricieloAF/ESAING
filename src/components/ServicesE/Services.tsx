import React from "react";
import styles from "./Services.module.css";
import { FaLightbulb, FaHandsHelping, FaBuilding, FaCity } from "react-icons/fa"; // Ejemplo de íconos

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaLightbulb className={styles.icon} />,
      title: "Planificación Estratégica",
      description: "Creamos estrategias a medida para alcanzar objetivos empresariales sostenibles.",
    },
    {
      icon: <FaHandsHelping className={styles.icon} />,
      title: "Asistencia Técnica",
      description: "Ofrecemos soporte técnico experto para resolver tus desafíos más complejos.",
    },
    {
      icon: <FaBuilding className={styles.icon} />,
      title: "Fortalecimiento Organizacional",
      description: "Impulsamos el desarrollo y la eficiencia de tu organización.",
    },
    {
      icon: <FaCity className={styles.icon} />,
      title: "Infraestructura y Desarrollo Urbano",
      description: "Diseñamos soluciones urbanísticas innovadoras y sostenibles.",
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Servicios Destacados</h2>
      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton}>Conoce más sobre nuestros servicios</button>
      </div>
    </section>
  );
};

export default Services;
