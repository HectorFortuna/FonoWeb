import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";

export const IndependenceComprehension: React.FC = () => {
    const { independenceComprehensionFormData, setIndependenceComprehensionField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/school-history-form");
    };

    const handleBack = () => {
        navigate("/phatological-history-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormGroup type="text" name="startedEatingAloneAge" placeholder="Idade que começou a comer sozinho" value={independenceComprehensionFormData.startedEatingAloneAge || ""} onChange={(e) => setIndependenceComprehensionField("startedEatingAloneAge", e.target.value)} />

            <FormGroup type="text" name="startedDressingAloneAge" placeholder="Idade que começou a se vestir sozinho" value={independenceComprehensionFormData.startedDressingAloneAge || ""} onChange={(e) => setIndependenceComprehensionField("startedDressingAloneAge", e.target.value)} />

            <FormGroup type="text" name="startedBathingAloneAge" placeholder="Idade que começou a tomar banho sozinho" value={independenceComprehensionFormData.startedBathingAloneAge || ""} onChange={(e) => setIndependenceComprehensionField("startedBathingAloneAge", e.target.value)} />

            <FormGroup type="text" name="startedIdentifyingObjectsAge" placeholder="Idade que começou a identificar objetos" value={independenceComprehensionFormData.startedIdentifyingObjectsAge || ""} onChange={(e) => setIndependenceComprehensionField("startedIdentifyingObjectsAge", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={independenceComprehensionFormData.observations || ""} onChange={(e) => setIndependenceComprehensionField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};
