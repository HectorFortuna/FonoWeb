import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";

export const PsychomotorDevelopment = () => {

    const { psychomotorDevelopmentFormData, setPsychomotorDevelopmentField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/language-development-form");
    };

    const handleBack = () => {
        navigate("/sleep-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <FormGroup type="text" name="heldHeadUp" placeholder="Quando sustentou a cabeça" value={psychomotorDevelopmentFormData.heldHeadUp || ""} onChange={(e) => setPsychomotorDevelopmentField("heldHeadUp", e.target.value)} />

            <CheckboxGroup
                name="crawled"
                label="Rastejou"
                checked={psychomotorDevelopmentFormData.crawled || false}
                onChange={(e) => setPsychomotorDevelopmentField("crawled", e.target.checked)}
            />

            <FormGroup type="text" name="crawledAge" placeholder="Idade que começou a rastejar" value={psychomotorDevelopmentFormData.crawledAge || ""} onChange={(e) => setPsychomotorDevelopmentField("crawledAge", e.target.value)} />

            <FormGroup type="text" name="walkedAge" placeholder="Idade que começou a andar" value={psychomotorDevelopmentFormData.walkedAge || ""} onChange={(e) => setPsychomotorDevelopmentField("walkedAge", e.target.value)} />

            <FormGroup type="text" name="floppyOrFirmBaby" placeholder="Bebê mole ou firme" value={psychomotorDevelopmentFormData.floppyOrFirmBaby || ""} onChange={(e) => setPsychomotorDevelopmentField("floppyOrFirmBaby", e.target.value)} />

            <FormGroup type="text" name="fallingFrequency" placeholder="Frequência de quedas" value={psychomotorDevelopmentFormData.fallingFrequency || ""} onChange={(e) => setPsychomotorDevelopmentField("fallingFrequency", e.target.value)} />

            <FormGroup type="text" name="grabbedObjectsAge" placeholder="Idade que pegou objetos" value={psychomotorDevelopmentFormData.grabbedObjectsAge || ""} onChange={(e) => setPsychomotorDevelopmentField("grabbedObjectsAge", e.target.value)} />

            <CheckboxGroup
                name="canJump"
                label="Sabe saltar"
                checked={psychomotorDevelopmentFormData.canJump || false}
                onChange={(e) => setPsychomotorDevelopmentField("canJump", e.target.checked)}
            />

            <FormGroup type="text" name="walkingDefects" placeholder="Defeitos na marcha" value={psychomotorDevelopmentFormData.walkingDefects || ""} onChange={(e) => setPsychomotorDevelopmentField("walkingDefects", e.target.value)} />

            <FormGroup type="text" name="goodDirectionSense" placeholder="Bom senso de direção" value={psychomotorDevelopmentFormData.goodDirectionSense || ""} onChange={(e) => setPsychomotorDevelopmentField("goodDirectionSense", e.target.value)} />
            <CheckboxGroup
                name="sphincterControl"
                label="Controle do esfincter"
                checked={psychomotorDevelopmentFormData.sphincterControl || false}
                onChange={(e) => setPsychomotorDevelopmentField("sphincterControl", e.target.checked)}
            />
            <CheckboxGroup
                name="bumpsIntoThings"
                label="Esbarra nas coisas"
                checked={psychomotorDevelopmentFormData.bumpsIntoThings || false}
                onChange={(e) => setPsychomotorDevelopmentField("bumpsIntoThings", e.target.checked)}
            />
            <CheckboxGroup
                name="dropsThingsFromHands"
                label="Deixa cair objetos das mãos"
                checked={psychomotorDevelopmentFormData.dropsThingsFromHands || false}
                onChange={(e) => setPsychomotorDevelopmentField("dropsThingsFromHands", e.target.checked)}
            />
            <CheckboxGroup
                name="agile"
                label="Ágil"
                checked={psychomotorDevelopmentFormData.agile || false}
                onChange={(e) => setPsychomotorDevelopmentField("agile", e.target.checked)}
            />
            <CheckboxGroup
                name="orthopedicProblems"
                label="Problemas ortopédicos"
                checked={psychomotorDevelopmentFormData.orthopedicProblems || false}
                onChange={(e) => setPsychomotorDevelopmentField("orthopedicProblems", e.target.checked)}
            />

            <CheckboxGroup
                name="usedBoots"
                label="Usou botas ortopédicas"
                checked={psychomotorDevelopmentFormData.usedBoots || false}
                onChange={(e) => setPsychomotorDevelopmentField("usedBoots", e.target.checked)}
            />

            <FormGroup type="text" name="dailyActivities" placeholder="Atividades diárias" value={psychomotorDevelopmentFormData.dailyActivities || ""} onChange={(e) => setPsychomotorDevelopmentField("dailyActivities", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={psychomotorDevelopmentFormData.observations || ""} onChange={(e) => setPsychomotorDevelopmentField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};