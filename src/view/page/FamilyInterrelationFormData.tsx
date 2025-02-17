import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { submitForm } from "data/network/AnamneseService";

export const FamilyInterrelationForm: React.FC = () => {
    const {
        familyInterrelationFormData,
        setFamilyInterrelationField,
       
    } = useFormStore();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/habits-and-ticks-form");
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

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormGroup type="text" name="relationshipFather" placeholder="Relação com o pai" value={familyInterrelationFormData.relationshipFather || ""} onChange={(e) => setFamilyInterrelationField("relationshipFather", e.target.value)} />
            
            <FormGroup type="text" name="relationshipMother" placeholder="Relação com a mãe" value={familyInterrelationFormData.relationshipMother || ""} onChange={(e) => setFamilyInterrelationField("relationshipMother", e.target.value)} />

            <FormGroup type="text" name="relationshipSiblings" placeholder="Relação com os irmãos" value={familyInterrelationFormData.relationshipSiblings || ""} onChange={(e) => setFamilyInterrelationField("relationshipSiblings", e.target.value)} />

            <FormGroup type="text" name="relationshipOthers" placeholder="Relação com outras pessoas" value={familyInterrelationFormData.relationshipOthers || ""} onChange={(e) => setFamilyInterrelationField("relationshipOthers", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={familyInterrelationFormData.observations || ""} onChange={(e) => setFamilyInterrelationField("observations", e.target.value)} />

           
            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Enviar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};

