import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore} from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";


export const LanguageDevelopment: React.FC = () => {
    const{ languageDevelopmentFormData, setLanguageDevelopmentField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/phatological-history-form");
    };

    const handleBack = () => {
        navigate("/psychomotor-development-form");
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>

            <FormGroup type="text" name="babbled" placeholder="Quando começou a balbuciar" value={languageDevelopmentFormData.babbled || ""} onChange={(e) => setLanguageDevelopmentField("babbled", e.target.value)} />

            <FormGroup type="text" name="syllableRepetition" placeholder="Repetição de sílabas" value={languageDevelopmentFormData.syllableRepetition || ""} onChange={(e) => setLanguageDevelopmentField("syllableRepetition", e.target.value)} />

            <FormGroup type="text" name="wordsWithMeaning" placeholder="Palavras com significado" value={languageDevelopmentFormData.wordsWithMeaning || ""} onChange={(e) => setLanguageDevelopmentField("wordsWithMeaning", e.target.value)} />

            <FormGroup type="text" name="simpleCompleteSentenes" placeholder="Frases simples completas" value={languageDevelopmentFormData.simpleCompleteSentences || ""} onChange={(e) => setLanguageDevelopmentField("simpleCompleteSentences", e.target.value)} />

            <FormGroup type="text" name="understoodByAllWhen" placeholder="Entendido por todos quando" value={languageDevelopmentFormData.understoodByAllWhen || ""} onChange={(e) => setLanguageDevelopmentField("understoodByAllWhen", e.target.value)} />

            <FormGroup type="text" name="stutteredAround" placeholder="Gaguejou em torno de" value={languageDevelopmentFormData.stutteredAround || ""} onChange={(e) => setLanguageDevelopmentField("stutteredAround", e.target.value)} />

            <label>
                Entende comandos:
                <input type="checkbox" checked={languageDevelopmentFormData.understandsCommands} onChange={(e) => setLanguageDevelopmentField("understandsCommands", e.target.checked)} />
            </label>

            <label>
                Emite sons primitivos:
                <input type="checkbox" checked={languageDevelopmentFormData.emitsPrimitiveSound} onChange={(e) => setLanguageDevelopmentField("emitsPrimitiveSound", e.target.checked)} />
            </label>

            <label>
                Linguagem entendida:
                <input type="checkbox" checked={languageDevelopmentFormData.languageUnderstood} onChange={(e) => setLanguageDevelopmentField("languageUnderstood", e.target.checked)} />
            </label>
            

            <label>
                Usa gestos:
                <input type="checkbox" checked={languageDevelopmentFormData.usesGesture} onChange={(e) => setLanguageDevelopmentField("usesGesture", e.target.checked)} />
            </label>

            <label>
                Canta:
                <input type="checkbox" checked={languageDevelopmentFormData.sings} onChange={(e) => setLanguageDevelopmentField("sings", e.target.checked)} />
            </label>

            <label>
                Conhece músicas:
                <input type="checkbox" checked={languageDevelopmentFormData.knowsSongs} onChange={(e) => setLanguageDevelopmentField("knowsSongs", e.target.checked)} />

            </label>

            <FormGroup type="text" name="observations" placeholder="Observações" value={languageDevelopmentFormData.observations || ""} onChange={(e) => setLanguageDevelopmentField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
            

        </form>
    )
};