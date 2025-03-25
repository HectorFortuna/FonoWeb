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
    "/address-form": "Endereço",
    "/pregnancy-form": "Gravidez",
    "/nutrition-form": "Nutrição",
    "/sleep-form": "Sono",
    "/psychomotor-development-form": "Desenvolvimento Psicomotor",
    "/language-development-form": "Desenvolvimento da Linguagem",
    "/phatological-history-form": "Histórico Patológico",
    "/independence-form": "Independência e Compreensão",
    "/school-history-form": "Histórico Escolar",
    "/recreation-form": "Recreação",
    "/habits-and-ticks-form": "Hábitos e Manias",
    "/family-interrelation-form": "Relação Familiar",
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
