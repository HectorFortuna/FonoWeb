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
  patientAge?: string;
  phoneNumber?: string;
  motherCareer?: string;
  fatherCareer?: string;
  medications?: string;
  livesWith?: string;
  caregiver?: string;
  address: Address[];
  siblings: Sibling[];
}
export interface Address {
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  cep?: string;
}

export interface Sibling {
  siblingsName?: string;
  siblingsAge?: string;
}
export interface PregnancyFormData {
  gestationDuration?: string;
  motherAge?: string;
  prenatalTreatment?: boolean;
  accidents?: string;
  diseasesDuringPregnancy?: string;
  medicationsDuringPregnancy?: string;
  hypotension?: boolean;
  hypertension?: boolean;
  anemia?: boolean;
  deliveryDuration?: string;
  normalDelivery?: boolean;
  forcepsDelivery?: boolean;
  cesareanDelivery?: boolean;
  anesthesia?: boolean;
  birthWeight?: string;
  birthHeight?: string;
  cried?: boolean;
  cyanosis?: boolean;
  pregnancyExperience?: string;
  coupleRelationship?: string;
  maternalHealthConditions?: string;
  motherBabyHealthPostpartum?: string;
  postpartumExperience?: string;
  postpartumDepression?: string;
  firstDaysAtHome?: string;
  observations?: string;

}

export interface NutritionFormData {
  breastfeeding?: boolean;
  breastfeedingDuration?: string;
  goodSuctionSwallowing?: boolean;
  choking?: boolean;
  vomiting?: boolean;
  forcedEat?: boolean;
  currentFeeding?: string;
  weaning?: string;
  bottleFeedingAge?: string;
  solidFoodIntroductionAge?: string;
  acceptsDifferentTextures?: boolean;
  feedingIssuesDescription?: string;
  foodSelectivity?: boolean;
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
  asBabyNoProblems?: boolean;
  asBabySleptAlone?: boolean;
  asBabySharedWith?: string;
  asBabySleepDifficulties?: string;
  currentNoProblems?: boolean;
  currentSleptAlone?: boolean;
  currentSharedWith?: string;
  currentSleepDifficulties?: string;
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
  canJump?: boolean;
  walkingDefects?: string;
  goodDirectionSense?: string;
  sphincterControl?: boolean;
  bumpsIntoThings?: boolean;
  dropsThingsFromHands?: boolean
  agile?: boolean;
  orthopedicProblems?: boolean;
  usedBoots?: boolean;
  dailyActivities?: string;
  walksOnTiptoes?: boolean;
  swingsWhenWalking?: boolean;
  hasBalanceIssues?: boolean;
  difficultyRunningClimbing?: boolean;
  postureProblems?: boolean;
  difficultyWithObjects?: boolean;
  difficultyPlaying?: boolean;
  motorExamples?: string;
  bathAlone?: boolean;
  brushesTeethAlone?: boolean;
  cleansSelf?: boolean;
  difficultyWithHygieneSequence?: boolean;
  dressesSelf?: boolean;
  buttonsClothes?: boolean;
  tiesShoes?: boolean;
  observations?: string;
}

export interface LanguageDevelopmentFormData {
  babbled?: string;
  syllableRepetition?: string;
  wordsWithMeaning?: string;
  simpleCompleteSentences?: string;
  understoodByAllWhen?: string;
  stutteredAround?: string;
  understandsCommands?: boolean;
  emitsPrimitiveSound?: boolean;
  languageUnderstood?: boolean;
  usesGesture?: boolean;
  sings?: boolean;
  knowsSongs?: boolean;
  observations?: string;
  firstVocalizationsAge?: string;
  firstWords?: string;
  firstSentences?: string;
  speechDelay?: string;
  gestureHelp?: boolean;
  gestureShare?: boolean;
  gestureNodYes?: boolean;
  gestureNodNo?: boolean;
  gestureWave?: boolean;
  gestureBlowKiss?: boolean;
  gestureImitate?: boolean;
  gestureClap?: boolean;
  gestureLiftArms?: boolean;
  gestureShakeFingerNo?: boolean;
  looksWhenPointed?: boolean;
  usesAdultHand?: boolean;
  answersToName?: boolean;
  speechArticulation?: string;
  speechRhythm?: string;
  echolalia?: boolean;
  repeatsPhrases?: boolean;
  pronounConfusion?: boolean;
  inventsWords?: boolean;
  strangeWordCombinations?: boolean;
  insistsOnRepetition?: boolean;
  reactionWhenContradicted?: string;

}


