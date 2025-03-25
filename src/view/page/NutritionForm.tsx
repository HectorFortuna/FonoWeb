import React from "react";
import {
    Box,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";

export const NutritionForm: React.FC = () => {
    const { nutritionFormData, setNutritionField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/sono");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/gestacao");
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
            {/* Amamentação materna */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.breastfeeding || false}
                        onChange={(e) =>
                            setNutritionField("breastfeeding", e.target.checked)
                        }
                    />
                }
                label="Amamentação materna"
            />

            <TextField
                label="Até quando amamentou"
                variant="outlined"
                fullWidth
                value={nutritionFormData.breastfeedingDuration || ""}
                onChange={(e) =>
                    setNutritionField("breastfeedingDuration", e.target.value)
                }
            />

            {/* Alimentação artificial */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.artificialFeeding || false}
                        onChange={(e) =>
                            setNutritionField("artificialFeeding", e.target.checked)
                        }
                    />
                }
                label="Alimentação artificial"
            />

            <TextField
                label="Até quando alimentou"
                variant="outlined"
                fullWidth
                value={nutritionFormData.artificialFeedingDuration || ""}
                onChange={(e) =>
                    setNutritionField("artificialFeedingDuration", e.target.value)
                }
            />

            {/* Sucção / deglutição */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.goodSuctionSwallowing || false}
                        onChange={(e) =>
                            setNutritionField("goodSuctionSwallowing", e.target.checked)
                        }
                    />
                }
                label="Boa sucção/deglutição"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.choking || false}
                        onChange={(e) => setNutritionField("choking", e.target.checked)}
                    />
                }
                label="Engasgos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.vomiting || false}
                        onChange={(e) => setNutritionField("vomiting", e.target.checked)}
                    />
                }
                label="Vômitos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.forcedEat || false}
                        onChange={(e) => setNutritionField("forcedEat", e.target.checked)}
                    />
                }
                label="Comer forçado"
            />

            {/* Alimentação atual */}
            <TextField
                label="Alimentação atual"
                variant="outlined"
                fullWidth
                value={nutritionFormData.currentFeeding || ""}
                onChange={(e) =>
                    setNutritionField("currentFeeding", e.target.value)
                }
            />

            {/* Observações */}
            <TextField
                label="Observações"
                variant="outlined"
                multiline
                minRows={3}
                fullWidth
                value={nutritionFormData.observations || ""}
                onChange={(e) =>
                    setNutritionField("observations", e.target.value)
                }
            />

            {/* Botões de navegação */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                }}
            >
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
