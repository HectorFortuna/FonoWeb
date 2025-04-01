// NutritionForm.tsx
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

            {/* Novos campos do PDF */}

            <TextField
                label="Como foi o desmame? (idade e circunstâncias)"
                variant="outlined"
                fullWidth
                value={nutritionFormData.weaning || ""}
                onChange={(e) => setNutritionField("weaning", e.target.value)}
            />

            <TextField
                label="Tomou mamadeira? Se sim, idade:"
                variant="outlined"
                fullWidth
                value={nutritionFormData.bottleFeedingAge || ""}
                onChange={(e) => setNutritionField("bottleFeedingAge", e.target.value)}
            />

            <TextField
                label="Introdução de sólidos: idade"
                variant="outlined"
                fullWidth
                value={nutritionFormData.solidFoodIntroductionAge || ""}
                onChange={(e) => setNutritionField("solidFoodIntroductionAge", e.target.value)}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.acceptsDifferentTextures || false}
                        onChange={(e) =>
                            setNutritionField("acceptsDifferentTextures", e.target.checked)
                        }
                    />
                }
                label="Aceita sólidos de diferentes consistências"
            />

            <TextField
                label="Apresenta problemas na alimentação (ex: mastigação, apetite, voracidade)"
                variant="outlined"
                fullWidth
                multiline
                minRows={2}
                value={nutritionFormData.feedingIssuesDescription || ""}
                onChange={(e) => setNutritionField("feedingIssuesDescription", e.target.value)}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={nutritionFormData.foodSelectivity || false}
                        onChange={(e) =>
                            setNutritionField("foodSelectivity", e.target.checked)
                        }
                    />
                }
                label="Apresenta particularidades em relação à comida (ex: hiperseletividade)"
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
