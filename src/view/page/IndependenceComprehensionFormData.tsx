import React from "react";
import {
    Box,
    TextField,
    Button,
} from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";

export const IndependenceComprehension: React.FC = () => {
    const { independenceComprehensionFormData, setIndependenceComprehensionField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/historico-escolar");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/historico-patologico");
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
                label="Idade que começou a comer sozinho"
                variant="outlined"
                fullWidth
                value={independenceComprehensionFormData.startedEatingAloneAge || ""}
                onChange={(e) =>
                    setIndependenceComprehensionField("startedEatingAloneAge", e.target.value)
                }
            />

            <TextField
                label="Idade que começou a se vestir sozinho"
                variant="outlined"
                fullWidth
                value={independenceComprehensionFormData.startedDressingAloneAge || ""}
                onChange={(e) =>
                    setIndependenceComprehensionField("startedDressingAloneAge", e.target.value)
                }
            />

            <TextField
                label="Idade que começou a tomar banho sozinho"
                variant="outlined"
                fullWidth
                value={independenceComprehensionFormData.startedBathingAloneAge || ""}
                onChange={(e) =>
                    setIndependenceComprehensionField("startedBathingAloneAge", e.target.value)
                }
            />

            <TextField
                label="Idade que começou a identificar objetos"
                variant="outlined"
                fullWidth
                value={independenceComprehensionFormData.startedIdentifyingObjectsAge || ""}
                onChange={(e) =>
                    setIndependenceComprehensionField("startedIdentifyingObjectsAge", e.target.value)
                }
            />

            <TextField
                label="Observações"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                value={independenceComprehensionFormData.observations || ""}
                onChange={(e) =>
                    setIndependenceComprehensionField("observations", e.target.value)
                }
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button variant="outlined" color="primary" onClick={handleBack}>
                    Voltar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Avançar
                </Button>
            </Box>
        </Box>
    );
};
