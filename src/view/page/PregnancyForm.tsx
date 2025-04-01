import React from "react";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../../states/ZustandCache";

export const PregnancyForm: React.FC = () => {
  const { pregnancyFormData, setPregnancyField } = useFormStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/pacientes/novo/nutricao");
  };

  const handleBack = () => {
    navigate("/pacientes/novo/endereco");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#FAFAFA",
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        p: 3,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 600,
        margin: "40px auto",
      }}
    >
      {/* --- Gestação --- */}
      <TextField
        label="Duração da Gestação"
        placeholder="Em semanas, p. ex."
        variant="outlined"
        fullWidth
        value={pregnancyFormData.gestationDuration || ""}
        onChange={(e) => setPregnancyField("gestationDuration", e.target.value)}
      />

      <TextField
        label="Idade da Mãe"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.motherAge || ""}
        onChange={(e) => setPregnancyField("motherAge", e.target.value)}
      />

      <TextField
        label="Acidentes"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.accidents || ""}
        onChange={(e) => setPregnancyField("accidents", e.target.value)}
      />

      <TextField
        label="Doenças durante a gravidez"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.diseasesDuringPregnancy || ""}
        onChange={(e) =>
          setPregnancyField("diseasesDuringPregnancy", e.target.value)
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.prenatalTreatment || false}
            onChange={(e) =>
              setPregnancyField("prenatalTreatment", e.target.checked)
            }
          />
        }
        label="Tratamento Pré-Natal"
      />

      <TextField
        label="Medicamentos durante a gravidez"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.medicationsDuringPregnancy || ""}
        onChange={(e) =>
          setPregnancyField("medicationsDuringPregnancy", e.target.value)
        }
      />

      <TextField
        label="Como foi a gestação? (descoberta, estado emocional, mudanças, etc.)"
        variant="outlined"
        multiline
        minRows={3}
        fullWidth
        value={pregnancyFormData.pregnancyExperience || ""}
        onChange={(e) => setPregnancyField("pregnancyExperience", e.target.value)}
      />

      <TextField
        label="Como estava a relação do casal durante a gestação?"
        variant="outlined"
        multiline
        minRows={2}
        fullWidth
        value={pregnancyFormData.coupleRelationship || ""}
        onChange={(e) => setPregnancyField("coupleRelationship", e.target.value)}
      />

      <TextField
        label="Condições de saúde materna durante a gestação"
        variant="outlined"
        multiline
        minRows={3}
        fullWidth
        value={pregnancyFormData.maternalHealthConditions || ""}
        onChange={(e) => setPregnancyField("maternalHealthConditions", e.target.value)}
      />

      {/* --- Condições médicas --- */}
      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.hypotension || false}
            onChange={(e) => setPregnancyField("hypotension", e.target.checked)}
          />
        }
        label="Hipotensão"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.hypertension || false}
            onChange={(e) => setPregnancyField("hypertension", e.target.checked)}
          />
        }
        label="Hipertensão"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.anemia || false}
            onChange={(e) => setPregnancyField("anemia", e.target.checked)}
          />
        }
        label="Anemia"
      />

      {/* --- Parto --- */}
      <TextField
        label="Duração do Parto"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.deliveryDuration || ""}
        onChange={(e) => setPregnancyField("deliveryDuration", e.target.value)}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.normalDelivery || false}
            onChange={(e) =>
              setPregnancyField("normalDelivery", e.target.checked)
            }
          />
        }
        label="Parto Normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.forcepsDelivery || false}
            onChange={(e) =>
              setPregnancyField("forcepsDelivery", e.target.checked)
            }
          />
        }
        label="Fórceps"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.cesareanDelivery || false}
            onChange={(e) =>
              setPregnancyField("cesareanDelivery", e.target.checked)
            }
          />
        }
        label="Cesárea"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.anesthesia || false}
            onChange={(e) => setPregnancyField("anesthesia", e.target.checked)}
          />
        }
        label="Anestesia"
      />

      <TextField
        label="Peso ao Nascer (g)"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.birthWeight || ""}
        onChange={(e) => setPregnancyField("birthWeight", e.target.value)}
      />

      <TextField
        label="Comprimento (cm)"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.birthHeight || ""}
        onChange={(e) => setPregnancyField("birthHeight", e.target.value)}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.cried || false}
            onChange={(e) => setPregnancyField("cried", e.target.checked)}
          />
        }
        label="Chorou ao Nascer"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={pregnancyFormData.cyanosis || false}
            onChange={(e) => setPregnancyField("cyanosis", e.target.checked)}
          />
        }
        label="Cianose"
      />

      <TextField
        label="Observações"
        variant="outlined"
        multiline
        minRows={3}
        fullWidth
        value={pregnancyFormData.observations || ""}
        onChange={(e) => setPregnancyField("observations", e.target.value)}
      />

      {/* --- Pós-parto --- */}
      <TextField
        label="Como foi o pós-parto?"
        variant="outlined"
        multiline
        minRows={2}
        fullWidth
        value={pregnancyFormData.postpartumExperience || ""}
        onChange={(e) => setPregnancyField("postpartumExperience", e.target.value)}
      />

      <TextField
        label="Condições de saúde do bebê e da mãe após o parto"
        variant="outlined"
        multiline
        minRows={2}
        fullWidth
        value={pregnancyFormData.motherBabyHealthPostpartum || ""}
        onChange={(e) => setPregnancyField("motherBabyHealthPostpartum", e.target.value)}
      />

      <TextField
        label="Apresentou depressão pós-parto?"
        variant="outlined"
        fullWidth
        value={pregnancyFormData.postpartumDepression || ""}
        onChange={(e) => setPregnancyField("postpartumDepression", e.target.value)}
      />

      <TextField
        label="Como foram os primeiros dias em casa? (sono, amamentação, rede de apoio)"
        variant="outlined"
        multiline
        minRows={2}
        fullWidth
        value={pregnancyFormData.firstDaysAtHome || ""}
        onChange={(e) => setPregnancyField("firstDaysAtHome", e.target.value)}
      />

      {/* Botões "Voltar" / "Avançar" */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleBack}>
          Voltar
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Avançar
        </Button>
      </Box>
    </Box>
  );
};
