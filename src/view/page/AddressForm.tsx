import React from "react";
import { AddressFormGroup } from "../components/molecules/address/AddressFormGroup";
import { Button } from "../components/atoms/button/Button";
import { useFormStore } from "../../states/ZustandCache";
import { Form, useNavigate } from "react-router-dom";
import styles from "./style/Form.module.css";

export const AddressForm = () => {
    const { formData, setAddress, addAddress, removeAddress } = useFormStore();
    const navigate = useNavigate();

    const [forceUpdate, setForceUpdate] = React.useState(0);

    const handleSetAddress = () => {
        addAddress();
        setForceUpdate(prev => prev + 1);
    };

    const addresses = formData.address && formData.address.length > 0
        ? formData.address
        : [{ street: "", number: "", neighborhood: "", city: "", state: "", cep: "" }];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        navigate("/pregnancy-form");
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            {addresses.map((address, index) => (
                <AddressFormGroup key={index} index={index} address={address} onAddressChange={setAddress} />
            ))}

            <div className={styles.buttonContainer}>
                <Button
                    label="Remover Endereço"
                    onClick={() => removeAddress(addresses.length - 1)}
                    className={styles.buttonRemove}
                    variant="danger"
                    disabled={addresses.length <= 1}
                />
                <Button
                    label="Adicionar Endereço"
                    onClick={handleSetAddress}
                    className={styles.buttonAction}
                    variant="secondary"
                />
            </div>

            <div className={styles.buttonPagesContainer}>
                <Button label="Voltar" onClick={handleBack} className={styles.buttonAction} variant="secondary" />
                <Button label="Avançar" type="submit" className={styles.buttonAction} variant="primary" />
            </div>
        </form>
    );

};