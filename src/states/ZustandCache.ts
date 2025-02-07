import { StoreState} from "data/model/AnamnaseState"; 
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { initialFormData, initialNutritionFormData, initialPregnancyFormData, initialSleepFormData, initialPsychomotorFormData, initialFamilyInterrelationshipFormData, initialIndependenceComprehensionFormData, initialLanguageFormData, initialPhatologicalHistoryFormData, initialRecreationFormData, initialSchoolHistoryFormData } from "../data/utils/initialState";

export const useFormStore = create<StoreState>()(
  persist(
    (set, get) => ({
      
    formData: {...initialFormData,},
    pregnancyFormData: {...initialPregnancyFormData,},
    nutritionFormData: {...initialNutritionFormData},
    sleepFormData: {...initialSleepFormData},
    psychomotorDevelopmentFormData: {...initialPsychomotorFormData},
    languageDevelopmentFormData: {...initialLanguageFormData},
    phatologicalHistoryFormData: {...initialPhatologicalHistoryFormData},
    independenceComprehensionFormData: {...initialIndependenceComprehensionFormData},
    schoolHistoryFormData: {...initialSchoolHistoryFormData},
    recreationFormData: {...initialRecreationFormData},
    familyInterrelationFormData: {...initialFamilyInterrelationshipFormData},

    
    setField: (field, value) =>
        set((state) => ({
            formData: { ...state.formData, [field]: value },
    })),

    setPregnancyField: (field, value) =>
        set((state) => ({
            pregnancyFormData: {
                ...state.pregnancyFormData,
                [field]: value, 
            },
    })),

    setNutritionField: (field, value) =>
        set((state) => ({
            nutritionFormData: {
                ...state.nutritionFormData,
                [field]: value, 
            },
    })),
    
    setSleepField: (field, value) =>
        set((state) => ({
            sleepFormData: {
                ...state.sleepFormData,
                [field]: value, 
            },
    })),    
    
    setPsychomotorDevelopmentField: (field, value) =>
        set((state) => ({
            psychomotorDevelopmentFormData: {
                ...state.psychomotorDevelopmentFormData,
                [field]: value, 
            },
    })),

    setLanguageDevelopmentField: (field, value) =>
        set((state) => ({
            languageDevelopmentFormData: {
                ...state.languageDevelopmentFormData,
                [field]: value, 
            },
    })),

    setPhatologicalHistoryField: (field, value) =>
        set((state) => ({
            phatologicalHistoryFormData: {
                ...state.phatologicalHistoryFormData,
                [field]: value, 
            },
    })),

    setIndependenceComprehensionField: (field, value) =>
        set((state) => ({
            independenceComprehensionFormData: {
                ...state.independenceComprehensionFormData,
                [field]: value, 
            },
    })),

    setSchoolHistoryField: (field, value) =>
        set((state) => ({
            schoolHistoryFormData: {
                ...state.schoolHistoryFormData,
                [field]: value, 
            },
    })),

    setRecreationField: (field, value) =>
        set((state) => ({
            recreationFormData: {
                ...state.recreationFormData,
                [field]: value, 
            },
    })),

    setFamilyInterrelationField: (field, value) =>
        set((state) => ({
            familyInterrelationFormData: {
                ...state.familyInterrelationFormData,
                [field]: value, 
            },
    })),

    setAddress: (index, field, value) =>
        set((state) => {
            const addresses = [...state.formData.addresses];
            addresses[index] = { ...addresses[index], [field]: value };
            return { formData: { ...state.formData, addresses } };
    }),

    addAddress: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                addresses: [
                ...state.formData.addresses,
                { street: "", number: "", neighborhood: "", city: "", state: "", cep: "" },
            ],
          },
    })),

    removeAddress: (index) =>
        set((state) => {
            const addresses = [...state.formData.addresses];
            if (addresses.length > 1) {
                addresses.splice(index, 1);
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

    removeSiblings: (index) =>
        set((state) => {
            const siblings = [...(state.formData.siblings || [])];
            if (siblings.length > 1) {
                siblings.splice(index, 1);
            }
            return { formData: { ...state.formData, siblings } };
    }),

    clearAllForm: () =>
        set(() => ({
            formData: {...initialFormData},
            pregnancyFormData: {...initialPregnancyFormData },
            nutritionFormData: {...initialNutritionFormData},
        })),
    }),
    {
      name: "multi-step-form",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
