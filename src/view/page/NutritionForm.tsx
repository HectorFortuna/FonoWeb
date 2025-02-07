import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";

export const NutritionForm = () => {
    const { nutritionFormData, setNutritionField } = useFormStore();
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/sleep-form"); 
    }
    
    const handleBack = () => {
        navigate("/pregnancy-form");
    }

    return( 
    <form className={styles.form} onSubmit={handleSubmit}>
        <label>
            Amamentação materna:
            <input type="checkbox" checked={nutritionFormData.breastfeeding || false} onChange={(e) => setNutritionField("breastfeeding", e.target.checked)} />
        </label>

        <FormGroup type="text" name="breastfeedingDuration" placeholder="Até quando amamentou" value={nutritionFormData.breastfeedingDuration || ""} onChange={(e) => setNutritionField("breastfeedingDuration", e.target.value)} />

        <label>
            Alimentação artificial:
            <input type="checkbox" checked={nutritionFormData.artificialFeeding || false} onChange={(e) => setNutritionField("artificialFeeding", e.target.checked)} />
        </label>

        <FormGroup type="text" name="artificialFeedingDuration" placeholder="Até quando alimentou" value={nutritionFormData.artificialFeedingDuration || ""} onChange={(e) => setNutritionField("artificialFeedingDuration", e.target.value)} />

        <label>
            Boa sucção/deglutição:
            <input type="checkbox" checked={nutritionFormData.goodSuctionSwallowing || false} onChange={(e) => setNutritionField("goodSuctionSwallowing", e.target.checked)} />
        </label>

        <label>
            Engasgos:
            <input type="checkbox" checked={nutritionFormData.choking || false} onChange={(e) => setNutritionField("choking", e.target.checked)} />
        </label>

        <label>
            Vômitos:
            <input type="checkbox" checked={nutritionFormData.vomiting || false} onChange={(e) => setNutritionField("vomiting", e.target.checked)} />
        </label>

        <label>
            Comer forçado:
            <input type="checkbox" checked={nutritionFormData.forcedEat || false} onChange={(e) => setNutritionField("forcedEat", e.target.checked)} />
        </label>

        <FormGroup type="text" name="currentFeeding" placeholder="Alimentação atual" value={nutritionFormData.currentFeeding || ""} onChange={(e) => setNutritionField("currentFeeding", e.target.value)} />

        <FormGroup type="text" name="observations" placeholder="Observações" value={nutritionFormData.observations || ""} onChange={(e) => setNutritionField("observations", e.target.value)} />

       <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
      </div>
    </form>)
}