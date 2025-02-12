import { useFormStore } from "../../states/ZustandCache";
import { RequestModel } from "../model/AnamnaseState";

// Função que prepara os dados para envio à API
export const prepareRequestData = () => {
  const { formData, pregnancyFormData, nutritionFormData, sleepFormData, psychomotorDevelopmentFormData, languageDevelopmentFormData, phatologicalHistoryFormData, independenceComprehensionFormData, schoolHistoryFormData, recreationFormData, familyInterrelationFormData } = useFormStore.getState();

  const requestData: RequestModel = {
    patient: {
      patientForm: formData,
    },
    anamnese: {
      pregnancyForm: pregnancyFormData,
      nutritionForm: nutritionFormData,
      sleepForm: sleepFormData,
      psychmotorDevelopmentForm: psychomotorDevelopmentFormData,
      languageDevelopment: languageDevelopmentFormData,
      phatologicalHistory: phatologicalHistoryFormData,
      independenceComprehension: independenceComprehensionFormData,
      schoolHistory: schoolHistoryFormData,
      recreation: recreationFormData,
      familyInterrelation: familyInterrelationFormData,
    },
  };

  return requestData;
};

// Função para enviar para a API
export const submitForm = async () => {
  const requestData = prepareRequestData();
  console.log('Preparando dados para envio:', requestData);  // Verifique os dados

  try {
    const response = await fetch('https://192.168.15.9:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    console.log('Resposta da API:', response);  // Log da resposta

    if (!response.ok) {
      throw new Error('Falha ao enviar os dados para a API');
    }

    const data = await response.json();
    console.log('Dados enviados com sucesso:', data);  // Log de sucesso
  } catch (error) {
    console.error('Erro ao enviar dados:', error);  // Log do erro
  }
};
