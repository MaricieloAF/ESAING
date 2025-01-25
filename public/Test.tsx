"use client"; // Necesario para manejar estados en el cliente

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import SideMenu from "@/components/SideMenu/SideMenu";
import Button from "@/components/Button/Button"; // Tu componente Button
import { FaBars } from "react-icons/fa"; // Icono de menú hamburguesa

const Header: React.FC = () => {
  // Estado para manejar la apertura/cierre del menú lateral
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Alterna entre abierto y cerrado
  };

  const handleContactClick = () => {
    alert("¡Pongámonos en contacto!"); // Acción temporal
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo-esaing.png"
          alt="Esaing Logo"
          className={styles.logo}
          width={100}
          height={40}
        />
      </div>

      {/* Navegación Principal */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#perspectivas">Perspectivas</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#industrias">Industrias</a></li>
          <li><a href="#acerca">Acerca de ESAING</a></li>
        </ul>
      </nav>

      {/* Acciones */}
      <div className={styles.actions}>
        {/* Botón de Contacto */}
        <Button
          label="Pongámonos en contacto"
          onClick={handleContactClick}
          className={styles.contactButton}
        />
        
        {/* Botón Hamburguesa */}
        <Button
          label={<FaBars />} // Pasamos el ícono como contenido
          onClick={toggleMenu}
          className={styles.menuButton}
          ariaLabel="Abrir menú" // Accesibilidad
        />
      </div>

      {/* Menú Lateral */}
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
