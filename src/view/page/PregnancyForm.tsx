import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";
import { CheckboxGroup } from "view/components/molecules/checkbox/CheckboxGroup";

export const PregnancyForm = () => {
  const { pregnancyFormData, setPregnancyField } = useFormStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/nutrition-form");
  };

  const handleBack = () => {
    navigate("/address-form");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <FormGroup type="text" name="gestationDuration" placeholder="Duração" value={pregnancyFormData.gestationDuration || ""} onChange={(e) => setPregnancyField("gestationDuration", e.target.value)} />

      <FormGroup type="text" name="motherAge" placeholder="Idade da Mãe" value={pregnancyFormData.motherAge || ""} onChange={(e) => setPregnancyField("motherAge", e.target.value)} />

      <FormGroup type="text" name="accidents" placeholder="Acidentes" value={pregnancyFormData.accidents || ""} onChange={(e) => setPregnancyField("accidents", e.target.value)} />

      <FormGroup type="text" name="motherAge" placeholder="Doenças durante a gravidez" value={pregnancyFormData.diseasesDuringPregnancy || ""} onChange={(e) => setPregnancyField("diseasesDuringPregnancy", e.target.value)} />


      <CheckboxGroup
        name="prenatalTreatment"
        label="Tratamento Pré-Natal"
        checked={pregnancyFormData.prenatalTreatment || false}
        onChange={(e) => setPregnancyField("prenatalTreatment", e.target.checked)}
      />

      <FormGroup type="text" name="medicationsDuringPregnancy" placeholder="Medicamentos" value={pregnancyFormData.medicationsDuringPregnancy || ""} onChange={(e) => setPregnancyField("medicationsDuringPregnancy", e.target.value)} />


      <CheckboxGroup
        name="hypotension"
        label="Hipotensão"
        checked={pregnancyFormData.hypotension || false}
        onChange={(e) => setPregnancyField("hypotension", e.target.checked)}
      />
      <CheckboxGroup
        name="hypertension"
        label="Hipertensão"
        checked={pregnancyFormData.hypertension || false}
        onChange={(e) => setPregnancyField("hypertension", e.target.checked)}
      />
      <CheckboxGroup
        name="anemia"
        label="Anemia"
        checked={pregnancyFormData.anemia || false}
        onChange={(e) => setPregnancyField("anemia", e.target.checked)}
      />

      <FormGroup type="text" name="duracaoParto" placeholder="Duração do Parto" value={pregnancyFormData.deliveryDuration || ""} onChange={(e) => setPregnancyField("deliveryDuration", e.target.value)} />


      <CheckboxGroup
        name="normalDelivery"
        label="Parto Normal"
        checked={pregnancyFormData.normalDelivery || false}
        onChange={(e) => setPregnancyField("normalDelivery", e.target.checked)}
      />
      <CheckboxGroup
        name="forcepsDelivery"
        label="Fórceps"
        checked={pregnancyFormData.forcepsDelivery || false}
        onChange={(e) => setPregnancyField("forcepsDelivery", e.target.checked)}
      />
      <CheckboxGroup
        name="cesareanDelivery"
        label="Cesárea"
        checked={pregnancyFormData.cesareanDelivery || false}
        onChange={(e) => setPregnancyField("cesareanDelivery", e.target.checked)}
      />
      <CheckboxGroup
        name="anesthesia"
        label="Anestesia"
        checked={pregnancyFormData.anesthesia || false}
        onChange={(e) => setPregnancyField("anesthesia", e.target.checked)}
      />
      <FormGroup type="text" name="peso" placeholder="Peso ao Nascer (g)" value={pregnancyFormData.birthWeight || ""} onChange={(e) => setPregnancyField("birthWeight", e.target.value)} />

      <FormGroup type="text" name="comprimento" placeholder="Comprimento (cm)" value={pregnancyFormData.birthHeight || ""} onChange={(e) => setPregnancyField("birthHeight", e.target.value)} />
      <CheckboxGroup
        name="cried"
        label="Chorou ao Nascer"
        checked={pregnancyFormData.cried || false}
        onChange={(e) => setPregnancyField("cried", e.target.checked)}
      />
      <CheckboxGroup
        name="cyanosis"
        label="Cianose"
        checked={pregnancyFormData.cyanosis || false}
        onChange={(e) => setPregnancyField("cyanosis", e.target.checked)}
      />

      <FormGroup type="text" name="observacoes" placeholder="Observações" value={pregnancyFormData.observations || ""} onChange={(e) => setPregnancyField("observations", e.target.value)} />

      {/* Botões de ação */}
      <div className={styles.buttonPagesContainer}>
        <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
        <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
      </div>
    </form>
  );
};
