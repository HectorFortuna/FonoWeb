import React from "react";
import {
    Box,
    Button,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import { submitForm } from "data/network/AnamneseService";

export const FamilyInterrelationForm: React.FC = () => {
    const {
        familyInterrelationFormData,
        setFamilyInterrelationField,
    } = useFormStore();

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/pacientes/novo/habitos-e-tiques");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("📡 Enviando dados...");
        try {
            await submitForm();
            console.log("✅ Formulário enviado com sucesso!");
        } catch (error) {
            console.error("❌ Erro ao enviar:", error);
        }
    };

    const renderRadioGroup = (
        label: string,
        field: keyof typeof familyInterrelationFormData
    ) => (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                row
                value={familyInterrelationFormData[field] || ""}
                onChange={(e) => setFamilyInterrelationField(field, e.target.value)}
            >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
                <FormControlLabel
                    value="ocasionalmente"
                    control={<Radio />}
                    label="Ocasionalmente"
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
                label="Relação com o pai"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipFather || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipFather", e.target.value)
                }
            />

            <TextField
                label="Relação com a mãe"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipMother || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipMother", e.target.value)
                }
            />

            <TextField
                label="Relação com os irmãos"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipSiblings || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipSiblings", e.target.value)
                }
            />

            <TextField
                label="Relação com outras pessoas"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.relationshipOthers || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("relationshipOthers", e.target.value)
                }
            />
            {renderRadioGroup("Apresentou orientação da cabeça para o adulto?", "headOrientationToAdult")}
            {renderRadioGroup("Sorriso a pessoas familiares", "smilesAtFamiliarPeople")}
            {renderRadioGroup("Sorriso a pessoas não familiares", "smilesAtUnfamiliarPeople")}
            {renderRadioGroup("Sorriso em resposta a outro sorriso", "smilesInResponse")}
            {renderRadioGroup("Variação na expressão facial", "facialExpressionVariation")}
            {renderRadioGroup("Expressa emoções de forma adequada", "emotionalExpressionContext")}
            {renderRadioGroup("É carinhoso(a)", "isAffectionate")}
            {renderRadioGroup("Compartilha atividades prazerosas", "sharesPleasure")}
            {renderRadioGroup("Demonstra preocupação com os pais", "caresAboutParents")}
            {renderRadioGroup("Mostra ou aponta objetos por interesse", "jointAttentionPointing")}
            {renderRadioGroup("Faz comentários com gestos ou fala", "commentsGesturesOrSpeech")}
            {renderRadioGroup("Olha onde o outro aponta", "followsPointing")}
            {renderRadioGroup("Responde ao convite para brincar", "respondsToPlayInvitation")}
            {renderRadioGroup("Inicia interação com outras crianças", "initiatesWithChildren")}
            {renderRadioGroup("Responde mas não inicia interação", "respondsButNoInitiative")}
            {renderRadioGroup("Fica ansioso com outras crianças", "anxiousWithChildren")}
            {renderRadioGroup("Só brinca de forma estereotipada", "stereotypedPlayOnly")}
            {renderRadioGroup("Prefere brincar com um a um", "prefersPairPlay")}
            {renderRadioGroup("Fica ansioso com pessoas estranhas", "anxiousWithStrangers")}
            {renderRadioGroup("Evita contato com estranhos", "avoidsStrangerContact")}
            {renderRadioGroup("Agride de forma persistente", "persistentAggression")}
            {renderRadioGroup("Desinibição social excessiva", "excessiveDisinhibition")}
            {renderRadioGroup("Varia comportamento com contexto", "contextualBehaviorVariation")}
            {renderRadioGroup("Demonstra preocupação na separação", "worriesWhenApart")}
            {renderRadioGroup("Sorri quando os pais retornam", "smilesAtParentsReturn")}
            {renderRadioGroup("Busca ajuda dos pais quando machuca", "asksParentsForHelp")}
            {renderRadioGroup("Checa presença dos pais em locais novos", "checksParentsInNewPlaces")}

            <TextField
                label="Adaptação na escolinha/creche"
                fullWidth
                variant="outlined"
                value={familyInterrelationFormData.schoolAdaptation || ""}
                onChange={(e) => setFamilyInterrelationField("schoolAdaptation", e.target.value)}
            />


            <TextField
                label="Observações"
                fullWidth
                variant="outlined"
                multiline
                minRows={3}
                value={familyInterrelationFormData.observations || ""}
                onChange={(e) =>
                    setFamilyInterrelationField("observations", e.target.value)
                }
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button variant="outlined" color="primary" onClick={handleBack}>
                    Voltar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </Box>
        </Box>
    );
};
