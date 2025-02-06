import { PatientFormData } from "../model/AnamnaseState";
import { postAnamnese } from "../network/AnamneseService";

export class AnamneseRepository {
  static async submitAnamnese(formData: PatientFormData) {
    return postAnamnese(formData);
  }
}
