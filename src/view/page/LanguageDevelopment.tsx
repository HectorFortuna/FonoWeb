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

            {/* Página 48 - Linguagem/Comunicação */}
            <TextField
                label="Idade das primeiras vocalizações"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.firstVocalizationsAge || ""}
                onChange={(e) => setLanguageDevelopmentField("firstVocalizationsAge", e.target.value)}
            />

            <TextField
                label="Idade das primeiras palavras (Quais?)"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.firstWords || ""}
                onChange={(e) => setLanguageDevelopmentField("firstWords", e.target.value)}
            />

            <TextField
                label="Idade das primeiras frases (Exemplos)"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.firstSentences || ""}
                onChange={(e) => setLanguageDevelopmentField("firstSentences", e.target.value)}
            />

            <TextField
                label="Houve algum atraso no aparecimento da fala?"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.speechDelay || ""}
                onChange={(e) => setLanguageDevelopmentField("speechDelay", e.target.value)}
            />

            {/* Página 49 - Gestos */}
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureHelp || false} onChange={(e) => setLanguageDevelopmentField("gestureHelp", e.target.checked)} />}
                label="Apontar para solicitar ajuda"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureShare || false} onChange={(e) => setLanguageDevelopmentField("gestureShare", e.target.checked)} />}
                label="Apontar para compartilhar"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureNodYes || false} onChange={(e) => setLanguageDevelopmentField("gestureNodYes", e.target.checked)} />}
                label="Assentimento com a cabeça"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureNodNo || false} onChange={(e) => setLanguageDevelopmentField("gestureNodNo", e.target.checked)} />}
                label="Negação com a cabeça"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureWave || false} onChange={(e) => setLanguageDevelopmentField("gestureWave", e.target.checked)} />}
                label="Abanar"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureBlowKiss || false} onChange={(e) => setLanguageDevelopmentField("gestureBlowKiss", e.target.checked)} />}
                label="Assoprar beijos"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureImitate || false} onChange={(e) => setLanguageDevelopmentField("gestureImitate", e.target.checked)} />}
                label='Imitar "gracinhas"'
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureClap || false} onChange={(e) => setLanguageDevelopmentField("gestureClap", e.target.checked)} />}
                label="Bater palmas"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureLiftArms || false} onChange={(e) => setLanguageDevelopmentField("gestureLiftArms", e.target.checked)} />}
                label="Levantar os braços para pedir colo"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.gestureShakeFingerNo || false} onChange={(e) => setLanguageDevelopmentField("gestureShakeFingerNo", e.target.checked)} />}
                label='Sacudir o dedo para dizer "não"'
            />

            {/* Padrão de Comunicação */}
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.looksWhenPointed || false} onChange={(e) => setLanguageDevelopmentField("looksWhenPointed", e.target.checked)} />}
                label="Olha quando apontam para algo"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.usesAdultHand || false} onChange={(e) => setLanguageDevelopmentField("usesAdultHand", e.target.checked)} />}
                label="Usa a mão do adulto para abrir ou alcançar"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.answersToName || false} onChange={(e) => setLanguageDevelopmentField("answersToName", e.target.checked)} />}
                label="Atende ao nome"
            />

            <TextField
                label="Como é a articulação e a pronúncia? Há dificuldade de entendimento?"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.speechArticulation || ""}
                onChange={(e) => setLanguageDevelopmentField("speechArticulation", e.target.value)}
            />

            <TextField
                label="Como é o ritmo e entonação da fala?"
                fullWidth
                variant="outlined"
                value={languageDevelopmentFormData.speechRhythm || ""}
                onChange={(e) => setLanguageDevelopmentField("speechRhythm", e.target.value)}
            />

            {/* Estereotipias de fala */}
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.echolalia || false} onChange={(e) => setLanguageDevelopmentField("echolalia", e.target.checked)} />}
                label="Repete a última palavra ou frase ouvida (ecolalia)"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.repeatsPhrases || false} onChange={(e) => setLanguageDevelopmentField("repeatsPhrases", e.target.checked)} />}
                label="Repete frases ouvidas anteriormente"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.pronounConfusion || false} onChange={(e) => setLanguageDevelopmentField("pronounConfusion", e.target.checked)} />}
                label="Confunde eu/tu/ele"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.inventsWords || false} onChange={(e) => setLanguageDevelopmentField("inventsWords", e.target.checked)} />}
                label="Inventa palavras ou frases"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.strangeWordCombinations || false} onChange={(e) => setLanguageDevelopmentField("strangeWordCombinations", e.target.checked)} />}
                label="Combina palavras de forma estranha"
            />
            <FormControlLabel
                control={<Checkbox checked={languageDevelopmentFormData.insistsOnRepetition || false} onChange={(e) => setLanguageDevelopmentField("insistsOnRepetition", e.target.checked)} />}
                label="Insiste em repetir palavras ou frases da mesma forma"
            />

            {/* Reação ao ser contrariado */}
            <TextField
                label="Como reage quando contrariado?"
                fullWidth
                multiline
                minRows={2}
                variant="outlined"
                value={languageDevelopmentFormData.reactionWhenContradicted || ""}
                onChange={(e) => setLanguageDevelopmentField("reactionWhenContradicted", e.target.value)}
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
