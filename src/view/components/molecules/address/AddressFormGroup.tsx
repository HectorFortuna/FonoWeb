import React from "react";
import { Box, TextField } from "@mui/material";

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

export const AddressFormGroup: React.FC<AddressFormGroupProps> = ({
  index,
  address,
  onAddressChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: 1,
        p: 2,
      }}
    >
      <TextField
        label="Rua"
        variant="outlined"
        value={address.street ?? ""}
        onChange={(e) => onAddressChange(index, "street", e.target.value)}
        fullWidth
      />
      <TextField
        label="Número"
        variant="outlined"
        value={address.number ?? ""}
        onChange={(e) => onAddressChange(index, "number", e.target.value)}
        fullWidth
      />
      <TextField
        label="Bairro"
        variant="outlined"
        value={address.neighborhood ?? ""}
        onChange={(e) => onAddressChange(index, "neighborhood", e.target.value)}
        fullWidth
      />
      <TextField
        label="Cidade"
        variant="outlined"
        value={address.city ?? ""}
        onChange={(e) => onAddressChange(index, "city", e.target.value)}
        fullWidth
      />
      <TextField
        label="Estado"
        variant="outlined"
        value={address.state ?? ""}
        onChange={(e) => onAddressChange(index, "state", e.target.value)}
        fullWidth
      />
      <TextField
        label="CEP"
        variant="outlined"
        value={address.cep ?? ""}
        onChange={(e) => onAddressChange(index, "cep", e.target.value)}
        fullWidth
      />
    </Box>
  );
};
