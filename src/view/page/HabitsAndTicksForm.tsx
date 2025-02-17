import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";


export const HabitsAndTicks: React.FC = () => {
    const { habitsAndTicksFormData, setHabitsAndTicksField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/family-interrelation-form");
    };

    const handleBack = () => {
        navigate("/recreation-form");  
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <FormGroup type="text" name="habits" placeholder="Usou chupeta?" value={habitsAndTicksFormData.usedPacifier || ""} onChange={(e) => setHabitsAndTicksField("usedPacifier", e.target.value)} />
            <FormGroup  type="text" name="habits" placeholder="Como a chupeta foi tirada?" value={habitsAndTicksFormData.pacifierRemovalMethod || ""} onChange={(e) => setHabitsAndTicksField("pacifierRemovalMethod", e.target.value)} />
            <CheckboxGroup name="habits" label="Chupu dedo" checked={habitsAndTicksFormData.suckedThumb || false} onChange={(e) => setHabitsAndTicksField("suckedThumb", e.target.checked)} />
            <FormGroup type="text" name="habits" placeholder="Qual mão?" value={habitsAndTicksFormData.thumbHand || ""} onChange={(e) => setHabitsAndTicksField("thumbHand", e.target.value)} />
            <FormGroup type="text" name="habits" placeholder="Até quando chupou o dedo?" value={habitsAndTicksFormData.thumbSuckingDuration || ""} onChange={(e) => setHabitsAndTicksField("thumbSuckingDuration", e.target.value)} />
            <FormGroup type="text" name="habits" placeholder="Como parou de chupar o dedo?" value={habitsAndTicksFormData.thumbSuckingRemovalMethod || ""} onChange={(e) => setHabitsAndTicksField("thumbSuckingRemovalMethod", e.target.value)} />
            <CheckboxGroup name="habits" label="Roer unhas" checked={habitsAndTicksFormData.bitesNails || false} onChange={(e) => setHabitsAndTicksField("bitesNails", e.target.checked)} />
            <FormGroup type="text" name="habits" placeholder="De qual mao?" value={habitsAndTicksFormData.nailBitingHand || ""} onChange={(e) => setHabitsAndTicksField("nailBitingHand", e.target.value)} />
            <FormGroup type="text"name="habits"placeholder="Observações" value={habitsAndTicksFormData.observations || ""} onChange={(e) => setHabitsAndTicksField("observations", e.target.value)} />
            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>


        </form>
    )
};