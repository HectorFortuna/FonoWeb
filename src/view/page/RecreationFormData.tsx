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

export const RecreationForm: React.FC = () => {
    const { recreationFormData, setRecreationField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/habitos-e-tiques");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/historico-escolar");
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
                label="Atividades e brinquedos favoritos"
                variant="outlined"
                fullWidth
                value={recreationFormData.favoriteActivitiesAndToys || ""}
                onChange={(e) =>
                    setRecreationField("favoriteActivitiesAndToys", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={recreationFormData.adaptsHasFriends || false}
                        onChange={(e) =>
                            setRecreationField("adaptsHasFriends", e.target.checked)
                        }
                    />
                }
                label="Tem amigos"
            />

            <TextField
                label="Livros e programas de TV favoritos"
                variant="outlined"
                fullWidth
                value={recreationFormData.favoriteBooksAndTvShows || ""}
                onChange={(e) =>
                    setRecreationField("favoriteBooksAndTvShows", e.target.value)
                }
            />

            <TextField
                label="Observações"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                value={recreationFormData.observations || ""}
                onChange={(e) =>
                    setRecreationField("observations", e.target.value)
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
