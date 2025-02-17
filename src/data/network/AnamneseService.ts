import axios from "axios";
import { useFormStore } from "../../states/ZustandCache";

// 🔹 Função para preparar os dados do paciente antes do envio
export const preparePatientData = () => {
  const { formData } = useFormStore.getState();

  return {
    name: formData.patientName || "",
    fatherName: formData.fatherName || "",
    motherName: formData.motherName || "",
    birthDate: formData.birthDate || "",
    age: formData.patientAge || "",
    phone: formData.phoneNumber || "",
    career: formData.career || "",
    school: formData.school || "",
    siblings: Array.isArray(formData.siblings) ? formData.siblings.map((sibling) => ({
      name: sibling.siblingsName || "",
      age: sibling.siblingsAge || "",
    })) : [],
    address: Array.isArray(formData.address) ? formData.address.map((addr) => ({
      street: addr.street || "",
      number: addr.number || "",
      neighborhood: addr.neighborhood || "",
      city: addr.city || "",
      state: addr.state || "",
      cep: addr.cep || "",
    })) : [],
  };
};

// 🔹 Função para preparar os dados da anamnese com o patientId
export const prepareAnamneseData = (patientId: string) => {
  const { pregnancyFormData, nutritionFormData, sleepFormData, psychomotorDevelopmentFormData, languageDevelopmentFormData, phatologicalHistoryFormData, independenceComprehensionFormData, schoolHistoryFormData, recreationFormData, familyInterrelationFormData,habitsAndTicksFormData,mainComplaint,evaluationData } = useFormStore.getState();

  return {
    patientId,
    gestation: pregnancyFormData,
    nutrition: nutritionFormData,
    sleep: sleepFormData,
    psychomotorDevelopment: psychomotorDevelopmentFormData,
    languageDevelopment: languageDevelopmentFormData,
    pathologicalHistory: phatologicalHistoryFormData,
    independenceAndComprehension: independenceComprehensionFormData,
    schooling: schoolHistoryFormData,
    recreation: recreationFormData,
    familyInterrelationship: familyInterrelationFormData,
    habitsAndTics: habitsAndTicksFormData,
    mainComplaint: mainComplaint || "",  // ✅ Adicionado
    evaluationData: evaluationData || new Date().toISOString().split("T")[0],
  };
};

// 🔹 Função para enviar a anamnese
export const submitAnamnese = async (patientId: string) => {
  const anamneseData = prepareAnamneseData(patientId);
  console.log("📡 Enviando anamnese:", JSON.stringify(anamneseData, null, 2));

  try {
    const response = await axios.post("http://10.0.0.101:8080/api/evaluations", anamneseData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ Anamnese cadastrada com sucesso!", response.data);
  } catch (error: any) {
    console.error("❌ Erro ao cadastrar anamnese:", error.response?.status, error.response?.data);
  }
};

// 🔹 Função principal para enviar paciente e anamnese no fluxo correto
export const submitForm = async () => {
  console.log("🛑 Função submitForm foi chamada!");

  const patientData = preparePatientData();
  console.log("📡 Enviando paciente:", JSON.stringify(patientData, null, 2));

  if (!patientData || Object.keys(patientData).length === 0) {
    console.error("❌ Erro: Dados do paciente estão vazios.");
    return;
  }

  try {
    // 🔹 1. Envia os dados do paciente
    const response = await axios.post("http://10.0.0.101:8080/api/patients", patientData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ Paciente cadastrado com sucesso!", response.data);

    // 🔹 2. Pega o ID do paciente recém-criado
    const patientId = response.data.id; // 🔥 Certifique-se de que a API retorna o `id` corretamente

    if (!patientId) {
      console.error("❌ Erro: ID do paciente não foi retornado pela API!");
      return;
    }

    // 🔹 3. Envia a anamnese associada ao paciente
    await submitAnamnese(patientId);

    console.log("🎉 Sucesso! Paciente e Anamnese cadastrados!");
  } catch (error: any) {
    console.error("❌ Erro ao cadastrar paciente:", error.response?.status, error.response?.data);
  }
};
