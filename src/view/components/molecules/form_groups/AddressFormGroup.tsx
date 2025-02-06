import React from "react";
import { FormGroup } from "./FormGroup";

interface Address {
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  cep?: string;
}

interface AddressFormGroupProps {
  index: number;
  address: Address;
  onAddressChange: (index: number, field: keyof Address, value: string) => void;
}

export const AddressFormGroup: React.FC<AddressFormGroupProps> = ({ index, address, onAddressChange }) => {
  return (
    <div>
      <FormGroup
        type="text"
        name={`street-${index}`}
        placeholder="Rua"
        value={address.street || ""} // ✅ Agora sempre terá um valor válido
        onChange={(e) => onAddressChange(index, "street", e.target.value)}
      />
      <FormGroup
        type="text"
        name={`number-${index}`}
        placeholder="Número"
        value={address.number || ""} // ✅ Corrigindo o erro de `undefined`
        onChange={(e) => onAddressChange(index, "number", e.target.value)}
      />
      <FormGroup
        type="text"
        name={`neighborhood-${index}`}
        placeholder="Bairro"
        value={address.neighborhood || ""}
        onChange={(e) => onAddressChange(index, "neighborhood", e.target.value)}
      />
      <FormGroup
        type="text"
        name={`city-${index}`}
        placeholder="Cidade"
        value={address.city || ""}
        onChange={(e) => onAddressChange(index, "city", e.target.value)}
      />
      <FormGroup
        type="text"
        name={`state-${index}`}
        placeholder="Estado"
        value={address.state || ""}
        onChange={(e) => onAddressChange(index, "state", e.target.value)}
      />
      <FormGroup
        type="text"
        name={`cep-${index}`}
        placeholder="CEP"
        value={address.cep || ""}
        onChange={(e) => onAddressChange(index, "cep", e.target.value)}
      />
    </div>
  );
};
