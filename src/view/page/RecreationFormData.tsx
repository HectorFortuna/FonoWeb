import React from "react";
import {
    Box,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
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
            {/* Atividades e brinquedos favoritos */}
            <TextField
                label="Atividades e brinquedos favoritos"
                variant="outlined"
                fullWidth
                value={recreationFormData.favoriteActivitiesAndToys || ""}
                onChange={(e) =>
                    setRecreationField("favoriteActivitiesAndToys", e.target.value)
                }
            />

            {/* Tem amigos (Checkbox) */}
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

            {/* Livros e programas de TV favoritos */}
            <TextField
                label="Livros e programas de TV favoritos"
                variant="outlined"
                fullWidth
                value={recreationFormData.favoriteBooksAndTvShows || ""}
                onChange={(e) =>
                    setRecreationField("favoriteBooksAndTvShows", e.target.value)
                }
            />

            {/* Opera consistentemente objetos/brinquedos */}
            <FormControl>
                <FormLabel>
                    Opera consistentemente objetos/brinquedos (aperta/gira botões,
                    abre/fecha tampas, etc.)
                </FormLabel>
                <RadioGroup
                    row // para ficar lado a lado (Sim, Não, Ocasionalmente)
                    name="operateConsistently"
                    value={recreationFormData.operateConsistently || ""}
                    onChange={(e) =>
                        setRecreationField("operateConsistently", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            {/* Exploração típica */}
            <TextField
                label="Exploração típica - Exemplo"
                variant="outlined"
                fullWidth
                value={recreationFormData.typicalExploration || ""}
                onChange={(e) => setRecreationField("typicalExploration", e.target.value)}
            />

            {/* Exploração atípica */}
            <TextField
                label="Exploração atípica - Exemplo"
                variant="outlined"
                fullWidth
                value={recreationFormData.atypicalExploration || ""}
                onChange={(e) => setRecreationField("atypicalExploration", e.target.value)}
            />

            {/* Brincadeira funcional (Checkbox, se continuar usando) */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={recreationFormData.functionalPlay || false}
                        onChange={(e) =>
                            setRecreationField("functionalPlay", e.target.checked)
                        }
                    />
                }
                label="Brincadeira funcional"
            />

            {/* Brinca de faz de conta usando miniaturas */}
            <FormControl>
                <FormLabel>
                    Brinca de faz de conta usando miniaturas
                </FormLabel>
                <RadioGroup
                    row
                    name="pretendPlayMiniatures"
                    value={recreationFormData.pretendPlayMiniatures || ""}
                    onChange={(e) =>
                        setRecreationField("pretendPlayMiniatures", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            {/* Brinca de faz de conta usando um objeto como se fosse outro */}
            <FormControl>
                <FormLabel>
                    Brinca de faz de conta usando um objeto como se fosse outro
                </FormLabel>
                <RadioGroup
                    row
                    name="pretendPlayObjects"
                    value={recreationFormData.pretendPlayObjects || ""}
                    onChange={(e) =>
                        setRecreationField("pretendPlayObjects", e.target.value)
                    }
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            {/* Brinca de faz de conta atribuindo papéis a si mesmo e aos outros */}
            <FormControl>
                <FormLabel>
                    Brinca de faz de conta atribuindo diferentes papéis
                    (médico/enfermeira, professora, etc.)
                </FormLabel>
                <RadioGroup
                    row
                    name="pretendPlayRoles"
                    value={recreationFormData.pretendPlayRoles || ""}
                    onChange={(e) => setRecreationField("pretendPlayRoles", e.target.value)}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    <FormControlLabel
                        value="Ocasionalmente"
                        control={<Radio />}
                        label="Ocasionalmente"
                    />
                </RadioGroup>
            </FormControl>

            {/* Observações */}
            <TextField
                label="Observações"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                value={recreationFormData.observations || ""}
                onChange={(e) => setRecreationField("observations", e.target.value)}
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
