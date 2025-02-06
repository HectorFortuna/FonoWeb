
//iniciar os checkbox nao selecionados como false mandar para o cache
import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

export const PregnancyForm = () => {
  const { pregnancyFormData, setPregnancyField } = useFormStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", pregnancyFormData);
    navigate("/next-form"); // 🔹 Redireciona para a próxima tela
  };

  const handleBack = () => { 
    navigate("/address-form");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Campos do formulário */}
      <FormGroup type="text" name="gestationDuration" placeholder="Duração" value={pregnancyFormData.gestationDuration || ""} onChange={(e) => setPregnancyField("gestationDuration", e.target.value)} />
      
      <FormGroup type="text" name="motherAge" placeholder="Idade da Mãe" value={pregnancyFormData.motherAge || ""} onChange={(e) => setPregnancyField("motherAge", e.target.value)} />

      <FormGroup type="text" name="accidents" placeholder="Acidentes" value={pregnancyFormData.accidents || ""} onChange={(e) => setPregnancyField("accidents", e.target.value)} />
      
      <FormGroup type="text" name="motherAge" placeholder="Doenças durante a gravidez" value={pregnancyFormData.diseasesDuringPregnancy || ""} onChange={(e) => setPregnancyField("diseasesDuringPregnancy", e.target.value)} />
      
      {/* Campos Booleanos */}

      <label>
        Tratamento Pré-Natal:
        <input type="checkbox" checked={pregnancyFormData.prenatalTreatment } onChange={(e) => setPregnancyField("prenatalTreatment", e.target.checked)} />
      </label>

      <label>
        Uso de Medicamento Durante a Gravidez:
        <input type="checkbox" checked={pregnancyFormData.medicationsDuringPregnancy} onChange={(e) => setPregnancyField("medicationsDuringPregnancy", e.target.checked)} />
      </label>

      <label>
        Hipotensão:
        <input type="checkbox" checked={pregnancyFormData.hypotension || false} onChange={(e) => setPregnancyField("hypotension", e.target.checked)} />
      </label>

      <label>
        Hipertensão:
        <input type="checkbox" checked={pregnancyFormData.hypertension || false} onChange={(e) => setPregnancyField("hypertension", e.target.checked)} />
      </label>

      <label>
        Anemia:
        <input type="checkbox" checked={pregnancyFormData.anemia|| false} onChange={(e) => setPregnancyField("anemia", e.target.checked)} />
      </label>

      <FormGroup type="text" name="duracaoParto" placeholder="Duração do Parto" value={pregnancyFormData.deliveryDuration || ""} onChange={(e) => setPregnancyField("deliveryDuration", e.target.value)} />

      {/* Opções de Tipo de Parto */}
      <label>
        Parto Normal:
        <input
          type="checkbox"
          checked={pregnancyFormData.normalDelivery || false}
          onChange={(e) => setPregnancyField("normalDelivery", e.target.checked)}
        />
      </label>

      <label>
        Fórceps:
        <input
          type="checkbox"
          checked={pregnancyFormData.forcepsDelivery || false}
          onChange={(e) => setPregnancyField("forcepsDelivery", e.target.checked)}
        />
      </label>

      <label>
        Cesárea:
        <input
          type="checkbox"
          checked={pregnancyFormData.cesareanDelivery || false}
          onChange={(e) => setPregnancyField("cesareanDelivery", e.target.checked)}
        />
      </label>
      <label>
        Anestesia:
        <input type="checkbox" checked={pregnancyFormData.anesthesia|| false} onChange={(e) => setPregnancyField("anesthesia", e.target.checked)} />
      </label>

      <FormGroup type="text" name="peso" placeholder="Peso ao Nascer (g)" value={pregnancyFormData.birthWeight || ""} onChange={(e) => setPregnancyField("birthWeight", e.target.value)} />

      <FormGroup type="text" name="comprimento" placeholder="Comprimento (cm)" value={pregnancyFormData.birthHeight || ""} onChange={(e) => setPregnancyField("birthHeight", e.target.value)} />
      <label>
        Chorou ao Nascer:
        <input type="checkbox" checked={pregnancyFormData.cried || false} onChange={(e) => setPregnancyField("cried", e.target.checked)} />
      </label>

      <label>
        Cianose:
        <input type="checkbox" checked={pregnancyFormData.cyanosis || false} onChange={(e) => setPregnancyField("cyanosis", e.target.checked)} />
      </label>

      {/* Botões de ação */}
      <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
      </div>
    </form>
  );
};
