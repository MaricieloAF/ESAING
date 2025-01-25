"use client"; // Esto marca el archivo como un cliente componente

import React, { useState } from "react";
import { FaGlobe, FaCaretDown } from "react-icons/fa"; // Iconos
import styles from "./LanguageSelector.module.css"; // Estilos específicos del Language Selector

const LanguageSelector: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Español");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <div className={styles.languageToggle} onClick={toggleDropdown}>
        <FaGlobe className={styles.globeIcon} />
        <span className={styles.language}>{selectedLanguage}</span>
        <FaCaretDown
          className={`${styles.caretIcon} ${dropdownOpen ? styles.active : ""}`}
        />
      </div>
      {dropdownOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={() => selectLanguage("Español")}>Español</li>
          <li onClick={() => selectLanguage("English")}>English</li>
          <li onClick={() => selectLanguage("Français")}>Français</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
