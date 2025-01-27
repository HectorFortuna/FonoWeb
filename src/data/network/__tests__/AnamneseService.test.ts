import { postAnamnese } from "../AnamneseService";

global.fetch = jest.fn();

describe("postAnamnese", () => {
  it("deve chamar fetch com os argumentos corretos e retornar a resposta da API", async () => {
    const mockResponse = {
      ok: true,
      status: 201,
      json: jest.fn().mockResolvedValue({ success: true, id: "123" }),
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    const formData = {
      patientName: "John Doe",
      patientAge: "30",
      birthDate: "1990-01-01",
      fatherName: "Father Doe",
      motherName: "Mother Doe",
      address: "123 Main St",
      phone: "123-456-7890",
      career: "Software Developer",
    };

    const result = await postAnamnese(formData);

    expect(fetch).toHaveBeenCalledWith("http://10.0.0.101:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    expect(result).toEqual({
      status: 201,
      ok: true,
      body: { success: true, id: "123" },
    });
  });

  it("deve lançar um erro se fetch falhar", async () => {
    const error = new Error("Erro de conexão");
    (fetch as jest.Mock).mockRejectedValue(error);

    const formData = {
      patientName: "John Doe",
      patientAge: "30",
      birthDate: "1990-01-01",
      fatherName: "Father Doe",
      motherName: "Mother Doe",
      address: "123 Main St",
      phone: "123-456-7890",
      career: "Software Developer",
    };

    await expect(postAnamnese(formData)).rejects.toEqual({
      message: "Erro de conexão",
      details: error,
    });

    expect(fetch).toHaveBeenCalledWith("http://10.0.0.101:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  });

  it("deve retornar null no corpo da resposta se response.json falhar", async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: jest.fn().mockRejectedValue(new Error("Erro ao processar JSON")),
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    const formData = {
      patientName: "John Doe",
      patientAge: "30",
      birthDate: "1990-01-01",
      fatherName: "Father Doe",
      motherName: "Mother Doe",
      address: "123 Main St",
      phone: "123-456-7890",
      career: "Software Developer",
    };

    const result = await postAnamnese(formData);

    expect(result).toEqual({
      status: 200,
      ok: true,
      body: null, 
    });
  });

});
