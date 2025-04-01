import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../../states/ZustandCache";

export const ContactForm: React.FC = () => {
  const { formData, mainComplaint, evaluationData, setField, setMainComplaint, setEvaluationData, setSibling, addSibling, removeSiblings } = useFormStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    navigate("endereco");
  };

  return (
    console.log("Dados do formulário:", formData),
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "40px auto",   // espaçamento vertical
        padding: 3,           // padding interno
        backgroundColor: "#FAFAFA",
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        gap: 2,               // espaço entre os elementos filhos
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Queixa Principal */}
        <TextField
          label="Queixa Principal"
          variant="outlined"
          value={mainComplaint}
          onChange={(e) => setMainComplaint(e.target.value)}
          fullWidth
        />

        {/* Data da Avaliação */}
        <TextField
          label="Data da Avaliação"
          variant="outlined"
          type="date"
          value={evaluationData}
          onChange={(e) => setEvaluationData(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />

        {/* Nome do Paciente */}
        <TextField
          label="Nome do Paciente"
          variant="outlined"
          value={formData.patientName}
          onChange={(e) => setField("patientName", e.target.value)}
          fullWidth
          required
        />

        {/* Escola */}
        <TextField
          label="Escola"
          variant="outlined"
          value={formData.school}
          onChange={(e) => setField("school", e.target.value)}
          fullWidth
        />

        {/* Pai */}
        <TextField
          label="Nome do Pai"
          variant="outlined"
          value={formData.fatherName}
          onChange={(e) => setField("fatherName", e.target.value)}
          fullWidth
        />


        {/* Profissão do pai */}
        <TextField
          label="Profissão do pai"
          variant="outlined"
          value={formData.fatherCareer}
          onChange={(e) => setField("fatherCareer", e.target.value)}
          fullWidth
        />

        {/* Mãe */}
        <TextField
          label="Nome da Mãe"
          variant="outlined"
          value={formData.motherName}
          onChange={(e) => setField("motherName", e.target.value)}
          fullWidth
        />

        {/* Profissão da mãe */}
        <TextField
          label="Profissão da mãe"
          variant="outlined"
          value={formData.motherCareer}
          onChange={(e) => setField("motherCareer", e.target.value)}
          fullWidth
        />


        {/* Data de Nascimento */}
        <TextField
          label="Data de Nascimento"
          variant="outlined"
          fullWidth
          type="text"
          value={formData.birthDate || ""}
          onChange={(e) => setField("birthDate", e.target.value)}
        />

        {/* Idade */}
        <TextField
          label="Idade"
          type="number"
          variant="outlined"
          value={formData.patientAge}
          onChange={(e) => setField("patientAge", e.target.value)}
          fullWidth
        />

        {/* Telefone */}
        <TextField
          label="Telefone"
          type="tel"
          variant="outlined"
          value={formData.phoneNumber}
          onChange={(e) => setField("phoneNumber", e.target.value)}
          fullWidth
        />

        {/* Uso de Medicação Contínua */}
        <TextField
          label="Uso de medicação contínua (quais?)"
          variant="outlined"
          value={formData.medications || ""}
          onChange={(e) => setField("medications", e.target.value)}
          fullWidth
        />

        {/* Quem vive com a criança */}
        <TextField
          label="Quem vive com a criança?"
          variant="outlined"
          value={formData.livesWith || ""}
          onChange={(e) => setField("livesWith", e.target.value)}
          fullWidth
        />

        {/* Quem cuida na ausência */}
        <TextField
          label="Quem cuida da criança na ausência dos responsáveis?"
          variant="outlined"
          value={formData.caregiver || ""}
          onChange={(e) => setField("caregiver", e.target.value)}
          fullWidth
        />


        {/* Campos de Irmãos */}
        {formData.siblings.map((sibling: any, index: number) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E0E0E0",
              borderRadius: 1,
              padding: 2,
            }}
          >
            <TextField
              label="Nome do Irmão"
              variant="outlined"
              value={sibling.siblingsName}
              onChange={(e) => setSibling(index, "siblingsName", e.target.value)}
              fullWidth
            />
            <TextField
              label="Idade do Irmão"
              type="number"
              variant="outlined"
              value={sibling.siblingsAge}
              onChange={(e) => setSibling(index, "siblingsAge", e.target.value)}
              fullWidth
            />
          </Box>
        ))}

        {/* Botões para irmãos */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            width: "100%",
            marginTop: 1,
          }}
        >
          {/* Remover Irmão */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeSiblings(formData.siblings.length - 1)}
            disabled={formData.siblings.length <= 1}
          >
            Remover Irmão
          </Button>

          {/* Adicionar Irmão */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={addSibling}
          >
            Adicionar Irmão
          </Button>
        </Box>

        {/* Botões: Sair / Avançar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 2,
          }}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/")}
          >
            Sair
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Avançar
          </Button>
        </Box>

      </Box>
    </Box>
  );
};
