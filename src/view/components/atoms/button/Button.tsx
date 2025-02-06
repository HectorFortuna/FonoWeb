import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary" | "danger"; 
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", className, variant = "primary", disabled }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled} 
    >
      {label}
    </button>
  );
};
