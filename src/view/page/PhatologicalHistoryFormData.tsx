import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";

export const PhatologicalHistory: React.FC = () => {
    const { phatologicalHistoryFormData, setPhatologicalHistoryField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/independence-form");
    };

    const handleBack = () => {
        navigate("/language-development-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <CheckboxGroup
                name="physicalMalformations"
                label="Malformações físicas"
                checked={phatologicalHistoryFormData.physicalMalformations || false}
                onChange={(e) => setPhatologicalHistoryField("physicalMalformations", e.target.checked)}
            />

            <CheckboxGroup
                name="measles"
                label="Sarampo"
                checked={phatologicalHistoryFormData.measles || false}
                onChange={(e) => setPhatologicalHistoryField("measles", e.target.checked)}
            />

            <CheckboxGroup
                name="smallpox"
                label="Varíola"
                checked={phatologicalHistoryFormData.smallpox || false}
                onChange={(e) => setPhatologicalHistoryField("smallpox", e.target.checked)}
            />

            <CheckboxGroup
                name="highFever"
                label="Febre alta"
                checked={phatologicalHistoryFormData.highFever || false}
                onChange={(e) => setPhatologicalHistoryField("highFever", e.target.checked)}
            />

            <CheckboxGroup
                name="fallsBlows"
                label="Quedas/Golpes"
                checked={phatologicalHistoryFormData.fallsBlows || false}
                onChange={(e) => setPhatologicalHistoryField("fallsBlows", e.target.checked)}
            />


            <FormGroup type="text" name="psychosomaticDisorders" placeholder="Transtornos psicossomáticos" value={phatologicalHistoryFormData.psychosomaticDisorders || ""} onChange={(e) => setPhatologicalHistoryField("psychosomaticDisorders", e.target.value)} />

            <CheckboxGroup
                name="tonsilsAdenoids"
                label="Amígdalas/Adenoides"
                checked={phatologicalHistoryFormData.tonsilsAdenoids || false}
                onChange={(e) => setPhatologicalHistoryField("tonsilsAdenoids", e.target.checked)}
            />


            <FormGroup type="text" name="operationsDone" placeholder="Operações realizadas" value={phatologicalHistoryFormData.operationsDone || ""} onChange={(e) => setPhatologicalHistoryField("operationsDone", e.target.value)} />

            <CheckboxGroup
                name="seesWell"
                label="Vê bem"
                checked={phatologicalHistoryFormData.seesWell || false}
                onChange={(e) => setPhatologicalHistoryField("seesWell", e.target.checked)}
            />

            <CheckboxGroup
                name="wearsGlasses"
                label="Usa óculos"
                checked={phatologicalHistoryFormData.wearsGlasses || false}
                onChange={(e) => setPhatologicalHistoryField("wearsGlasses", e.target.checked)}
            />

            <FormGroup type="text" name="optometristReason" placeholder="Motivo da consulta com optometrista" value={phatologicalHistoryFormData.optometristReason || ""} onChange={(e) => setPhatologicalHistoryField("optometristReason", e.target.value)} />

            <FormGroup type="text" name="optometristResult" placeholder="Resultado da consulta com optometrista" value={phatologicalHistoryFormData.optometristResult || ""} onChange={(e) => setPhatologicalHistoryField("optometristResult", e.target.value)} />

            <CheckboxGroup
                name="hearingProblems"
                label="Problemas auditivos"
                checked={phatologicalHistoryFormData.hearingProblems || false}
                onChange={(e) => setPhatologicalHistoryField("hearingProblems", e.target.checked)}
            />

            <FormGroup type="text" name="whichEar" placeholder="Qual ouvido?" value={phatologicalHistoryFormData.whichEar || ""} onChange={(e) => setPhatologicalHistoryField("whichEar", e.target.value)} />

            <FormGroup type="text" name="howUnderstand" placeholder="Como entende?" value={phatologicalHistoryFormData.howUnderstand || ""} onChange={(e) => setPhatologicalHistoryField("howUnderstand", e.target.value)} />

            <FormGroup type="text" name="attendedTherapy" placeholder="Fez terapia?" value={phatologicalHistoryFormData.attendedTherapy || ""} onChange={(e) => setPhatologicalHistoryField("attendedTherapy", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={phatologicalHistoryFormData.observations || ""} onChange={(e) => setPhatologicalHistoryField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};
