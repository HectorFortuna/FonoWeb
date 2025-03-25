import { useEffect, useState } from "react";
import { getAllPatients } from "../data/network/PatientService";
import { PatientFormData } from "data/model/AnamnaseState";

export const useSearchPatientsViewModel = () => {
    const [pacientes, setPacientes] = useState<PatientFormData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPatients()
            .then((data: PatientFormData[]) => {
                return setPacientes(data.reverse());
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return { pacientes, loading };
};
