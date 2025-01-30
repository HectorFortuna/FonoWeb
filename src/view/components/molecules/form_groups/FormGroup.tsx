import React from "react";
import styles from "./FormGroups.module.css";

interface FormGroupProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};