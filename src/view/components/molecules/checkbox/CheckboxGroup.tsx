import React from "react";
import styles from "./CheckboxGroup.module.css";

interface CheckboxGroupProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className={styles.checkboxGroup}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <label htmlFor={name} className={styles.label}>{label}</label>
    </div>
  );
};
