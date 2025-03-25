import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getAllPatients = async () => {
    const response = await axios.get(`${BASE_URL}/patients`);
    return response.data;
};

export const getPatientById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/patients/${id}`);
    return response.data;
};
