import React, { useState } from "react";
import { FormGroup } from "../components/molecules/form_groups/FormGroup";
import { AddressFormGroup } from "../components/molecules/form_groups/AddressFormGroup";
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
    addresses: [
      { street: "", number: "", neighborhood: "", city: "", state: "", cep: "" },
    ],
    siblings: [{ name: "", age: "" }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (index: number, field: string, value: string) => {
    const newAddresses = [...formData.addresses];
    newAddresses[index] = { ...newAddresses[index], [field]: value };
    setFormData({ ...formData, addresses: newAddresses });
  };

  const addAddress = () => {
    setFormData({
      ...formData,
      addresses: [
        ...formData.addresses,
        { street: "", number: "", neighborhood: "", city: "", state: "", cep: "" },
      ],
    });
  };
  

  const handleSiblingChange = (index: number, field: "name" | "age", value: string) => {
    const newSiblings = [...formData.siblings];
    newSiblings[index][field] = value;
    setFormData({ ...formData, siblings: newSiblings });
  };

  const addSibling = () => {
    setFormData({
      ...formData,
      siblings: [...formData.siblings, { name: "", age: "" }],
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulário enviado!");
    console.log("Dados:", formData);
  };
  
  const handleClickSubmit = () => {
    handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <FormGroup type="text" name="patientName" placeholder="Nome do Paciente" value={formData.patientName} onChange={handleChange} required />
    <FormGroup type="text" name="school" placeholder="Escola" value={formData.school} onChange={handleChange} />
    <FormGroup type="text" name="fatherName" placeholder="Nome do Pai" value={formData.fatherName} onChange={handleChange} />
    <FormGroup type="text" name="motherName" placeholder="Nome da Mãe" value={formData.motherName} onChange={handleChange} />
    <FormGroup type="date" name="birthDate" placeholder="Data de Nascimento" value={formData.birthDate} onChange={handleChange} required />
    <FormGroup type="number" name="age" placeholder="Idade" value={formData.age} onChange={handleChange} />
    <FormGroup type="tel" name="phone" placeholder="Número de Telefone" value={formData.phone} onChange={handleChange} />
    <FormGroup type="text" name="profession" placeholder="Profissão" value={formData.profession} onChange={handleChange} />
  
    {formData.addresses.map((address, index) => (
      <AddressFormGroup key={index} index={index} address={address} onAddressChange={handleAddressChange} />
    ))}
  
        <div className={styles.buttonContainer}>
      <Button label="Adicionar Endereço" onClick={addAddress} className={styles.buttonAction} variant="secondary" />
    </div>
  
    {formData.siblings.map((sibling, index) => (
      <div key={index} className={styles.siblingContainer}>
        <FormGroup type="text" name={`siblingName-${index}`} placeholder="Nome do Irmão" value={sibling.name} onChange={(e) => handleSiblingChange(index, "name", e.target.value)} />
        <FormGroup type="number" name={`siblingAge-${index}`} placeholder="Idade do Irmão" value={sibling.age} onChange={(e) => handleSiblingChange(index, "age", e.target.value)} />
      </div>
    ))}
  
   <div className={styles.buttonContainer}>
      <Button label="Adicionar Irmão" onClick={addSibling} className={styles.buttonAction} variant="secondary" />
    </div>

    <div className={styles.buttonContainer}>
      <Button label="Avançar" onClick={handleClickSubmit} className={styles.buttonAction} variant="primary" />
    </div>
  </form>
  );
};
