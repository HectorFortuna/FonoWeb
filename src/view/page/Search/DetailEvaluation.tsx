import { useParams } from "react-router-dom";
import { fieldTranslations as translations } from "../../../util/FieldTranslations";
import {
    Typography,
    CircularProgress,
    Box,
    Divider,
} from "@mui/material";
import { useDetailEvaluationViewModel } from "../../../viewmodels/useDetailEvaluationViewModel";

const SectionBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
            {title}
        </Typography>
        {children}
        <Divider sx={{ my: 2 }} />
    </Box>
);

const Field = ({ label, value }: { label: string; value: any }) => (
    <Typography>
        <strong>{label}:</strong>{" "}
        {value === null || value === ""
            ? "N/D"
            : value === true
                ? "Sim"
                : value === false
                    ? "Não"
                    : value}
    </Typography>
);

export const DetailEvaluation = () => {
    const { id } = useParams();
    const { avaliacao, loading } = useDetailEvaluationViewModel(id);

    if (loading) return <CircularProgress />;
    if (!avaliacao) return <Typography>Erro ao carregar avaliação.</Typography>;

    const renderSection = (title: string, data: Record<string, any>) => (
        <SectionBlock title={title}>
            {Object.entries(data).map(([key, value]) => (
                <Field key={key} label={translations[key] || key} value={value} />
            ))}
        </SectionBlock>
    );

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Detalhes da Avaliação
            </Typography>

            <SectionBlock title="Dados Gerais">
                <Field label={translations["evaluationData"]} value={avaliacao.evaluationData} />
                <Field label={translations["mainComplaint"]} value={avaliacao.mainComplaint} />
            </SectionBlock>

            {renderSection("Gestação", avaliacao.gestation)}
            {renderSection("Nutrição", avaliacao.nutrition)}
            {renderSection("Sono", avaliacao.sleep)}
            {renderSection("Desenvolvimento Psicomotor", avaliacao.psychomotorDevelopment)}
            {renderSection("Desenvolvimento da Linguagem", avaliacao.languageDevelopment)}
            {renderSection("Histórico Patológico", avaliacao.pathologicalHistory)}
            {renderSection("Independência e Compreensão", avaliacao.independenceAndComprehension)}
            {renderSection("Hábitos e Manias", avaliacao.habitsAndTics)}
            {renderSection("Histórico Escolar", avaliacao.schooling)}
            {renderSection("Recreação", avaliacao.recreation)}
            {renderSection("Relações Familiares", avaliacao.familyInterrelationship)}
        </Box>
    );
};
