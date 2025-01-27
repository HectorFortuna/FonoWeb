import { useState, ChangeEvent, FormEvent } from "react";
import { FormData, Errors } from "../../data/model/AnamnaseState";
import { AnamneseRepository } from "../../data/repositories/AnamneseRepository";

export const useAnamneseFormViewModel = () => {
    const [formData, setFormData] = useState<FormData>({
        patientName: '',
        patientAge: '',
        fatherName: '',
        birthDate: '',
        motherName: '',
        career: '',
        address: '',
        phone: '',
    });

    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const validate = (): boolean => {
        const newErrors: Errors = {};
        if (!formData.patientName) newErrors.patientName = 'Nome do paciente é obrigatório';
        if (!formData.patientAge) newErrors.patientAge = 'Idade é obrigatória';
        if (!formData.career) newErrors.career = 'Profissão é obrigatória';
        if (!formData.address) newErrors.address = 'Endereço é obrigatório';
        if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (validate()) {
          setIsSubmitting(true);
          setMessage(null);
      
          try {
            const response = await AnamneseRepository.submitAnamnese(formData);
      
            if (response.ok) {
              setMessage(`Ficha enviada com sucesso! ID gerado: ${response.body?.id || "N/A"}`);
            } 
          } catch (error: any) {
            setMessage(`Erro de conexão: ${error.message}`);
            console.error("Erro ao enviar os dados:", error.details || error);
          } finally {
            setIsSubmitting(false);
          }
        }
      };

  return {
    formData,
    errors,
    isSubmitting,
    message,
    handleChange,
    handleSubmit, 
  };
};