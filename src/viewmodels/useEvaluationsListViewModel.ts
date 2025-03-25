// src/viewmodel/useListaAvaliacoesVM.ts
import { useEffect, useState } from "react";
import { getAllEvaluations } from "../data/network/EvaluationService";
import { getPatientById } from "../data/network/PatientService";

export const useEvaluationsListViewModel = (patientId: string | undefined) => {
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [pacienteNome, setPacienteNome] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!patientId) return;

            try {
                const [allEvaluations, patientData] = await Promise.all([
                    getAllEvaluations(),
                    getPatientById(patientId),
                ]);

                const avaliacoesFiltradas = allEvaluations.filter(
                    (a: any) => a.patientId === patientId
                );

                setAvaliacoes(avaliacoesFiltradas);
                setPacienteNome(patientData.name);
            } catch (err) {
                console.error("Erro ao buscar avaliações:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [patientId]);

    return { avaliacoes, pacienteNome, loading };
};
