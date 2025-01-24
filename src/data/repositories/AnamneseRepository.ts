import { FormData } from "../model/AnamnaseState";
import { postAnamnese } from "../network/AnamneseService";

export class AnamneseRepository {
  static async submitAnamnese(formData: FormData) {
    return postAnamnese(formData);
  }
}
