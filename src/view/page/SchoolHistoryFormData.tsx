import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";

export const SchoolHistory: React.FC = () => {
    const { schoolHistoryFormData, setSchoolHistoryField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/recreation-form");
    };

    const handleBack = () => {
        navigate("/independence-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <CheckboxGroup
                name="doesWellSchool"
                label="Tem bom desempenho na escola"
                checked={schoolHistoryFormData.doesWellSchool || false}
                onChange={(e) => setSchoolHistoryField("doesWellSchool", e.target.checked)}
            />

            <CheckboxGroup
                name="likesStudy"
                label="Gosta de estudar"
                checked={schoolHistoryFormData.likesStudy || false}
                onChange={(e) => setSchoolHistoryField("likesStudy", e.target.checked)}
            />

            <CheckboxGroup
                name="parentsStudyChild"
                label="Pais estudam com a criança"
                checked={schoolHistoryFormData.parentsStudyChild || false}
                onChange={(e) => setSchoolHistoryField("parentsStudyChild", e.target.checked)}
            />

            <CheckboxGroup
                name="arithmeticDifficulties"
                label="Dificuldade em aritmetica"
                checked={schoolHistoryFormData.arithmeticDifficulties || false}
                onChange={(e) => setSchoolHistoryField("arithmeticDifficulties", e.target.checked)}
            />
            <CheckboxGroup
                name="writingDifficulties"
                label="Dificuldades na escrita"
                checked={schoolHistoryFormData.writingDifficulties || false}
                onChange={(e) => setSchoolHistoryField("writingDifficulties", e.target.checked)}
            />
            <CheckboxGroup
                name="hasBeenHeldBack"
                label="Ja repetiu de ano"
                checked={schoolHistoryFormData.hasBeenHeldBack || false}
                onChange={(e) => setSchoolHistoryField("hasBeenHeldBack", e.target.checked)}
            />
            <CheckboxGroup
                name="attendedKindergarten"
                label="Frequentou jardim de infancia"
                checked={schoolHistoryFormData.attendedKindergarten || false}
                onChange={(e) => setSchoolHistoryField("attendedKindergarten", e.target.checked)}
            />

            <FormGroup type="text" name="reasonBeingHeldBack" placeholder="Motivo da repetência" value={schoolHistoryFormData.reasoBeingHeldBack || ""} onChange={(e) => setSchoolHistoryField("reasoBeingHeldBack", e.target.value)} />

            <FormGroup type="text" name="kindergartenAge" placeholder="Idade que frequentou o jardim de infância" value={schoolHistoryFormData.kindergartenAge || ""} onChange={(e) => setSchoolHistoryField("kindergartenAge", e.target.value)} />

            <CheckboxGroup
                name="changedSchoolsOften"
                label="Muda de escola frenquentemente"
                checked={schoolHistoryFormData.changedSchoolsOften || false}
                onChange={(e) => setSchoolHistoryField("changedSchoolsOften", e.target.checked)}
            />

            <FormGroup type="text" name="currentGrade" placeholder="Série atual" value={schoolHistoryFormData.currentGrade || ""} onChange={(e) => setSchoolHistoryField("currentGrade", e.target.value)} />

            <FormGroup type="text" name="currentSchool" placeholder="Escola atual" value={schoolHistoryFormData.currentSchool || ""} onChange={(e) => setSchoolHistoryField("currentSchool", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={schoolHistoryFormData.observations || ""} onChange={(e) => setSchoolHistoryField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};
