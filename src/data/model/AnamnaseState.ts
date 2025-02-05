export interface FormData {
  school: string;
  patientName: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  age: string;
  phone: string;
  profession: string;
  addresses: [
    {
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      cep: "",
    },
  ],
  siblings: { name: string; age: string }[];
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
