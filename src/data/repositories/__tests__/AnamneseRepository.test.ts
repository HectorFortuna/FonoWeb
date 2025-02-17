// import { AnamneseRepository } from "../AnamneseRepository";

// import { PatientFormData } from "../../model/AnamnaseState";
// import { postAnamnese } from "../../network/AnamneseService";


// jest.mock("../../network/AnamneseService", () => ({
//   postAnamnese: jest.fn(),
// }));    

// describe("AnamneseRepository", () => {
//     it("should call postAnamnese with the correct arguments", async () => {
//         const formData: PatientFormData = {
//             patientName: "John Doe",
//             patientAge: "30",
//             birthDate: "1990-01-01",
//             fatherName: "Father Doe",
//             motherName: "Mother Doe",
//             address: "123 Main St",
//             phone: "123-456-7890",
//             career: "Software Developer",
//         };
//         (postAnamnese as jest.Mock).mockResolvedValueOnce({success: true});
//         const result = await AnamneseRepository.submitAnamnese(formData);
        
//         expect(postAnamnese).toHaveBeenCalledWith(formData);
//         expect(result).toEqual({success: true});
//     });

//     it("should throw an error if postAnamnese throws an error", async () => {
//         const formData: PatientFormData = {
//             patientName: "John Doe",
//             patientAge: "30",
//             birthDate: "1990-01-01",
//             fatherName: "Father Doe",
//             motherName: "Mother Doe",
//             address: "123 Main St",
//             phone: "123-456-7890",
//             career: "Software Developer",
//         };
//         (postAnamnese as jest.Mock).mockRejectedValue(new Error("An error occurred"));
        
//         await expect(AnamneseRepository.submitAnamnese(formData)).rejects.toThrow(
//             "An error occurred"
//         );
//     });

// });