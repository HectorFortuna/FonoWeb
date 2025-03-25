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

export const LanguageDevelopment: React.FC = () => {
    const { languageDevelopmentFormData, setLanguageDevelopmentField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/historico-patologico");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/desenvolvimento-psicomotor");
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
                label="Quando começou a balbuciar"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.babbled || ""}
                onChange={(e) => setLanguageDevelopmentField("babbled", e.target.value)}
            />

            <TextField
                label="Repetição de sílabas"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.syllableRepetition || ""}
                onChange={(e) => setLanguageDevelopmentField("syllableRepetition", e.target.value)}
            />

            <TextField
                label="Palavras com significado"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.wordsWithMeaning || ""}
                onChange={(e) => setLanguageDevelopmentField("wordsWithMeaning", e.target.value)}
            />

            <TextField
                label="Frases simples completas"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.simpleCompleteSentences || ""}
                onChange={(e) => setLanguageDevelopmentField("simpleCompleteSentences", e.target.value)}
            />

            <TextField
                label="Entendido por todos quando"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.understoodByAllWhen || ""}
                onChange={(e) => setLanguageDevelopmentField("understoodByAllWhen", e.target.value)}
            />

            <TextField
                label="Gaguejou em torno de"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.stutteredAround || ""}
                onChange={(e) => setLanguageDevelopmentField("stutteredAround", e.target.value)}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={languageDevelopmentFormData.understandsCommands || false}
                        onChange={(e) => setLanguageDevelopmentField("understandsCommands", e.target.checked)}
                    />
                }
                label="Entende comandos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={languageDevelopmentFormData.emitsPrimitiveSound || false}
                        onChange={(e) => setLanguageDevelopmentField("emitsPrimitiveSound", e.target.checked)}
                    />
                }
                label="Emite sons primitivos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={languageDevelopmentFormData.languageUnderstood || false}
                        onChange={(e) => setLanguageDevelopmentField("languageUnderstood", e.target.checked)}
                    />
                }
                label="Linguagem entendida"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={languageDevelopmentFormData.usesGesture || false}
                        onChange={(e) => setLanguageDevelopmentField("usesGesture", e.target.checked)}
                    />
                }
                label="Usa gestos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={languageDevelopmentFormData.sings || false}
                        onChange={(e) => setLanguageDevelopmentField("sings", e.target.checked)}
                    />
                }
                label="Canta"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={languageDevelopmentFormData.knowsSongs || false}
                        onChange={(e) => setLanguageDevelopmentField("knowsSongs", e.target.checked)}
                    />
                }
                label="Conhece músicas"
            />

            <TextField
                label="Observações"
                fullWidth
                multiline
                minRows={3}
                variant="outlined"
                value={languageDevelopmentFormData.observations || ""}
                onChange={(e) => setLanguageDevelopmentField("observations", e.target.value)}
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
