import React from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";

export const ContactForm: React.FC = () => {
  const { formData, setField, setSibling, addSibling, removeSiblings } = useFormStore();
  const navigate = useNavigate();  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    navigate("/address-form"); 
  };

  const siblings = formData.siblings && formData.siblings.length > 0
                ? formData.siblings
                : [{ name: "", age: "" }];
  

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormGroup
        type="text"
        name="patientName"
        placeholder="Nome do Paciente"
        value={formData.patientName || ""}
        onChange={(e) => setField("patientName", e.target.value)}
        required
      />
      <FormGroup
        type="text"
        name="school"
        placeholder="Escola"
        value={formData.school || ""}
        onChange={(e) => setField("school", e.target.value)}
      />
      <FormGroup
        type="text"
        name="fatherName"
        placeholder="Nome do Pai"
        value={formData.fatherName || ""}
        onChange={(e) => setField("fatherName", e.target.value)}
      />
      <FormGroup
        type="text"
        name="motherName"
        placeholder="Nome da Mãe"
        value={formData.motherName || ""}
        onChange={(e) => setField("motherName", e.target.value)}
      />

      <FormGroup
        type="date"
        name="birthDate"
        placeholder="Data de Nascimento"
        value={formData.birthDate || ""}
        onChange={(e) => setField("birthDate", e.target.value)}
      />

      <FormGroup
        type="number"
        name="age"
        placeholder="Idade"
        value={formData.age || ""}
        onChange={(e) => setField("age", e.target.value)} 
        />

      <FormGroup
        type="tel"
        name="phone"
        placeholder="Telefone"
        value={formData.phone || ""}
        onChange={(e) => setField("phone", e.target.value)}

      />
      <FormGroup
        type="text"
        name="career"
        placeholder="Profissão"
        value={formData.career || ""}
        onChange={(e) => setField("career", e.target.value)}
      />
      {/* Campos de Irmãos */}
      {formData.siblings?.map((sibling, index) => (
        <div key={index} className={styles.siblingContainer}>
          <FormGroup
            type="text"
            name={`siblingName-${index}`}
            placeholder="Nome do Irmão"
            value={sibling.name || ""}
            onChange={(e) => setSibling(index, "name", e.target.value)}
          />
          <FormGroup
            type="number"
            name={`siblingAge-${index}`}
            placeholder="Idade do Irmão"
            value={sibling.age || ""}
            onChange={(e) => setSibling(index, "age", e.target.value)}
          />
        </div>
      ))}

      <div className={styles.buttonContainer}>
      <Button
          label="Remover Irmão"
          onClick={() => removeSiblings(siblings.length - 1 )}
          className={styles.buttonRemove}
          variant="danger"
          disabled={siblings.length <= 1} 
        />

        <Button label="Adicionar Irmão" onClick={addSibling} className={styles.buttonAction} variant="secondary" />
      </div>

      <div className={styles.buttonContainer}>
        <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
      </div>
    </form>
  );
};
