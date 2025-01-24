import React from 'react';
import { useAnamneseFormViewModel } from '../viewmodels/AnamneseFormViewModel'

function AnamneseForm() {
  const {formData, errors, isSubmitting, message ,handleChange,handleSubmit} = useAnamneseFormViewModel();
  return (
    <form onSubmit={handleSubmit}>
      <h1>Ficha de Anamnese</h1>
      {message && <p>{message}</p>} 
      <div>
        <label htmlFor="patientName">Nome do Paciente:</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
        {errors.patientName && <div className="error">{errors.patientName}</div>}
      </div>
      
      <div>
        <label htmlFor="patientAge">Idade:</label>
        <input
          type="number"
          id="patientAge"
          name="patientAge"
          value={formData.patientAge}
          onChange={handleChange}
        />
        {errors.patientAge && <div className="error">{errors.patientAge}</div>}
      </div>

      <div>
        <label htmlFor="birthDate">Data de nascimento:</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
        />
        {errors.patientAge && <div className="error">{errors.birthDate}</div>}
      </div>

      <div>
        <label htmlFor="fatherName">Nome do Pai:</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="motherName">Nome da Mãe:</label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="career">Profissão:</label>
        <input
          type="text"
          id="career"
          name="career"
          value={formData.career}
          onChange={handleChange}
        />
        {errors.career && <div className="error">{errors.career}</div>}
      </div>

      <div>
        <label htmlFor="address">Endereço:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div className="error">{errors.address}</div>}
      </div>

      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone} 
          onChange={handleChange}
        />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </div>

      <button type="submit" disabled ={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</button>
    </form>
  );
}

export default AnamneseForm;
