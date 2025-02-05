import React from "react";
import { FormGroup } from "./FormGroup";
import styles from "./AddressFormGroup.module.css";

interface AddressFormGroupProps {
  index: number;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
  };
  onAddressChange: (index: number, field: string, value: string) => void;
}

export const AddressFormGroup: React.FC<AddressFormGroupProps> = ({ index, address, onAddressChange }) => {
  return (
    <div className={styles.addressContainer}>
      <FormGroup type="text" name={`street-${index}`} placeholder="Rua" value={address.street} onChange={(e) => onAddressChange(index, "street", e.target.value)} />
      <FormGroup type="text" name={`number-${index}`} placeholder="Número" value={address.number} onChange={(e) => onAddressChange(index, "number", e.target.value)} />
      <FormGroup type="text" name={`neighborhood-${index}`} placeholder="Bairro" value={address.neighborhood} onChange={(e) => onAddressChange(index, "neighborhood", e.target.value)} />
      <FormGroup type="text" name={`city-${index}`} placeholder="Cidade" value={address.city} onChange={(e) => onAddressChange(index, "city", e.target.value)} />
      <FormGroup type="text" name={`state-${index}`} placeholder="Estado" value={address.state} onChange={(e) => onAddressChange(index, "state", e.target.value)} />
      <FormGroup type="text" name={`cep-${index}`} placeholder="CEP" value={address.cep} onChange={(e) => onAddressChange(index, "cep", e.target.value)} />
    </div>
  );
};
