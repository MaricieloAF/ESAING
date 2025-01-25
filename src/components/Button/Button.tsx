"use client"; // Necesario si el botón tiene interactividad en el cliente

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string; // Texto que aparecerá en el botón
  onClick?: () => void; // Función opcional al hacer clic
  className?: string; // Clase CSS opcional para estilos adicionales
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ""}`} // Permite estilos adicionales desde fuera
    >
      {label}
    </button>
  );
};

export default Button;
