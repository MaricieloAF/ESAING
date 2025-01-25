"use client"; // Necesario si el botón tiene interactividad en el cliente

import Image from "next/image";
import React from "react";
import LanguageSelector from "@/components/Header/LanguageSelector/LanguageSelector";
import Button from "@/components/Button/Button";
import styles from "@/components/Header/Header.module.css";
const Header: React.FC = () => {

  const handleContactClick = () => {
    alert("¡Pongámonos en contacto!"); // Acción temporal
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo-esaing.png"
          alt="EsaingLogo"
          className={styles.logo}
          width={60} // Ancho específico
          height={40} // Alto específico
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#perspectivas">Perspectivas</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#industrias">Industrias</a></li>
          <li><a href="#acerca">Acerca de ESAING</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
      <Button
          label="Pongámonos en contacto"
          onClick={handleContactClick} // Usamos la función aquí
          className={styles.contactButton} // Clase opcional para estilos específicos
        />
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
