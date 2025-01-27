import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnamneseForm from '../AnamneseForm';
import { useAnamneseFormViewModel } from '../../viewmodels/AnamneseFormViewModel';

jest.mock('../../viewmodels/AnamneseFormViewModel');

const mockUseAnamneseFormViewModel = useAnamneseFormViewModel as jest.MockedFunction<typeof useAnamneseFormViewModel>;

describe('AnamneseForm', () => {
    beforeEach(() => {
        mockUseAnamneseFormViewModel.mockReturnValue({
            formData: {
                patientName: '',
                patientAge: '',
                birthDate: '',
                fatherName: '',
                motherName: '',
                career: '',
                address: '',
                phone: ''
            },
            errors: {},
            isSubmitting: false,
            message: '',
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });
    });

    test('renders form fields', () => {
        render(<AnamneseForm />);

        expect(screen.getByLabelText(/Nome do Paciente/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Idade/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Data de nascimento/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Nome do Pai/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Nome da Mãe/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Profissão/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Endereço/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    });

    test('displays error messages', () => {
        mockUseAnamneseFormViewModel.mockReturnValueOnce({
            ...mockUseAnamneseFormViewModel(),
            errors: {
                patientName: 'Nome é obrigatório',
                patientAge: 'Idade é obrigatória',
                birthDate: 'Data de nascimento é obrigatória',
                career: 'Profissão é obrigatória',
                address: 'Endereço é obrigatório',
                phone: 'Telefone é obrigatório'
            }
        });

        render(<AnamneseForm />);

        expect(screen.getByText(/Nome é obrigatório/i)).toBeInTheDocument();
        expect(screen.getByText(/Idade é obrigatória/i)).toBeInTheDocument();
        expect(screen.getByText(/Data de nascimento é obrigatória/i)).toBeInTheDocument();
        expect(screen.getByText(/Profissão é obrigatória/i)).toBeInTheDocument();
        expect(screen.getByText(/Endereço é obrigatório/i)).toBeInTheDocument();
        expect(screen.getByText(/Telefone é obrigatório/i)).toBeInTheDocument();
    });

    test('calls handleChange on input change', () => {
        const handleChange = jest.fn();
        mockUseAnamneseFormViewModel.mockReturnValueOnce({
            ...mockUseAnamneseFormViewModel(),
            handleChange
        });

        render(<AnamneseForm />);

        fireEvent.change(screen.getByLabelText(/Nome do Paciente/i), { target: { value: 'John Doe' } });
        expect(handleChange).toHaveBeenCalled();
    });

    test('calls handleSubmit on form submit', () => {
        const handleSubmit = jest.fn((e) => e.preventDefault());
        mockUseAnamneseFormViewModel.mockReturnValueOnce({
            ...mockUseAnamneseFormViewModel(),
            handleSubmit
        });

        render(<AnamneseForm />);

        fireEvent.submit(screen.getByRole('button', { name: /Enviar/i }));
        expect(handleSubmit).toHaveBeenCalled();
    });

    test('displays submitting state', () => {
        mockUseAnamneseFormViewModel.mockReturnValueOnce({
            ...mockUseAnamneseFormViewModel(),
            isSubmitting: true
        });

        render(<AnamneseForm />);

        expect(screen.getByRole('button', { name: /Enviando.../i })).toBeDisabled();
    });
});