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

export const PhatologicalHistory: React.FC = () => {
    const {
        phatologicalHistoryFormData,
        setPhatologicalHistoryField,
    } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/independencia");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/desenvolvimento-linguagem");
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
                        checked={phatologicalHistoryFormData.physicalMalformations || false}
                        onChange={(e) =>
                            setPhatologicalHistoryField("physicalMalformations", e.target.checked)
                        }
                    />
                }
                label="Malformações físicas"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.measles || false}
                        onChange={(e) => setPhatologicalHistoryField("measles", e.target.checked)}
                    />
                }
                label="Sarampo"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.smallpox || false}
                        onChange={(e) => setPhatologicalHistoryField("smallpox", e.target.checked)}
                    />
                }
                label="Varíola"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.highFever || false}
                        onChange={(e) => setPhatologicalHistoryField("highFever", e.target.checked)}
                    />
                }
                label="Febre alta"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.fallsBlows || false}
                        onChange={(e) => setPhatologicalHistoryField("fallsBlows", e.target.checked)}
                    />
                }
                label="Quedas/Golpes"
            />

            <TextField
                label="Transtornos psicossomáticos"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.psychosomaticDisorders || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("psychosomaticDisorders", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.tonsilsAdenoids || false}
                        onChange={(e) =>
                            setPhatologicalHistoryField("tonsilsAdenoids", e.target.checked)
                        }
                    />
                }
                label="Amígdalas/Adenoides"
            />

            <TextField
                label="Operações realizadas"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.operationsDone || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("operationsDone", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.seesWell || false}
                        onChange={(e) => setPhatologicalHistoryField("seesWell", e.target.checked)}
                    />
                }
                label="Vê bem"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.wearsGlasses || false}
                        onChange={(e) => setPhatologicalHistoryField("wearsGlasses", e.target.checked)}
                    />
                }
                label="Usa óculos"
            />

            <TextField
                label="Motivo da consulta com optometrista"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.optometristReason || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("optometristReason", e.target.value)
                }
            />

            <TextField
                label="Resultado da consulta com optometrista"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.optometristResult || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("optometristResult", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={phatologicalHistoryFormData.hearingProblems || false}
                        onChange={(e) =>
                            setPhatologicalHistoryField("hearingProblems", e.target.checked)
                        }
                    />
                }
                label="Problemas auditivos"
            />

            <TextField
                label="Qual ouvido?"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.whichEar || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("whichEar", e.target.value)
                }
            />

            <TextField
                label="Como entende?"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.howUnderstand || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("howUnderstand", e.target.value)
                }
            />

            <TextField
                label="Fez terapia?"
                fullWidth
                variant="outlined"
                value={phatologicalHistoryFormData.attendedTherapy || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("attendedTherapy", e.target.value)
                }
            />

            <TextField
                label="Observações"
                fullWidth
                variant="outlined"
                multiline
                minRows={3}
                value={phatologicalHistoryFormData.observations || ""}
                onChange={(e) =>
                    setPhatologicalHistoryField("observations", e.target.value)
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
