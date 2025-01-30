
import React from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input
        type= {type}
        name = {name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};
