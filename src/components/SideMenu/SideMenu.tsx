import React from "react";
import styles from "./SideMenu.module.css";
import { FaTimes } from "react-icons/fa"; // Ícono para cerrar el menú

interface SideMenuProps {
  isOpen: boolean; // Estado para abrir/cerrar el menú
  onClose: () => void; // Función para cerrar el menú
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar menú">
          <FaTimes />
        </button>
      </div>
      <ul className={styles.navList}>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#industrias">Industrias</a></li>
        <li><a href="#publicaciones">Publicaciones</a></li>
        <li><a href="#conocenos">Conózcanos</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;
