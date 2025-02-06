import React from "react";
import { AddressFormGroup } from "../components/molecules/form_groups/AddressFormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

export const AddressForm = () => {
    const { formData, setAddress, addAddress,removeAddress } = useFormStore();
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Dados do formulário:", formData);
      navigate("/pregnancy-form"); 
    };

    const handleBack = () => { 
        navigate("/");
      };
    
  
    return (
        <form className={styles.form} onSubmit={handleSubmit}> 
            {formData.addresses?.map((address, index) => {
                const updatedAddress = { ...address, street: address.street ?? "" };
                return <AddressFormGroup key={index} index={index} address={address} onAddressChange={setAddress} />;
            })}

            <div className={styles.buttonContainer}>
            
                <Button
                    label="Remover Endereço"
                    onClick={() => removeAddress((formData.addresses?.length ?? 0) - 1)}
                    className={styles.buttonRemove}
                    variant="danger"
                    disabled={(formData.addresses?.length ?? 0) <= 1} 
                />
                <Button label="Adicionar Endereço" onClick={addAddress} className={styles.buttonAction} variant="secondary" />
                
            </div>

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />

                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            
            </div>
        </form>
    );
  
  };