import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore} from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";

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

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            
            <FormGroup type="text" name="heldHeadUp" placeholder="Quando sustentou a cabeça" value={psychomotorDevelopmentFormData.heldHeadUp || ""} onChange={(e) => setPsychomotorDevelopmentField("heldHeadUp", e.target.value)} />
            
            <label>
                Rastejou:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.crawled} onChange={(e) => setPsychomotorDevelopmentField("crawled", e.target.checked)} />    
            </label>            

            <FormGroup type="text" name="crawledAge" placeholder="Idade que começou a rastejar" value={psychomotorDevelopmentFormData.crawledAge || ""} onChange={(e) => setPsychomotorDevelopmentField("crawledAge", e.target.value)} />

            <FormGroup type="text" name="walkedAge" placeholder="Idade que começou a andar" value={psychomotorDevelopmentFormData.walkedAge || ""} onChange={(e) => setPsychomotorDevelopmentField("walkedAge", e.target.value)} />

            <FormGroup type="text" name="floppyOrFirmBaby" placeholder="Bebê mole ou firme" value={psychomotorDevelopmentFormData.floppyOrFirmBaby || ""} onChange={(e) => setPsychomotorDevelopmentField("floppyOrFirmBaby", e.target.value)} />

            <FormGroup type="text" name="fallingFrequency" placeholder="Frequência de quedas" value={psychomotorDevelopmentFormData.fallingFrequency || ""} onChange={(e) => setPsychomotorDevelopmentField("fallingFrequency", e.target.value)} />   

            <FormGroup type="text" name="grabbedObjectsAge" placeholder="Idade que pegou objetos" value={psychomotorDevelopmentFormData.grabbedObjectsAge || ""} onChange={(e) => setPsychomotorDevelopmentField("grabbedObjectsAge", e.target.value)} />
            
            <label>
                Sabe saltar:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.canJump} onChange={(e) => setPsychomotorDevelopmentField("canJump", e.target.checked)} />
            </label>
            
            <FormGroup type="text" name="walkingDefects" placeholder="Defeitos na marcha" value={psychomotorDevelopmentFormData.walkingDefects || ""} onChange={(e) => setPsychomotorDevelopmentField("walkingDefects", e.target.value)} />

            <FormGroup type="text" name="goodDirectionSense" placeholder="Bom senso de direção" value={psychomotorDevelopmentFormData.goodDirectionSense || ""} onChange={(e) => setPsychomotorDevelopmentField("goodDirectionSense", e.target.value)} />
            
            <label>
                Controle de esfíncter:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.sphincterControl} onChange={(e) => setPsychomotorDevelopmentField("sphincterControl", e.target.checked)} />
            </label>

            <label>
                Esbarra nas coisas:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.bumpsIntoThings} onChange={(e) => setPsychomotorDevelopmentField("bumpsIntoThings", e.target.checked)} />
            </label>

            <label>
                Deixa cair objetos das mãos:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.dropsThingsFromHands} onChange={(e) => setPsychomotorDevelopmentField("dropsThingsFromHands", e.target.checked)} />
            </label>

            <label>
                Ágil:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.agile} onChange={(e) => setPsychomotorDevelopmentField("agile", e.target.checked)} />
            </label>

            <label>
                Problemas ortopédicos:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.orthopedicProblems} onChange={(e) => setPsychomotorDevelopmentField("orthopedicProblems", e.target.checked)} />
            </label>

            <label>
                Usou botas ortopédicas:
                <input type="checkbox" checked={psychomotorDevelopmentFormData.usedBoots} onChange={(e) => setPsychomotorDevelopmentField("usedBoots", e.target.checked)} />
            </label>

            <FormGroup type="text" name="dailyActivities" placeholder="Atividades diárias" value={psychomotorDevelopmentFormData.dailyActivities || ""} onChange={(e) => setPsychomotorDevelopmentField("dailyActivities", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={psychomotorDevelopmentFormData.observations || ""} onChange={(e) => setPsychomotorDevelopmentField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};