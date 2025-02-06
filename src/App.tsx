import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactForm } from "./view/page/ContactForm";
import { AddressForm } from "./view/page/AddressForm";
import { PregnancyForm } from "./view/page/PregnancyForm";
import { useFormStore } from "./states/ZustandCache";


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
      </Routes>
    </Router>
  );
};

export default App;
