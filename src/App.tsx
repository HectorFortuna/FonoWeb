import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactForm } from "./view/page/ContactForm";
import { AddressForm } from "./view/page/AddressForm";
import { PregnancyForm } from "./view/page/PregnancyForm";
import { NutritionForm } from "./view/page/NutritionForm";
import { SleepForm } from "./view/page/SleepForm";
import { PsychomotorDevelopment } from "view/page/PsychomotorDevelopment";
import { LanguageDevelopment } from "view/page/LanguageDevelopment";
import { PhatologicalHistory } from "view/page/PhatologicalHistoryFormData";
import { IndependenceComprehension } from "view/page/IndependenceComprehensionFormData";
import { SchoolHistory } from "view/page/SchoolHistoryFormData";
import { RecreationForm } from "view/page/RecreationFormData";
import { FamilyInterrelationForm } from "view/page/FamilyInterrelationFormData";
import { HabitsAndTicks } from "view/page/HabitsAndTicksForm";
import { AppLayout } from "view/page/AppLayout";
import { SearchPatients } from "view/page/Search/SearchPatients";
import { EvaluationList } from "view/page/Search/EvaluationList";
import { DetailEvaluation } from "view/page/Search/DetailEvaluation";
import { FormWizard } from "view/page/FormWizard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <AppLayout>
              <div>Bem-vindo! Escolha uma opção no menu.</div>
            </AppLayout>
          }
        />

        {/* Fluxo de novo paciente */}
        <Route
          path="/pacientes/novo"
          element={
            <AppLayout>
              <FormWizard />
            </AppLayout>
          }
        >
          <Route index element={<ContactForm />} />
          <Route path="endereco" element={<AddressForm />} />
          <Route path="gestacao" element={<PregnancyForm />} />
          <Route path="nutricao" element={<NutritionForm />} />
          <Route path="sono" element={<SleepForm />} />
          <Route path="desenvolvimento-psicomotor" element={<PsychomotorDevelopment />} />
          <Route path="desenvolvimento-linguagem" element={<LanguageDevelopment />} />
          <Route path="historico-patologico" element={<PhatologicalHistory />} />
          <Route path="independencia" element={<IndependenceComprehension />} />
          <Route path="historico-escolar" element={<SchoolHistory />} />
          <Route path="recreacao" element={<RecreationForm />} />
          <Route path="habitos-e-tiques" element={<HabitsAndTicks />} />
          <Route path="relacao-familiar" element={<FamilyInterrelationForm />} />
        </Route>

        {/* Fluxo de consulta */}
        <Route
          path="/pacientes/buscar"
          element={
            <AppLayout>
              <SearchPatients />
            </AppLayout>
          }
        />
        <Route
          path="/pacientes/:id/avaliacoes"
          element={
            <AppLayout>
              <EvaluationList />
            </AppLayout>
          }
        />
        <Route
          path="/avaliacoes/:id"
          element={
            <AppLayout>
              <DetailEvaluation />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;