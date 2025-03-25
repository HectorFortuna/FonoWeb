import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getAllEvaluations = async () => {
    const response = await axios.get(`${BASE_URL}/evaluations`);
    return response.data;
};

export const getEvaluationById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/evaluations/${id}`);
    return response.data;
};
