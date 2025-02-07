import { LanguageDevelopment } from "view/page/LanguageDevelopment";

export const initialFormData = {
    patientName: "",
    school: "",
    fatherName: "",
    motherName: "",
    birthDate: "",
    age: "",
    phone: "",
    career: "",
    addresses: [{ street: "", number: "", neighborhood: "", city: "", state: "", cep: "" }],
    siblings: [{ name: "", age: "" }],
  };
  
  export const initialPregnancyFormData = {
    gestationDuration: "",
    motherAge: "",
    prenatalTreatment: false,
    accidents: "",
    diseasesDuringPregnancy: "",
    medicationsDuringPregnancy: "",
    hypotension: false,
    hypertension: false,
    anemia: false,
    deliveryDuration: "",
    normalDelivery: false,
    forcepsDelivery: false,
    cesareanDelivery: false,
    anesthesia: false,
    birthWeight: "",
    birthHeight: "",
    cried: false,
    cyanosis: false,
    observations: "",
  };
  
  export const initialNutritionFormData = {
    breastfeeding: false,
    breastfeedingDuration: "",
    artificialFeeding: false,
    artificialFeedingDuration: "",
    goodSuctionSwallowing: false,
    choking: false,
    vomiting: false,
    forcedEat: false,
    currentFeeding: "",
    observations: "",
  };
  
  export const initialSleepFormData = {
    normal: false,
    restless: false,
    talksDuringSleep: false,
    nocturnalEnuresis: false,
    teethGrinding: false,
    sleepwalking: false,
    sleepsWithMouthOpen: false,
    drools: false,
    observations : "",
  };

  export const initialPsychomotorFormData = {
    heldHeadUp: "",
    crawled: false,
    crawledAge: "",
    walkedAge: "",
    floppyOrFirmBaby: "",
    fallingFrequency: "",
    grabbedObjectsAge: "",
    walkingDefects: "",
    goodDirectionSense:"",
    canJump: false,
    sphincterControl : false,
    bumpsIntoThings: false,
    dropsThingsFromHands:false,
    agile: false,
    orthopedicProblems: false,
    usedBoots: false,
    dailyActivities: "",
    observations: "",
  };

 export const initialLanguageFormData = {
      babbled : "",
      syllableRepetition: "",
      wordsWithMeaning: "",
      simpleCompleteSentenes: "",
      understoodByAllWhen: "",
      stutteredAround: "",
      understandCommands: false,
      emitsPrimitiveSounds: false,
      languageUnderstood: false,
      usesGesture: false,
      sings: false,
      knowsSongs: false, 
      observations: "",

  }

  export const initialPhatologicalHistoryFormData = {
    physicalMalformations: false,
    measles: false,
    smallpox: false,
    highFever: false,
    fallsBlows: false,
    psychosomaticDisorders: "",
    tonsilsAdenoids: false,
    operationsDone: "",
    seesWell: false,
    wearsGlasses: false,
    optometristReason: "",
    optometristResult: "",
    hearingProblem: false,
    wichEar: "",
    prefersLoudSpeech: false,
    frequentlyHoarse: false,
    annoyedByNoise: false,
    speaksLoud: false,
    understandsWell: false,
    looksLips: false,
    howUnderstands: "",
    attendTherapy: "",
    observations: "",
  }

  export const initialIndependenceComprehensionFormData = {
    startedEatingAloneAge: "",
    startedDressingAloneAge: "",
    startedWalkingAloneAge: "",
    startedIndetifyingObjectsAge: "",
    observations: "",
  }

  export const initialSchoolHistoryFormData = {
    doesWellInSchool: false,
    likesStudy: false,
    parentsStudyChild: false,
    arithmeticDifficulties: false,
    writingDifficulties: false,
    hasBeenHeldBack: false,
    reasonBeingHeldBack: "",
    attendedKindergarten: false,
    kindergatenAge: "",
    changesSchoolsOften: false,
    currentGrade: "",
    currentSchool: "",
    observations: "",
  }

  export const initialRecreationFormData = {
    favoriteActivitiesAndToys: "",
    adaptsHasFriends: false,
    favoriteBooksAndTvShows:"",
    observations: "",
  }

  export const initialFamilyInterrelationshipFormData = {
    relationshipFather : "",
    relationshipMother: "",
    relationhsipSiblings: "",
    relationshipOthers: "",
    observations: "",
  }
  