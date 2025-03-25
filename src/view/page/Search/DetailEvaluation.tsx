
import { useParams } from "react-router-dom";
import {
    Typography,
    CircularProgress,
    Box,
    Divider,
} from "@mui/material";
import { useDetailEvaluationViewModel } from "../../../viewmodels/useDetailEvaluationViewModel";

export const DetailEvaluation = () => {
    const { id } = useParams();
    const { avaliacao, loading } = useDetailEvaluationViewModel(id);

    if (loading) return <CircularProgress />;
    if (!avaliacao) return <Typography>Erro ao carregar avaliação.</Typography>;

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Detalhes da Avaliação
            </Typography>
            <Typography variant="subtitle1">Data da Avaliação: {avaliacao.evaluationData}</Typography>
            <Typography variant="subtitle1">Queixa Principal: {avaliacao.mainComplaint}</Typography>

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Gestação</Typography>
            <Typography>Duração: {avaliacao.gestation?.gestationDuration || "N/D"}</Typography>
            <Typography>Acidentes: {avaliacao.gestation?.accidents || "N/D"}</Typography>
        </Box>
    );
};
