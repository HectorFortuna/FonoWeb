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

export const SleepForm: React.FC = () => {
    const { sleepFormData, setSleepField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/desenvolvimento-psicomotor");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/nutricao");
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
            {/* BLOCO NOVO - Quando bebê */}
            <Box sx={{ fontWeight: "bold", mt: 1 }}>Quando bebê</Box>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.asBabyNoProblems || false}
                        onChange={(e) => setSleepField("asBabyNoProblems", e.target.checked)}
                    />
                }
                label="Sem problemas"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.asBabySleptAlone || false}
                        onChange={(e) => setSleepField("asBabySleptAlone", e.target.checked)}
                    />
                }
                label="Dormia sozinho"
            />

            <TextField
                label="Dividia cama/quarto com quem?"
                variant="outlined"
                fullWidth
                value={sleepFormData.asBabySharedWith || ""}
                onChange={(e) => setSleepField("asBabySharedWith", e.target.value)}
            />

            <TextField
                label="Dificuldade para conciliar o sono (bebê)"
                variant="outlined"
                multiline
                minRows={2}
                fullWidth
                value={sleepFormData.asBabySleepDifficulties || ""}
                onChange={(e) => setSleepField("asBabySleepDifficulties", e.target.value)}
            />

            {/* BLOCO NOVO - Atualmente */}
            <Box sx={{ fontWeight: "bold", mt: 3 }}>Atualmente</Box>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.currentNoProblems || false}
                        onChange={(e) => setSleepField("currentNoProblems", e.target.checked)}
                    />
                }
                label="Sem problemas"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.currentSleptAlone || false}
                        onChange={(e) => setSleepField("currentSleptAlone", e.target.checked)}
                    />
                }
                label="Dorme sozinho"
            />

            <TextField
                label="Dividia cama/quarto com quem?"
                variant="outlined"
                fullWidth
                value={sleepFormData.currentSharedWith || ""}
                onChange={(e) => setSleepField("currentSharedWith", e.target.value)}
            />

            <TextField
                label="Dificuldade para conciliar o sono (atualmente)"
                variant="outlined"
                multiline
                minRows={2}
                fullWidth
                value={sleepFormData.currentSleepDifficulties || ""}
                onChange={(e) => setSleepField("currentSleepDifficulties", e.target.value)}
            />

            {/* SEUS CAMPOS ORIGINAIS MANTIDOS */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.normal || false}
                        onChange={(e) => setSleepField("normal", e.target.checked)}
                    />
                }
                label="Sono Normal"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.restless || false}
                        onChange={(e) => setSleepField("restless", e.target.checked)}
                    />
                }
                label="Sono Agitado"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.talksDuringSleep || false}
                        onChange={(e) => setSleepField("talksDuringSleep", e.target.checked)}
                    />
                }
                label="Fala enquanto dorme"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.nocturnalEnuresis || false}
                        onChange={(e) => setSleepField("nocturnalEnuresis", e.target.checked)}
                    />
                }
                label="Enurese noturna"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.teethGrinding || false}
                        onChange={(e) => setSleepField("teethGrinding", e.target.checked)}
                    />
                }
                label="Range os dentes"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.sleepwalking || false}
                        onChange={(e) => setSleepField("sleepwalking", e.target.checked)}
                    />
                }
                label="Sonambulismo"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.sleepsWithMouthOpen || false}
                        onChange={(e) => setSleepField("sleepsWithMouthOpen", e.target.checked)}
                    />
                }
                label="Dorme com a boca aberta"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.drools || false}
                        onChange={(e) => setSleepField("drools", e.target.checked)}
                    />
                }
                label="Baba enquanto dorme"
            />

            <TextField
                label="Observações"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                value={sleepFormData.observations || ""}
                onChange={(e) => setSleepField("observations", e.target.value)}
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
