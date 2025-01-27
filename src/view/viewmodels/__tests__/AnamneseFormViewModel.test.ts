import { renderHook, act, waitFor} from "@testing-library/react";
import { ChangeEvent, FormEvent } from "react";
import { useAnamneseFormViewModel } from "../AnamneseFormViewModel";
import { AnamneseRepository } from "../../../data/repositories/AnamneseRepository";

jest.mock("../../../data/repositories/AnamneseRepository");

describe("useAnamneseFormViewModel", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should initialize with default values", () => {
        const { result } = renderHook(() => useAnamneseFormViewModel());

        expect(result.current.formData).toEqual({
            patientName: '',
            patientAge: '',
            fatherName: '',
            birthDate: '',
            motherName: '',
            career: '',
            address: '',
            phone: '',
        });
        expect(result.current.errors).toEqual({});
        expect(result.current.isSubmitting).toBe(false);
        expect(result.current.message).toBe(null);
    });

    it("should update formData on handleChange", () => {
        const { result } = renderHook(() => useAnamneseFormViewModel());
        act(() => {
            result.current.handleChange({
                target: { name: "patientName", value: "John Doe" }
            } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formData.patientName).toBe("John Doe");
    });

    it("should validate formData correctly", () => {
        const { result } = renderHook(() => useAnamneseFormViewModel());
        act(() => {
            result.current.handleSubmit({
                preventDefault: jest.fn(),
            } as unknown as FormEvent<HTMLFormElement>);
        });

        expect(result.current.errors).toEqual({
            patientName: "Nome do paciente é obrigatório",
            patientAge: "Idade é obrigatória",
            career: "Profissão é obrigatória",
            address: "Endereço é obrigatório",
            phone: "Telefone é obrigatório",
        });
    });

    it("should submit formData successfully", async () => {
        const { result } = renderHook(() => useAnamneseFormViewModel());
    
        (AnamneseRepository.submitAnamnese as jest.Mock).mockResolvedValue({
          ok: true,
          body: { id: "123" },
        });
    
        act(() => {
          result.current.formData.patientName = "John Doe";
          result.current.formData.patientAge = "30";
          result.current.formData.career = "Engineer";
          result.current.formData.address = "123 Main St";
          result.current.formData.phone = "555-5555";
        });
    
        await act(async () => {
          await result.current.handleSubmit({
            preventDefault: jest.fn(),
          } as unknown as FormEvent<HTMLFormElement>);
        });
    
        await waitFor(() => {
          expect(result.current.isSubmitting).toBe(false);
          expect(result.current.message).toBe("Ficha enviada com sucesso! ID gerado: 123");
        });
      });
  
      it("should handle submission error", async () => {
        const { result } = renderHook(() => useAnamneseFormViewModel());
    
        (AnamneseRepository.submitAnamnese as jest.Mock).mockRejectedValue(new Error("Network Error"));

        act(() => {
          result.current.formData.patientName = "John Doe";
          result.current.formData.patientAge = "30";
          result.current.formData.career = "Engineer";
          result.current.formData.address = "123 Main St";
          result.current.formData.phone = "555-5555";
        });
    
        await act(async () => {
          await result.current.handleSubmit({
            preventDefault: jest.fn(),
          } as unknown as FormEvent<HTMLFormElement>);
        });
    
        await waitFor(() => {
          expect(result.current.isSubmitting).toBe(false);
          expect(result.current.message).toBe("Erro de conexão: Network Error");
        });
      });
    });
 