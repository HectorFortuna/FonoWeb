import React from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
} from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";

export const PsychomotorDevelopment: React.FC = () => {
    const { psychomotorDevelopmentFormData, setPsychomotorDevelopmentField } =
        useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/pacientes/novo/desenvolvimento-linguagem");
    };

    const handleBack = () => {
        navigate("/pacientes/novo/sono");
    };

    const renderSelfCareRadioGroup = (
        label: string,
        field: keyof typeof psychomotorDevelopmentFormData
    ) => (
        <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                row
                value={psychomotorDevelopmentFormData[field] || ""}
                onChange={(e) => setPsychomotorDevelopmentField(field, e.target.value)}
            >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
                <FormControlLabel
                    value="com_dificuldade"
                    control={<Radio />}
                    label="Com dificuldade"
                />
            </RadioGroup>
        </FormControl>
    );


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
                label="Quando sustentou a cabeça"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.heldHeadUp || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("heldHeadUp", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.crawled || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("crawled", e.target.checked)
                        }
                    />
                }
                label="Rastejou"
            />

            <TextField
                label="Idade que começou a rastejar"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.crawledAge || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("crawledAge", e.target.value)
                }
            />

            <TextField
                label="Idade que começou a andar"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.walkedAge || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("walkedAge", e.target.value)
                }
            />

            <TextField
                label="Bebê mole ou firme"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.floppyOrFirmBaby || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("floppyOrFirmBaby", e.target.value)
                }
            />

            <TextField
                label="Frequência de quedas"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.fallingFrequency || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("fallingFrequency", e.target.value)
                }
            />

            <TextField
                label="Idade que pegou objetos"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.grabbedObjectsAge || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("grabbedObjectsAge", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.canJump || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("canJump", e.target.checked)
                        }
                    />
                }
                label="Sabe saltar"
            />

            <TextField
                label="Defeitos na marcha"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.walkingDefects || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("walkingDefects", e.target.value)
                }
            />

            <TextField
                label="Bom senso de direção"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.goodDirectionSense || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("goodDirectionSense", e.target.value)
                }
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.sphincterControl || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("sphincterControl", e.target.checked)
                        }
                    />
                }
                label="Controle do esfincter"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.bumpsIntoThings || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("bumpsIntoThings", e.target.checked)
                        }
                    />
                }
                label="Esbarra nas coisas"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.dropsThingsFromHands || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("dropsThingsFromHands", e.target.checked)
                        }
                    />
                }
                label="Deixa cair objetos das mãos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.agile || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("agile", e.target.checked)
                        }
                    />
                }
                label="Ágil"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.orthopedicProblems || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("orthopedicProblems", e.target.checked)
                        }
                    />
                }
                label="Problemas ortopédicos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.usedBoots || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("usedBoots", e.target.checked)
                        }
                    />
                }
                label="Usou botas ortopédicas"
            />

            <TextField
                label="Atividades diárias"
                variant="outlined"
                fullWidth
                value={psychomotorDevelopmentFormData.dailyActivities || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("dailyActivities", e.target.value)
                }
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.walksOnTiptoes || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("walksOnTiptoes", e.target.checked)
                        }
                    />
                }
                label="Caminha na ponta dos pés"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.swingsWhenWalking || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("swingsWhenWalking", e.target.checked)
                        }
                    />
                }
                label="Balança-se ao andar"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.hasBalanceIssues || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("hasBalanceIssues", e.target.checked)
                        }
                    />
                }
                label="Apresenta desequilíbrio"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.difficultyRunningClimbing || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("difficultyRunningClimbing", e.target.checked)
                        }
                    />
                }
                label="Dificuldade para correr e escalar"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.postureProblems || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("postureProblems", e.target.checked)
                        }
                    />
                }
                label="Problemas de postura"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.difficultyWithObjects || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("difficultyWithObjects", e.target.checked)
                        }
                    />
                }
                label="Dificuldade de manipular objetos com os dedos"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={psychomotorDevelopmentFormData.difficultyPlaying || false}
                        onChange={(e) =>
                            setPsychomotorDevelopmentField("difficultyPlaying", e.target.checked)
                        }
                    />
                }
                label="Dificuldade para jogar bola, correr, pular, chutar ou pedalar"
            />
            {renderSelfCareRadioGroup("Toma banho sozinha", "bathAlone")}
            {renderSelfCareRadioGroup("Escova os dentes sozinha", "brushesTeethAlone")}
            {renderSelfCareRadioGroup("Limpa-se sozinha", "cleansSelf")}
            {renderSelfCareRadioGroup("Ao cuidar da própria higiene se atrapalha com a sequência da tarefa", "difficultyWithHygieneSequence")}
            {renderSelfCareRadioGroup("Veste-se", "dressesSelf")}
            {renderSelfCareRadioGroup("Abotoa suas roupas", "buttonsClothes")}
            {renderSelfCareRadioGroup("Amarra cadarços", "tiesShoes")}

            <TextField
                label="Observações"
                variant="outlined"
                multiline
                minRows={3}
                fullWidth
                value={psychomotorDevelopmentFormData.observations || ""}
                onChange={(e) =>
                    setPsychomotorDevelopmentField("observations", e.target.value)
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
