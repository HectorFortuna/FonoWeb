import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactForm } from "./view/page/ContactForm";
import { AddressForm } from "./view/page/AddressForm";
import { PregnancyForm } from "./view/page/PregnancyForm";
import { useFormStore } from "./states/ZustandCache";
import { NutritionForm } from "./view/page/NutritionForm";
import { SleepForm } from "./view/page/SleepForm";
import { PsychomotorDevelopment } from "view/page/PsychomotorDevelopment";
import { LanguageDevelopment } from "view/page/LanguageDevelopment";



const App: React.FC = () => {
  const { clearAllForm } = useFormStore();

  useEffect(() => {
    localStorage.removeItem("multi-step-form");
    clearAllForm();
    
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (window.confirm("Tem certeza que deseja sair? Seus dados serão perdidos.")) {
        localStorage.removeItem("multi-step-form")
        clearAllForm(); 
        return true; 
      } else {
        event.preventDefault();
        return false; 
      }
    };
      window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [clearAllForm]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/address-form" element={<AddressForm />} />
        <Route path="/pregnancy-form" element={<PregnancyForm />} />
        <Route path="/nutrition-form" element={<NutritionForm />} />
        <Route path="/sleep-form" element={<SleepForm />} />
        <Route path="/psychomotor-development-form" element={<PsychomotorDevelopment />} />
        <Route path="/language-development-form" element={<LanguageDevelopment />} />
      </Routes>
    </Router>
  );
};

export default App;
