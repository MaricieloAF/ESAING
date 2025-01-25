"use client"; // Necesario si el botón tiene interactividad en el cliente

import React from "react";
import styles from "./Hero.module.css";
import Button from "@/components/Button/Button";

const Hero: React.FC = () => {

  const handleContactClick = () => {
    alert("Go services"); // Acción temporal
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Impulsando Comunidades, Transformando Futuro</h1>
        <p className={styles.subtitle}>
        Con más de 16 años de experiencia, lideramos el desarrollo sostenible en comunidades y organizaciones a través de soluciones innovadoras en agricultura, medio ambiente y gestión de proyectos.
        </p>
        <Button
          label="Pongámonos en contacto"
          onClick={handleContactClick} // Usamos la función aquí
          className={styles.ctaButton} // Clase opcional para estilos específicos
        />
      </div>
      <div className={styles.imageContainer}>
      </div>
    </section>
  );
};

export default Hero;
