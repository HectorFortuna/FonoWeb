import React from "react";
import styles from "./FormGroups.module.css";

interface FormGroupProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "date";
  name: string;
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className={styles.formGroup}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        required={required}
      />
    </div>
  );
};
