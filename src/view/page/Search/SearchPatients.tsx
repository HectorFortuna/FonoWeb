import { List, ListItemButton, ListItemText, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSearchPatientsViewModel } from "../../../viewmodels/useSearchPatientsViewModel";

export const SearchPatients = () => {
    const { pacientes, loading } = useSearchPatientsViewModel();
    const navigate = useNavigate();

    if (loading) return <CircularProgress />;

    return (
        <>
            <Typography variant="h5" gutterBottom>Pacientes Cadastrados</Typography>
            <List>
                {pacientes.map((p: any) => (
                    <ListItemButton key={p.id} onClick={() => navigate(`/pacientes/${p.id}/avaliacoes`)}>
                        <ListItemText
                            primary={p.name}
                            secondary={`Nascimento: ${p.birthDate || "N/D"} • Idade: ${p.age || "N/D"} • Pais: ${p.fatherName} / ${p.motherName}`}
                        />
                    </ListItemButton>
                ))}
            </List>
        </>
    );
};
