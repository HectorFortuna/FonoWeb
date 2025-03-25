import React from "react";
import {
    Box,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";

export const SchoolHistory: React.FC = () => {
    const { schoolHistoryFormData, setSchoolHistoryField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/recreacao");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/independencia");
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
            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.doesWellSchool || false}
                        onChange={(e) => setSchoolHistoryField("doesWellSchool", e.target.checked)}
                    />
                }
                label="Tem bom desempenho na escola"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.likesStudy || false}
                        onChange={(e) => setSchoolHistoryField("likesStudy", e.target.checked)}
                    />
                }
                label="Gosta de estudar"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.parentsStudyChild || false}
                        onChange={(e) => setSchoolHistoryField("parentsStudyChild", e.target.checked)}
                    />
                }
                label="Pais estudam com a criança"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.arithmeticDifficulties || false}
                        onChange={(e) => setSchoolHistoryField("arithmeticDifficulties", e.target.checked)}
                    />
                }
                label="Dificuldade em aritmética"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.writingDifficulties || false}
                        onChange={(e) => setSchoolHistoryField("writingDifficulties", e.target.checked)}
                    />
                }
                label="Dificuldades na escrita"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.hasBeenHeldBack || false}
                        onChange={(e) => setSchoolHistoryField("hasBeenHeldBack", e.target.checked)}
                    />
                }
                label="Já repetiu de ano"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.attendedKindergarten || false}
                        onChange={(e) => setSchoolHistoryField("attendedKindergarten", e.target.checked)}
                    />
                }
                label="Frequentou jardim de infância"
            />

            <TextField
                label="Motivo da repetência"
                fullWidth
                variant="outlined"
                value={schoolHistoryFormData.reasoBeingHeldBack || ""}
                onChange={(e) => setSchoolHistoryField("reasoBeingHeldBack", e.target.value)}
            />

            <TextField
                label="Idade que frequentou o jardim de infância"
                fullWidth
                variant="outlined"
                value={schoolHistoryFormData.kindergartenAge || ""}
                onChange={(e) => setSchoolHistoryField("kindergartenAge", e.target.value)}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={schoolHistoryFormData.changedSchoolsOften || false}
                        onChange={(e) => setSchoolHistoryField("changedSchoolsOften", e.target.checked)}
                    />
                }
                label="Muda de escola frequentemente"
            />

            <TextField
                label="Série atual"
                fullWidth
                variant="outlined"
                value={schoolHistoryFormData.currentGrade || ""}
                onChange={(e) => setSchoolHistoryField("currentGrade", e.target.value)}
            />

            <TextField
                label="Escola atual"
                fullWidth
                variant="outlined"
                value={schoolHistoryFormData.currentSchool || ""}
                onChange={(e) => setSchoolHistoryField("currentSchool", e.target.value)}
            />

            <TextField
                label="Observações"
                fullWidth
                multiline
                minRows={3}
                variant="outlined"
                value={schoolHistoryFormData.observations || ""}
                onChange={(e) => setSchoolHistoryField("observations", e.target.value)}
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
