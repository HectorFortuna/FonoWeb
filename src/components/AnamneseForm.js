import React, { useState } from 'react';

function AnamneseForm() {
  
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    fatherName: '',
    motherName: '',
    career: '',
    address: '',
    phone: '',
  });

  
  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const validate = () => {
    const newErrors = {};
    if (!formData.patientName) newErrors.patientName = 'Nome do paciente é obrigatório';
    if (!formData.patientAge) newErrors.patientAge = 'Idade é obrigatória';
    if (!formData.career) newErrors.career = 'Profissão é obrigatória';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // TODO chamada Api 

      console.log('Dados enviados:', formData);
      alert('Ficha de anamnese enviada com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ficha de Anamnese</h1>

      <div>
        <label htmlFor="patientName">Nome do Paciente:</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.nomePaciente}
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
          value={formData.idade}
          onChange={handleChange}
        />
        {errors.idade && <div className="error">{errors.patientAge}</div>}
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
          value={formData.telefone}
          onChange={handleChange}
        />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </div>

      <button type="submit">Enviar Ficha</button>
    </form>
  );
}

export default AnamneseForm;