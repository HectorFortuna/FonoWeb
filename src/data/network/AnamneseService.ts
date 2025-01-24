
import { FormData } from "../model/AnamnaseState";

export const postAnamnese = async (formData: FormData) => {
    try {
      const response = await fetch("http://10.0.0.101:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const responseBody = await response.json().catch(() => null); 
  
      return {
        status: response.status,
        ok: response.ok,
        body: responseBody,
      };
    } catch (error: any) {
      // TODO corrigir para parar de dar erro ao testar 
      // console.error("Erro ao enviar os dados:", error);
  
      throw {
        message: error.message || "Erro desconhecido",
        details: error,
      };
    }
  };
