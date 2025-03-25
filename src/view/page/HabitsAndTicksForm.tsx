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

export const HabitsAndTicks: React.FC = () => {
    const { habitsAndTicksFormData, setHabitsAndTicksField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/relacao-familiar");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/recreacao");
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
                label="Usou chupeta?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.usedPacifier || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("usedPacifier", e.target.value)
                }
            />

            <TextField
                label="Como a chupeta foi tirada?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.pacifierRemovalMethod || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("pacifierRemovalMethod", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={habitsAndTicksFormData.suckedThumb || false}
                        onChange={(e) =>
                            setHabitsAndTicksField("suckedThumb", e.target.checked)
                        }
                    />
                }
                label="Chupou dedo"
            />

            <TextField
                label="Qual mão?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.thumbHand || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("thumbHand", e.target.value)
                }
            />

            <TextField
                label="Até quando chupou o dedo?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.thumbSuckingDuration || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("thumbSuckingDuration", e.target.value)
                }
            />

            <TextField
                label="Como parou de chupar o dedo?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.thumbSuckingRemovalMethod || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("thumbSuckingRemovalMethod", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={habitsAndTicksFormData.bitesNails || false}
                        onChange={(e) =>
                            setHabitsAndTicksField("bitesNails", e.target.checked)
                        }
                    />
                }
                label="Roe as unhas"
            />

            <TextField
                label="De qual mão?"
                fullWidth
                variant="outlined"
                value={habitsAndTicksFormData.nailBitingHand || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("nailBitingHand", e.target.value)
                }
            />

            <TextField
                label="Observações"
                fullWidth
                variant="outlined"
                multiline
                minRows={3}
                value={habitsAndTicksFormData.observations || ""}
                onChange={(e) =>
                    setHabitsAndTicksField("observations", e.target.value)
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
