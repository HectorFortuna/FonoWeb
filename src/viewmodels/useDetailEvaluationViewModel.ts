// src/viewmodel/useDetalheAvaliacaoVM.ts
import { useEffect, useState } from "react";
import { getEvaluationById } from "../data/network/EvaluationService";

export const useDetailEvaluationViewModel = (id: string | undefined) => {
    const [avaliacao, setAvaliacao] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        getEvaluationById(id)
            .then(setAvaliacao)
            .catch((err) => console.error("Erro ao buscar avaliação", err))
            .finally(() => setLoading(false));
    }, [id]);

    return { avaliacao, loading };
};
