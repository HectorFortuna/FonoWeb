export interface FormData {
  patientName: string;
  patientAge: string;
  birthDate: string;
  fatherName: string;
  motherName: string;
  career: string;
  address: string;
  phone: string;
}

export interface Errors {
  patientName?: string;
  patientAge?: string;
  birthDate?: string;
  fatherName?: string;
  motherName?: string;
  career?: string;
  address?: string;
  phone?: string;
}
