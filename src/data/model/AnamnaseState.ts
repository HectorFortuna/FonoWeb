import { IndependenceComprehension } from "view/page/IndependenceComprehensionFormData";

// adicionar um objeto Ex.: Request, que tenha um objeto Patient, e um objeto anamnese
export interface RequestModel {
  patient: Patient
  anamnese: Anamnese;
}

export interface Patient {
  patientForm: PatientFormData;
}

export interface Anamnese {
  pregnancyForm: PregnancyFormData;
  nutritionForm: NutritionFormData;
  sleepForm: SleepFormData;
  psychmotorDevelopmentForm: PsychomotorDevelopmentFormData;
  languageDevelopment: LanguageDevelopmentFormData;
  phatologicalHistory: PhatologicalHistoryFormData;
  independenceComprehension: IndependenceComprehensionFormData;
  schoolHistory: SchoolHistoryFormData;
  recreation: RecreationFormData;
  familyInterrelation: FamilyInterrelationFormData;

}

export interface PatientFormData {
  patientName?: string;
  school?: string;
  fatherName?: string;
  motherName?: string;
  birthDate?: string;
  age?: string;
  phone?: string;
  career?: string;
  addresses: Address[];
  siblings: Sibling[];
}
export interface Address {
  street?: string;  // adicionar db
  number?: string;  // adicionar db
  neighborhood?: string;  // adicionar db
  city?: string;  // adicionar db
  state?: string; // adicionar db
  cep?: string; // adicionar db
}

export interface Sibling {
  name?: string;
  age?: string;
}
export interface PregnancyFormData {
  gestationDuration?: string;
  motherAge?: string;
  prenatalTreatment?: boolean;
  accidents?: string; // mudar para string no db
  diseasesDuringPregnancy?: string; //mudar para string no db
  medicationsDuringPregnancy?: string; // mudar para string no db
  hypotension?: boolean;
  hypertension?: boolean;
  anemia?: boolean;
  deliveryDuration?: string;
  normalDelivery?: boolean;
  forcepsDelivery?: boolean;
  cesareanDelivery?: boolean;
  anesthesia?: boolean;
  birthWeight?: string;
  birthHeight?: string; // adicionar db
  cried?: boolean;
  cyanosis?: boolean;
  observations?: string;

}

export interface NutritionFormData {
  breastfeeding?: boolean;
  breastfeedingDuration?: string;
  artificialFeeding?: boolean;
  artificialFeedingDuration?: string;
  goodSuctionSwallowing?: boolean;
  choking?: boolean;
  vomiting?: boolean;
  forcedEat?: boolean;
  currentFeeding?: string;
  observations?: string;
}

export interface SleepFormData {
  normal?: boolean;
  restless?: boolean;
  talksDuringSleep?: boolean;
  nocturnalEnuresis?: boolean;
  teethGrinding?: boolean;
  sleepwalking?: boolean;
  sleepsWithMouthOpen?: boolean;
  drools?: boolean;
  observations?: string;
}

export interface PsychomotorDevelopmentFormData {
  heldHeadUp?: string;
  crawled?: boolean;
  crawledAge?: string;
  walkedAge?: string;
  floppyOrFirmBaby?: string;
  fallingFrequency?: string;
  grabbedObjectsAge?: string;
  canJump?: boolean; // adicionar no db
  walkingDefects?: string;
  goodDirectionSense?: string; //mudar no db
  sphincterControl?: boolean;
  bumpsIntoThings?: boolean;
  dropsThingsFromHands?: boolean
  agile?: boolean;
  orthopedicProblems?: boolean;
  usedBoots?: boolean;
  dailyActivities?: string;
  observations?: string;

}

export interface LanguageDevelopmentFormData {
  babbled?: string;
  syllableRepetition?: string; //mudar no db
  wordsWithMeaning?: string; //mudar no db
  simpleCompleteSentences?: string; //mudar no db
  understoodByAllWhen?: string; //mudar no db
  stutteredAround?: string;
  understandsCommands?: boolean;
  emitsPrimitiveSound?: boolean;
  languageUnderstood?: boolean;
  usesGesture?: boolean;
  sings?: boolean;
  knowsSongs?: boolean;
  observations?: string;

}

