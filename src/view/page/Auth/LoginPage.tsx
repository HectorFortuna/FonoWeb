import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await axios.post("http://localhost:8080/api/auth/login", credentials);
            login(res.data.token);
            navigate("/");
        } catch (err) {
            setError("Usuário ou senha inválidos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f5f5f5"
        >
            <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        type="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Senha"
                        name="password"
                        type="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />

                    {error && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        sx={{ mt: 2 }}
                    >
                        {loading ? <CircularProgress size={24} /> : "Entrar"}
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};