export interface PhatologicalHistoryFormData {
  physicalMalformations?: boolean;
  measles?: boolean;
  smallpox?: boolean;
  highFever?: boolean;
  fallsBlows?: boolean;
  psychosomaticDisorders?: string;
  tonsilsAdenoids?: boolean;
  operationsDone?: string;
  seesWell?: boolean;
  wearsGlasses?: boolean;
  optometristReason?: string;
  optometristResult?: string;
  hearingProblems?: boolean;
  whichEar?: string;
  howUnderstand?: string;
  attendedTherapy?: string;
  observations?: string;
  familyDevelopmentHistory?: string;
  familySurgeriesHospitalizations?: string;

}

export interface HabitsAndTicksFormData {
  usedPacifier?: string;
  pacifierRemovalMethod?: string;
  suckedThumb?: boolean;
  thumbHand?: string;
  thumbSuckingDuration?: string;
  thumbSuckingRemovalMethod?: string;
  bitesNails?: boolean;
  nailBitingHand?: string;
  observations?: string;

  alignsObjects?: boolean;
  playsWithPartsOnly?: boolean;
  opensAndClosesObjects?: boolean;
  reactionWhenPlayInterrupted?: string;
  rigidPretendPlay?: boolean;
  resistsRoutineChange?: boolean;
  fixedActivitySequence?: boolean;
  reactionToInterruption?: string;
  attachedToUnusualObjects?: boolean;
  handNearFace?: boolean;
  handsNearBody?: boolean;
  bodySwing?: boolean;
  armFlapping?: boolean;
  fears?: string;
  sensoryInterest?: boolean;
  soundSensitivity?: boolean;
  inappropriateTouch?: boolean;
  hyperactivity?: boolean;
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
  playsWithObjects?: boolean;
  typicalExploration?: string;
  atypicalExploration?: string;
  functionalPlay?: boolean;
  symbolicPlayWithMiniatures?: boolean;
  symbolicPlayWithObjects?: boolean;
  symbolicPlayWithRoles?: boolean;
  operateConsistently?: string;
  pretendPlayMiniatures?: string;
  pretendPlayObjects?: string;
  pretendPlayRoles?: string;


}

export interface FamilyInterrelationFormData {
  relationshipFather?: string;
  relationshipMother?: string;
  relationshipSiblings?: string;
  relationshipOthers?: string;
  observations?: string;

  headOrientationToAdult?: string;
  smilesAtFamiliarPeople?: string;
  smilesAtUnfamiliarPeople?: string;
  smilesInResponse?: string;
  facialExpressionVariation?: string;
  emotionalExpressionContext?: string;
  isAffectionate?: string;
  sharesPleasure?: string;
  caresAboutParents?: string;
  jointAttentionPointing?: string;
  commentsGesturesOrSpeech?: string;
  followsPointing?: string;
  respondsToPlayInvitation?: string;
  initiatesWithChildren?: string;
  respondsButNoInitiative?: string;
  anxiousWithChildren?: string;
  stereotypedPlayOnly?: string;
  prefersPairPlay?: string;
  anxiousWithStrangers?: string;
  avoidsStrangerContact?: string;
  persistentAggression?: string;
  excessiveDisinhibition?: string;
  contextualBehaviorVariation?: string;
  worriesWhenApart?: string;
  smilesAtParentsReturn?: string;
  asksParentsForHelp?: string;
  checksParentsInNewPlaces?: string;
  schoolAdaptation?: string;
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
  habitsAndTicksFormData: HabitsAndTicksFormData;
  mainComplaint: string;
  evaluationData: string;



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
  setHabitsAndTicksField: (field: keyof HabitsAndTicksFormData, value: string | boolean) => void;
  setMainComplaint: (value: string) => void;
  setEvaluationData: (value: string) => void;

  setAddress: (index: number, field: keyof PatientFormData["address"][number], value: string) => void;
  addAddress: () => void;
  removeAddress: (index: number) => void;

  setSibling: (index: number, field: keyof PatientFormData["siblings"][number], value: string) => void;
  addSibling: () => void;
  removeSiblings: (index: number) => void;

  clearAllForm: () => void;
}