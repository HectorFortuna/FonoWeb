import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout e contexto
import { AppLayout } from "view/page/AppLayout";
import { AuthProvider } from "context/AuthContext";
import { ProtectedRoute } from "view/components/auth/ProtectedRoute";

// Formulários
import { ContactForm } from "view/page/ContactForm";
import { AddressForm } from "view/page/AddressForm";
import { PregnancyForm } from "view/page/PregnancyForm";
import { NutritionForm } from "view/page/NutritionForm";
import { SleepForm } from "view/page/SleepForm";
import { PsychomotorDevelopment } from "view/page/PsychomotorDevelopment";
import { LanguageDevelopment } from "view/page/LanguageDevelopment";
import { PhatologicalHistory } from "view/page/PhatologicalHistoryFormData";
import { IndependenceComprehension } from "view/page/IndependenceComprehensionFormData";
import { SchoolHistory } from "view/page/SchoolHistoryFormData";
import { RecreationForm } from "view/page/RecreationFormData";
import { FamilyInterrelationForm } from "view/page/FamilyInterrelationFormData";
import { HabitsAndTicks } from "view/page/HabitsAndTicksForm";
import { FormWizard } from "view/page/FormWizard";

// Busca e Detalhes
import { SearchPatients } from "view/page/Search/SearchPatients";
import { EvaluationList } from "view/page/Search/EvaluationList";
import { DetailEvaluation } from "view/page/Search/DetailEvaluation";

// Autenticação
import { LoginPage } from "view/page/Auth/LoginPage";
import { RegisterPage } from "view/page/Auth/RegisterPage";


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          {/* LOGIN */}
          <Route path="/login" element={<LoginPage />} />

          {/* HOME */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <div>Bem-vindo! Escolha uma opção no menu.</div>
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* NOVO PACIENTE */}
          <Route
            path="/pacientes/novo"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <FormWizard />
                </AppLayout>
              </ProtectedRoute>
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

          {/* BUSCA DE PACIENTES */}
          <Route
            path="/pacientes/buscar"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <SearchPatients />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* LISTA DE AVALIAÇÕES */}
          <Route
            path="/pacientes/:id/avaliacoes"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <EvaluationList />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* DETALHE DA AVALIAÇÃO */}
          <Route
            path="/avaliacoes/:id"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <DetailEvaluation />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* Redirecionamento padrão */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
