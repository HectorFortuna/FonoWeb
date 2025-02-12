import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";


export const LanguageDevelopment: React.FC = () => {
    const { languageDevelopmentFormData, setLanguageDevelopmentField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/phatological-history-form");
    };

    const handleBack = () => {
        navigate("/psychomotor-development-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <FormGroup type="text" name="babbled" placeholder="Quando começou a balbuciar" value={languageDevelopmentFormData.babbled || ""} onChange={(e) => setLanguageDevelopmentField("babbled", e.target.value)} />

            <FormGroup type="text" name="syllableRepetition" placeholder="Repetição de sílabas" value={languageDevelopmentFormData.syllableRepetition || ""} onChange={(e) => setLanguageDevelopmentField("syllableRepetition", e.target.value)} />

            <FormGroup type="text" name="wordsWithMeaning" placeholder="Palavras com significado" value={languageDevelopmentFormData.wordsWithMeaning || ""} onChange={(e) => setLanguageDevelopmentField("wordsWithMeaning", e.target.value)} />

            <FormGroup type="text" name="simpleCompleteSentenes" placeholder="Frases simples completas" value={languageDevelopmentFormData.simpleCompleteSentences || ""} onChange={(e) => setLanguageDevelopmentField("simpleCompleteSentences", e.target.value)} />

            <FormGroup type="text" name="understoodByAllWhen" placeholder="Entendido por todos quando" value={languageDevelopmentFormData.understoodByAllWhen || ""} onChange={(e) => setLanguageDevelopmentField("understoodByAllWhen", e.target.value)} />

            <FormGroup type="text" name="stutteredAround" placeholder="Gaguejou em torno de" value={languageDevelopmentFormData.stutteredAround || ""} onChange={(e) => setLanguageDevelopmentField("stutteredAround", e.target.value)} />

            <CheckboxGroup
                name="understandsCommands" label="Entende comandos" checked={languageDevelopmentFormData.understandsCommands || false} onChange={(e) => setLanguageDevelopmentField("understandsCommands", e.target.checked)}
            />

            <CheckboxGroup
                name="emitsPrimitiveSound"
                label="Emite sons primitivos"
                checked={languageDevelopmentFormData.emitsPrimitiveSound || false}
                onChange={(e) => setLanguageDevelopmentField("emitsPrimitiveSound", e.target.checked)}
            />

            <CheckboxGroup
                name="languageUnderstood"
                label="Linguagem entendida"
                checked={languageDevelopmentFormData.languageUnderstood || false}
                onChange={(e) => setLanguageDevelopmentField("languageUnderstood", e.target.checked)}
            />

            <CheckboxGroup
                name="usesGesture"
                label="Usa gestos"
                checked={languageDevelopmentFormData.usesGesture || false}
                onChange={(e) => setLanguageDevelopmentField("usesGesture", e.target.checked)}
            />

            <CheckboxGroup
                name="sings"
                label="Canta"
                checked={languageDevelopmentFormData.sings || false}
                onChange={(e) => setLanguageDevelopmentField("sings", e.target.checked)}
            />

            <CheckboxGroup
                name="knowsSongs"
                label="Conhece músicas"
                checked={languageDevelopmentFormData.knowsSongs || false}
                onChange={(e) => setLanguageDevelopmentField("knowsSongs", e.target.checked)}
            />
            <FormGroup type="text" name="observations" placeholder="Observações" value={languageDevelopmentFormData.observations || ""} onChange={(e) => setLanguageDevelopmentField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>


        </form>
    )
};