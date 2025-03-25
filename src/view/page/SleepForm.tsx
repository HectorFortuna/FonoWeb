import React from "react";
import {
    Box,
    Button,
    FormControlLabel,
    Checkbox,
    TextField,
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
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.normal || false}
                        onChange={(e) => setSleepField("normal", e.target.checked)}
                    />
                }
                label="Normal"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.restless || false}
                        onChange={(e) => setSleepField("restless", e.target.checked)}
                    />
                }
                label="Agitado"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.talksDuringSleep || false}
                        onChange={(e) =>
                            setSleepField("talksDuringSleep", e.target.checked)
                        }
                    />
                }
                label="Fala enquanto dorme"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.nocturnalEnuresis || false}
                        onChange={(e) =>
                            setSleepField("nocturnalEnuresis", e.target.checked)
                        }
                    />
                }
                label="Enurese noturna"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.teethGrinding || false}
                        onChange={(e) =>
                            setSleepField("teethGrinding", e.target.checked)
                        }
                    />
                }
                label="Range os dentes"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.sleepwalking || false}
                        onChange={(e) =>
                            setSleepField("sleepwalking", e.target.checked)
                        }
                    />
                }
                label="Sonambulismo"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sleepFormData.sleepsWithMouthOpen || false}
                        onChange={(e) =>
                            setSleepField("sleepsWithMouthOpen", e.target.checked)
                        }
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
