import { StoreState } from "data/model/AnamnaseState";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { initialFormData, initialNutritionFormData, initialPregnancyFormData, initialSleepFormData, initialPsychomotorFormData, initialFamilyInterrelationshipFormData, initialIndependenceComprehensionFormData, initialLanguageFormData, initialPhatologicalHistoryFormData, initialRecreationFormData, initialSchoolHistoryFormData, initialHabitsAndTicksFormData } from "../data/utils/initialState";

export const useFormStore = create<StoreState>()(
    persist(
        (set, get) => ({

            formData: {
                ...initialFormData,
                address: initialFormData.address || [],
                siblings: initialFormData.siblings || []
            },


            pregnancyFormData: { ...initialPregnancyFormData, },
            nutritionFormData: { ...initialNutritionFormData },
            sleepFormData: { ...initialSleepFormData },
            psychomotorDevelopmentFormData: { ...initialPsychomotorFormData },
            languageDevelopmentFormData: { ...initialLanguageFormData },
            phatologicalHistoryFormData: { ...initialPhatologicalHistoryFormData },
            independenceComprehensionFormData: { ...initialIndependenceComprehensionFormData },
            schoolHistoryFormData: { ...initialSchoolHistoryFormData },
            recreationFormData: { ...initialRecreationFormData },
            familyInterrelationFormData: { ...initialFamilyInterrelationshipFormData },
            mainComplaint: "",
            evaluationData: new Date().toISOString().split("T")[0],
            habitsAndTicksFormData: { ...initialHabitsAndTicksFormData },


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

            setHabitsAndTicksField: (field, value) =>
                set((state) => ({
                    habitsAndTicksFormData: {
                        ...state.habitsAndTicksFormData,
                        [field]: value,
                    },
                })),

            setEvaluationData: (value) =>
                set(() => ({ evaluationData: value })),

            setMainComplaint: (value) =>
                set(() => ({ mainComplaint: value })),

            setAddress: (index, field, value) =>
                set((state) => {
                    const addresses = Array.isArray(state.formData.address)
                        ? [...state.formData.address]
                        : []; // ✅ Se `address` não for array, cria um array vazio

                    addresses[index] = {
                        ...(addresses[index] || {}), // ✅ Evita erro se `addresses[index]` for `undefined`
                        [field]: value
                    };

                    return { formData: { ...state.formData, address: addresses } };
                }),

            addAddress: () =>
                set((state) => ({
                    formData: {
                        ...state.formData,
                        address: [
                            ...(Array.isArray(state.formData.address) ? state.formData.address : []), // ✅ Garante que é um array
                            { street: "", number: "", neighborhood: "", city: "", state: "", cep: "" },
                        ],
                    },
                })),


            removeAddress: (index) =>
                set((state) => {
                    const addresses = [...state.formData.address];
                    if (addresses.length > 1) {
                        addresses.splice(index, 1);
                    }
                    return { formData: { ...state.formData, address: addresses } };
                }),

            setSibling: (index, field, value) =>
                set((state) => {
                    const siblings = [...(state.formData.siblings || [])];
                    if (!siblings[index]) {
                        siblings[index] = { siblingsName: "", siblingsAge: "" };
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
                            { siblingsName: "", siblingsAge: "" },
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
                    formData: { ...initialFormData },
                    pregnancyFormData: { ...initialPregnancyFormData },
                    nutritionFormData: { ...initialNutritionFormData },
                    sleepFormData: { ...initialSleepFormData },
                    psychomotorDevelopmentFormData: { ...initialPsychomotorFormData },
                    languageDevelopmentFormData: { ...initialLanguageFormData },
                    phatologicalHistoryFormData: { ...initialPhatologicalHistoryFormData },
                    independenceComprehensionFormData: { ...initialIndependenceComprehensionFormData },
                    schoolHistoryFormData: { ...initialSchoolHistoryFormData },
                    recreationFormData: { ...initialRecreationFormData },
                    familyInterrelationFormData: { ...initialFamilyInterrelationshipFormData },

                })),
        }),
        {
            name: "multi-step-form",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
