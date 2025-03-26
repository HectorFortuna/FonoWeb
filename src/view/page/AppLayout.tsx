import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormStore } from "../../states/ZustandCache";


const drawerWidth = 240;

// Mapeia caminhos para nomes amigáveis
const routeTitles: Record<string, string> = {
    "/": "Início",
    "/pacientes/novo": "Dados Pessoais",
    "/pacientes/novo/endereco": "Endereço",
    "/pacientes/novo/gestacao": "Gravidez",
    "/pacientes/novo/nutricao": "Nutrição",
    "/pacientes/novo/sono": "Sono",
    "/pacientes/novo/desenvolvimento-psicomotor": "Desenvolvimento Psicomotor",
    "/pacientes/novo/desenvolvimento-linguagem": "Desenvolvimento da Linguagem",
    "/pacientes/novo/historico-patologico": "Histórico Patológico",
    "/pacientes/novo/independencia": "Independência e Compreensão",
    "/pacientes/novo/historico-escolar": "Histórico Escolar",
    "/pacientes/novo/recreacao": "Recreação",
    "/pacientes/novo/habitos-e-tiques": "Hábitos e Manias",
    "/pacientes/novo/relacao-familiar": "Relação Familiar",
    "/pacientes/buscar": "Buscar Paciente",
};

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const title = routeTitles[location.pathname] || "Fonoaudiologia App";

    const { clearAllForm } = useFormStore()

    return (
        <Box sx={{ display: "flex" }}>
            {/* Top Navigation */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Side Menu */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    clearAllForm(); // 🧹 limpa os dados antigos
                                    console.log("Estado resetado:", useFormStore.getState().formData);
                                    navigate("/pacientes/novo"); // vai para o início do cadastro
                                }}
                            >
                                <ListItemText primary="Cadastrar Paciente" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/pacientes/buscar")}>
                                <ListItemText primary="Consultar Paciente" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Main content */}
            <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f9f9f9", p: 3 }}>
                <Toolbar /> {/* Para compensar o AppBar fixo */}
                {children}
            </Box>
        </Box>
    );
};
