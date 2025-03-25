import React from "react";
import {
    Box,
    TextField,
    Button,
} from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import { submitForm } from "data/network/AnamneseService";

export const FamilyInterrelationForm: React.FC = () => {
    const {
        familyInterrelationFormData,
        setFamilyInterrelationField,
    } = useFormStore();

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/pacientes/novo/habitos-e-tiques");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("📡 Enviando dados...");

        try {
            await submitForm(); // aqui você pode passar os dados se necessário
            console.log("✅ Formulário enviado com sucesso!");
        } catch (error) {
            console.error("❌ Erro ao enviar:", error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
                p: 3,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 600,
                margin: "40px auto",
            }}
        >
            <TextField
                label="Relação com o pai"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipFather || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipFather", e.target.value)
                }
            />

            <TextField
                label="Relação com a mãe"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipMother || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipMother", e.target.value)
                }
            />

            <TextField
                label="Relação com os irmãos"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipSiblings || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipSiblings", e.target.value)
                }
            />

            <TextField
                label="Relação com outras pessoas"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipOthers || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipOthers", e.target.value)
                }
            />

            <TextField
                label="Observações"
                fullWidth
                variant="outlined"
                multiline
                minRows={3}
                value={familyInterrelationFormData.observations || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("observations", e.target.value)
                }
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button variant="outlined" color="primary" onClick={handleBack}>
                    Voltar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </Box>
        </Box>
    );
};
