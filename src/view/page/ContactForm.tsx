import React, { useState } from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { Button } from "../components/atoms/button/Button";
import styles from "./ContactForm.module.css";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    school: "",
    fatherName: "",
    motherName: "",
    birthDate: "",
    age: "",
    phone: "",
    profession: "",
    addresses: [""],
    siblings: [{ name: "", age: "" }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (index: number, value: string) => {
    const newAddresses = [...formData.addresses];
    newAddresses[index] = value;
    setFormData({ ...formData, addresses: newAddresses });
  };

  const addAddress = () => {
    setFormData({ ...formData, addresses: [...formData.addresses, ""] });
  };

  const handleSiblingChange = (index: number, field: "name" | "age", value: string) => {
    const newSiblings = [...formData.siblings];
    newSiblings[index][field] = value;
    setFormData({ ...formData, siblings: newSiblings });
  };

  const addSibling = () => {
    setFormData({ ...formData, siblings: [...formData.siblings, { name: "", age: "" }] });
  };

  const handleSubmit = () => {
    alert("Formulário enviado!");
    console.log("Dados:", formData);
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro</h2>
      <form className={styles.form}>
        <FormGroup type="text" name="patientName" placeholder="Nome do Paciente" value={formData.patientName} onChange={handleChange} />
        <FormGroup type="text" name="school" placeholder="Escola" value={formData.school} onChange={handleChange} />
        <FormGroup type="text" name="fatherName" placeholder="Nome do Pai" value={formData.fatherName} onChange={handleChange} />
        <FormGroup type="text" name="motherName" placeholder="Nome da Mãe" value={formData.motherName} onChange={handleChange} />
        <FormGroup type="date" name="birthDate" placeholder="Data de Nascimento" value={formData.birthDate} onChange={handleChange} />
        <FormGroup type="number" name="age" placeholder="Idade" value={formData.age} onChange={handleChange} />
        <FormGroup type="tel" name="phone" placeholder="Número de Telefone" value={formData.phone} onChange={handleChange} />
        <FormGroup type="text" name="profession" placeholder="Profissão" value={formData.profession} onChange={handleChange} />

        {/* Endereços */}
        <h3>Endereço(s)</h3>
        {formData.addresses.map((address, index) => (
          <FormGroup key={index} name = "address" type="text" placeholder={`Endereço ${index + 1}`} value={address} onChange={(e) => handleAddressChange(index, e.target.value)} />
        ))}
        <Button label="Adicionar Endereço" onClick={addAddress} />

        {/* Irmãos */}
        <h3>Irmãos</h3>
        {formData.siblings.map((sibling, index) => (
          <div key={index} className={styles.siblingContainer}>
            <FormGroup type="text" name = "siblings" placeholder={`Nome do Irmão ${index + 1}`} value={sibling.name} onChange={(e) => handleSiblingChange(index, "name", e.target.value)} />
            <FormGroup type="number" name = "siblings" placeholder="Idade" value={sibling.age} onChange={(e) => handleSiblingChange(index, "age", e.target.value)} />
          </div>
        ))}
        <Button label="Adicionar Irmão" onClick={addSibling} />

        <Button label="Enviar" onClick={handleSubmit} />
      </form>
    </div>
  );
};
