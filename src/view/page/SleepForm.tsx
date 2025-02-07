import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore} from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";


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

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            {/* Campos do formulário */}
            <label>
                Normal:
                <input type="checkbox" checked={sleepFormData.normal} onChange={(e) => setSleepField("normal", e.target.checked)} />
            </label>

            <label>
                Agitado:
                <input type="checkbox" checked={sleepFormData.restless} onChange={(e) => setSleepField("restless", e.target.checked)} />
            </label>

            <label>
                Fala durante o sono:
                <input type="checkbox" checked={sleepFormData.talksDuringSleep} onChange={(e) => setSleepField("talksDuringSleep", e.target.checked)} />
            </label>

            <label>
                Enurese Noturna:
                <input type="checkbox" checked={sleepFormData.nocturnalEnuresis} onChange={(e) => setSleepField("nocturnalEnuresis", e.target.checked)} />
            </label>

            <label>
                Ranger de Dentes:
                <input type="checkbox" checked={sleepFormData.teethGrinding} onChange={(e) => setSleepField("teethGrinding", e.target.checked)} />
            </label>

            <label>
                Sonambulismo:
                <input type="checkbox" checked={sleepFormData.sleepwalking} onChange={(e) => setSleepField("sleepwalking", e.target.checked)} />
            </label>

            <label>
                Dorme com a boca aberta:
                <input type="checkbox" checked={sleepFormData.sleepsWithMouthOpen} onChange={(e) => setSleepField("sleepsWithMouthOpen", e.target.checked)} />
            </label>

            <label>
                Babar:
                <input type="checkbox" checked={sleepFormData.drools} onChange={(e) => setSleepField("drools", e.target.checked)} />
            </label>

            <FormGroup type="text" name="observations" placeholder="Observações" value={sleepFormData.observations || ""} onChange={(e) => setSleepField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
}