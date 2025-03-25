import React from "react";
import { AddressFormGroup } from "../components/molecules/address/AddressFormGroup";
import { Box, Button } from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";

export const AddressForm: React.FC = () => {
    const { formData, setAddress, addAddress, removeAddress } = useFormStore();
    const navigate = useNavigate();

    const [forceUpdate, setForceUpdate] = React.useState(0);

    const handleSetAddress = () => {
        addAddress();
        setForceUpdate((prev) => prev + 1);
    };

    const handleRemoveAddress = (index: number) => {
        removeAddress(index);
        setForceUpdate((prev) => prev + 1);
    };

    const addresses = formData.address && formData.address.length > 0
        ? formData.address
        : [{ street: "", number: "", neighborhood: "", city: "", state: "", cep: "" }];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        navigate("/pacientes/novo/gestacao");
    };

    const handleBack = () => {
        navigate("/pacientes/novo");
    };

    return (
        console.log("Dados do formulário ao abrir a tela", formData),
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
                p: 3, // padding interno
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 600,
                margin: "40px auto", // centraliza horizontalmente e adiciona espaço vertical
            }}
        >
            {addresses.map((address, index) => (
                <AddressFormGroup
                    key={index}
                    index={index}
                    address={address}
                    onAddressChange={setAddress}
                />
            ))}

            {/* Botões Remover / Adicionar Endereço */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                    mt: 2,
                }}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveAddress(addresses.length - 1)}
                    disabled={addresses.length <= 1}
                >
                    Remover Endereço
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleSetAddress}
                >
                    Adicionar Endereço
                </Button>
            </Box>

            {/* Botões Voltar / Avançar */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleBack}
                >
                    Voltar
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Avançar
                </Button>
            </Box>
        </Box>
    );
};
