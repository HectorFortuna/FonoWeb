import { PatientFormData } from "data/model/AnamnaseState";
import { PregnancyFormData } from "data/model/AnamnaseState"; 
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreState {
  formData: Partial<PatientFormData>;
  pregnancyFormData: Partial<PregnancyFormData>;

  setField: (field: keyof PatientFormData, value: string) => void;
  setPregnancyField: (field : keyof PregnancyFormData, value: string | boolean ) => void;

  setAddress: (index: number, field: keyof PatientFormData["addresses"][number], value: string) => void;
  addAddress: () => void;
  removeAddress:(index: number) => void

  setSibling: (index: number, field: keyof PatientFormData["siblings"][number], value: string) => void;
  addSibling: () => void;
  removeSiblings:(index: number) => void;
  
  clearAllForm: () => void;
  
}

export const useFormStore = create<StoreState>()(
  persist(
    (set) => ({
        formData: {
            addresses: [{ street: "", number: "", neighborhood: "", city: "", state: "", cep: "" }], // 🔥 Garante que addresses nunca inicia vazio
        },
        pregnancyFormData: {},
        setField: (field, value) =>
        set((state) => ({
          formData: { ...state.formData, [field]: value },
        })),
        
        setPregnancyField: (field, value) =>
        set((state) => ({
          pregnancyFormData: { ...state.pregnancyFormData, [field]: value },
        })),

        setAddress: (index, field, value) =>
            set((state) => {
              const addresses = [...state.formData.addresses || []];
              addresses[index] = { ...addresses[index], [field]: value };
              return { formData: { ...state.formData, addresses } };
            }),

        addAddress: () =>
            set((state) => ({
            formData: {
                ...state.formData,
                addresses: [
                ...(state.formData.addresses || []),
                {
                    street: "",
                    number: "",
                    neighborhood: "",
                    city: "",
                    state: "",
                    cep: "",
                }, 
                ],
            },
            })),

        removeAddress: () =>
            set((state) => {
                const addresses = [...(state.formData.addresses || [])];
                if (addresses.length > 1) {
                    addresses.pop();
                }
                return { formData: { ...state.formData, addresses } };
            }),

        setSibling: (index, field, value) =>
            set((state) => {
            const siblings = [...(state.formData.siblings || [])];
            if (!siblings[index]) {
                siblings[index] = { name: "", age: "" }; 
            }
            siblings[index][field] = value;
            return { formData: { ...state.formData, siblings } };
            }),

        addSibling: () =>
            set((state) => ({
                formData: {
                    ...state.formData,
                    siblings: [
                    ...(state.formData.siblings || []),
                    { name: "", age: "" }, 
                    ],
            },
            })),

        removeSiblings: () =>
            set((state) => {
                const siblings = [...(state.formData.siblings || [])];
                if (siblings.length = 0) {
                    siblings.pop();
                }
                return { formData: { ...state.formData, siblings } };
            }),

        clearAllForm: () =>
            set(() => ({
                formData: {},
                pregnancyFormData: {}
            })),
        }),
        
        {
            name: "multi-step-form",
            storage: createJSONStorage(() => localStorage), 
        }
    )
);
