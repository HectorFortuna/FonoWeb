import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            setError("");
            await axios.post("http://localhost:8080/api/auth/register", form);
            alert("Cadastro realizado com sucesso!");
            navigate("/login");
        } catch (err: any) {
            setError("Erro ao cadastrar. Verifique os dados.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
                <Typography variant="h5" gutterBottom>
                    Criar nova conta
                </Typography>
                <TextField
                    label="Nome"
                    name="name"
                    fullWidth
                    margin="normal"
                    value={form.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    margin="normal"
                    value={form.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Senha"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={form.password}
                    onChange={handleChange}
                />
                {error && (
                    <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                        {error}
                    </Typography>
                )}
                <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                        Cadastrar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};
