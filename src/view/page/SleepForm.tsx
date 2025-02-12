import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";


export const SleepForm = () => {
    const { sleepFormData, setSleepField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/psychomotor-development-form");
    };

    const handleBack = () => {
        navigate("/nutrition-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {/* Campos do formulário */}

            <CheckboxGroup
                name="normal"
                label="Normal"
                checked={sleepFormData.normal || false}
                onChange={(e) => setSleepField("normal", e.target.checked)}
            />
            <CheckboxGroup
                name="restless"
                label="Agitado"
                checked={sleepFormData.restless || false}
                onChange={(e) => setSleepField("restless", e.target.checked)}
            />
            <CheckboxGroup
                name="talksDuringSleep"
                label="Fala enquanto dorme"
                checked={sleepFormData.talksDuringSleep || false}
                onChange={(e) => setSleepField("talksDuringSleep", e.target.checked)}
            />
            <CheckboxGroup
                name="nocturnalEnuresis"
                label="Enurese noturna"
                checked={sleepFormData.nocturnalEnuresis || false}
                onChange={(e) => setSleepField("nocturnalEnuresis", e.target.checked)}
            />
            <CheckboxGroup
                name="teethGrinding"
                label="Range os dentes"
                checked={sleepFormData.teethGrinding || false}
                onChange={(e) => setSleepField("teethGrinding", e.target.checked)}
            />
            <CheckboxGroup
                name="sleepwalking"
                label="Sonambulismo"
                checked={sleepFormData.sleepwalking || false}
                onChange={(e) => setSleepField("sleepwalking", e.target.checked)}
            />
            <CheckboxGroup
                name="sleepsWithMouthOpen"
                label="Dorme com a boca aberta"
                checked={sleepFormData.sleepsWithMouthOpen || false}
                onChange={(e) => setSleepField("sleepsWithMouthOpen", e.target.checked)}
            />
            <CheckboxGroup
                name="drools"
                label="Baba enquanto dorme"
                checked={sleepFormData.drools || false}
                onChange={(e) => setSleepField("drools", e.target.checked)}
            />

            <FormGroup type="text" name="observations" placeholder="Observações" value={sleepFormData.observations || ""} onChange={(e) => setSleepField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
}