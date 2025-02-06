// adicionar um objeto Ex.: Request, que tenha um objeto Patient, e um objeto anamnese
export interface PatientFormData {
  patientName?: string;
  school?: string;
  fatherName?: string;
  motherName?: string;
  birthDate?: string;
  age?: string;
  phone?: string;
  career?: string;
  addresses: Address[]; 
  siblings: Sibling[]; 
}
export interface Address {
  street?: string;  // adicionar db
  number?: string;  // adicionar db
  neighborhood?: string;  // adicionar db
  city?: string;  // adicionar db
  state?: string; // adicionar db
  cep?: string; // adicionar db
}

export interface Sibling {
  name?: string;
  age?: string;
}
export interface PregnancyFormData {
  gestationDuration?: string;
  motherAge?: string;
  prenatalTreatment?: boolean; 
  accidents?: string; // mudar para string no db
  diseasesDuringPregnancy?: string; //mudar para string no db
  medicationsDuringPregnancy?: boolean;
  hypotension?: boolean ;  
  hypertension?: boolean;
  anemia?: boolean;
  deliveryDuration?: string;
  normalDelivery?: boolean;
  forcepsDelivery?: boolean;
  cesareanDelivery?: boolean;
  anesthesia?: boolean;
  birthWeight?: string;
  birthHeight?: string; // adicionar db
  cried?: boolean;
  cyanosis?: boolean;
  observations?: string;
  
}




// export interface Errors {
//   patientName?: string;
//   patientAge?: string;
//   birthDate?: string;
//   fatherName?: string;
//   motherName?: string;
//   career?: string;
//   address?: string;
//   phone?: string;
// }
