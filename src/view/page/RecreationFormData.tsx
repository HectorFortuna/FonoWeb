import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";

export const RecreationForm: React.FC = () => {
    const { recreationFormData, setRecreationField } = useFormStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/family-interrelation-form");
    };

    const handleBack = () => {
        navigate("/school-history-form");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormGroup type="text" name="favoriteActivitiesAndToys" placeholder="Atividades e brinquedos favoritos" value={recreationFormData.favoriteActivitiesAndToys || ""} onChange={(e) => setRecreationField("favoriteActivitiesAndToys", e.target.value)} />
            <CheckboxGroup
                name="adaptsHasFriends"
                label="Tem amigos"
                checked={recreationFormData.adaptsHasFriends || false}
                onChange={(e) => setRecreationField("adaptsHasFriends", e.target.checked)}
            />

            <FormGroup type="text" name="favoriteBooksAndTvShows" placeholder="Livros e programas de TV favoritos" value={recreationFormData.favoriteBooksAndTvShows || ""} onChange={(e) => setRecreationField("favoriteBooksAndTvShows", e.target.value)} />

            <FormGroup type="text" name="observations" placeholder="Observações" value={recreationFormData.observations || ""} onChange={(e) => setRecreationField("observations", e.target.value)} />

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );
};