export interface PhatologicalHistoryFormData {
  physicalMalformations?: boolean;
  measles?: boolean;
  smallpox?: boolean;
  highFever?: boolean;
  fallsBlows?: boolean;
  psychosomaticDisorders?: string; //mudar no db
  tonsilsAdenoids?: boolean;
  operationsDone?: string; //mudar no db
  seesWell?: boolean;
  wearsGlasses?: boolean;
  optometristReason?: string;
  optometristResult?: string;
  hearingProblems?: boolean;
  whichEar?: string;
  hearingProblem?: boolean;
  prefersLoudSpeech?: boolean;
  frequentlyHoarse?: boolean;
  annoyedByNoise?: boolean;
  speaksLoud?: boolean;
  understandsWell?: boolean;
  looksLips?: boolean;
  howUnderstand?: string;
  attendedTherapy?: string; //mudar no db
  observations?: string;
}

export interface IndependenceComprehensionFormData {
  startedEatingAloneAge?: string;
  startedDressingAloneAge?: string;
  startedBathingAloneAge?: string;
  startedIdentifyingObjectsAge?: string;
  observations?: string;
}

export interface SchoolHistoryFormData {
  doesWellSchool?: boolean;
  likesStudy?: boolean;
  parentsStudyChild?: boolean;
  arithmeticDifficulties?: boolean;
  writingDifficulties?: boolean;
  hasBeenHeldBack?: boolean;
  reasoBeingHeldBack?: string;
  attendedKindergarten?: boolean
  kindergartenAge?: string;
  changedSchoolsOften?: boolean;
  currentGrade?: string;
  currentSchool?: string;
  observations?: string;

}

export interface RecreationFormData {
  favoriteActivitiesAndToys?: string;
  adaptsHasFriends?: boolean;
  favoriteBooksAndTvShows?: string;
  observations?: string;
}

export interface FamilyInterrelationFormData {
  relationshipFather?: string;
  relationshipMother?: string;
  relationshipSiblings?: string;
  relationshipOthers?: string;
  observations?: string;
}

export interface StoreState {
  formData: PatientFormData;
  pregnancyFormData: PregnancyFormData;
  nutritionFormData: NutritionFormData;
  sleepFormData: SleepFormData;
  psychomotorDevelopmentFormData: PsychomotorDevelopmentFormData;
  languageDevelopmentFormData: LanguageDevelopmentFormData;
  phatologicalHistoryFormData: PhatologicalHistoryFormData;
  independenceComprehensionFormData: IndependenceComprehensionFormData;
  schoolHistoryFormData: SchoolHistoryFormData;
  recreationFormData: RecreationFormData;
  familyInterrelationFormData: FamilyInterrelationFormData;



  setField: (field: keyof PatientFormData, value: string) => void;
  setPregnancyField: (field: keyof PregnancyFormData, value: string | boolean) => void;
  setNutritionField: (field: keyof NutritionFormData, value: string | boolean) => void;
  setSleepField: (field: keyof SleepFormData, value: string | boolean) => void;
  setPsychomotorDevelopmentField: (field: keyof PsychomotorDevelopmentFormData, value: string | boolean) => void;
  setLanguageDevelopmentField: (field: keyof LanguageDevelopmentFormData, value: string | boolean) => void;
  setPhatologicalHistoryField: (field: keyof PhatologicalHistoryFormData, value: string | boolean) => void;
  setIndependenceComprehensionField: (field: keyof IndependenceComprehensionFormData, value: string | boolean) => void;
  setSchoolHistoryField: (field: keyof SchoolHistoryFormData, value: string | boolean) => void;
  setRecreationField: (field: keyof RecreationFormData, value: string | boolean) => void;
  setFamilyInterrelationField: (field: keyof FamilyInterrelationFormData, value: string | boolean) => void;


  setAddress: (index: number, field: keyof PatientFormData["addresses"][number], value: string) => void;
  addAddress: () => void;
  removeAddress: (index: number) => void;

  setSibling: (index: number, field: keyof PatientFormData["siblings"][number], value: string) => void;
  addSibling: () => void;
  removeSiblings: (index: number) => void;

  clearAllForm: () => void;
}