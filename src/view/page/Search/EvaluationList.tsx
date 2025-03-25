// src/view/page/ListaAvaliacoes.tsx
import { useParams, useNavigate } from "react-router-dom";
import {
    Typography,
    List,
    ListItemButton,
    ListItemText,
    CircularProgress,
    Box,
} from "@mui/material";
import { useEvaluationsListViewModel } from "../../../viewmodels/useEvaluationsListViewModel";

export const EvaluationList = () => {
    const { id: patientId } = useParams();
    const { avaliacoes, pacienteNome, loading } = useEvaluationsListViewModel(patientId);
    const navigate = useNavigate();

    if (loading) return <CircularProgress />;

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Avaliações de {pacienteNome}
            </Typography>

            {avaliacoes.length === 0 ? (
                <Typography>Nenhuma avaliação encontrada.</Typography>
            ) : (
                <List>
                    {avaliacoes.map((a: any) => (
                        <ListItemButton
                            key={a.id}
                            onClick={() => navigate(`/avaliacoes/${a.id}`)}
                        >
                            <ListItemText
                                primary={`Data: ${a.evaluationData || "Não informada"}`}
                                secondary={`Queixa Principal: ${a.mainComplaint || "N/D"}`}
                            />
                        </ListItemButton>
                    ))}
                </List>
            )}
        </Box>
    );
};
