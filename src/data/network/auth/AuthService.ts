import axios from "axios";

const API = "http://localhost:8080/api/auth"; // ajuste se necessário

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API}/login`, { email, password });
    return response.data;
};

export const register = async (name: string, email: string, password: string) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API}/register`, { name, email, password }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
