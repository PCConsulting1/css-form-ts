export const student = {
  firstName: '',
  middleName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  birthDate: '',
  citizenShip: '',
  socialSecurity: '',
  cbFinAidID: '',
  streetAddress: '',
  streetAddress2: '',
  city: '',
  state: '',
  zip: '',
  currentAcademicYear: '',
  maritalStatus: '',
  hasLegalDependants: false,
  isVeteran: false,
  wasEmancipatedMinor: false,
  wasHomeless: false,
  wasWardOfTheCourt: false,
  wasFosterCare: false,
  // student will need to add all stepparents
  /* based on answer to this question, generate
    either household and parent object or guardian object */
  guardians: [
    {
      firstName: '',
      lastName: '',
      relationship: '',
      isDeceased: false,
      infoProvided: false,
    },
  ],
  //! Only show if 3 or 4 guardians are entered
  /* if providing parents are not married,
   then they will need to submit separate forms */
  guardianMaritalStatus: '',
  //! ********************

  //! Only show if 1 parent is entered
  singleParentReason: '',
  //! **********************
  applying: [
    {
      collegeName: '',
      incomingGrade: '',
      housingStatus: '',
      hasAppliedBefore: false,
      isTransfer: false,
    },
  ],
  taxReturn: {
    isFiled: false,
    //! Do not show if no taxes filed
    returnType: '',
    filingStatus: '',
    //! *********************
    //! Do not show if tax form submitted
    adjustedGrossIncome: 0,
    federalTaxesPaid: 0,
    taxableInterest: 0,
    ordinaryDividends: 0,
    deductions: 0,
    //! ****************
    isSchedule3Filed: false,
    //! Do not show if no schedule 3 filed
    educationCredits: 0,
    //! **********************
  },
  income: {
    fromWork: 0,
    taxableEarnings: 0,
    untaxedSocialSecurity: 0,
    otherUntaxedIncome: 0,
    parentHelp: 0,
    scholarshipHelp: 0,
    employerHelp: 0,
    relativesHelp: 0,
  },
  assets: {
    investments: 0,
    trust: 0,
    cash: 0,
    retirement: 0,
  },
  expectedEarnings: {
    summer: 0,
    otherTaxedSummer: 0,
    otherUntaxedSummer: 0,
    academicYear: 0,
    otherTaxedAcademicYear: 0,
    otherUntaxedAcademicYear: 0,
  },
}

export const parent = {
  firstName: '',
  lastName: '',
  socialSecurity: '',
  email: '',
  birthDate: '',
  highestEducation: '',
  incomeFromWork: '',
  expectedIncomeFromWork: '',
  employmentStatus: '',
  isVeteran: false,
  isDislocatedWorker: false,
  occupation: '',
  companyName: '',
  companyLocation: '',
  yearsAtCompany: 0,
  hasTaxDeferredRetirement: false,
  hasSocialSecurityRetirement: false,
  hasEmployerSponsoredRetirement: false,
  hasCivilServiceRetirement: false,
  hasUnionSponsoredRetirement: false,
  hasMilitarySponsoredRetirement: false,
  hasOtherRetirement: false,
  retirementValue: 0,
}

// This will hold questions not specific to either parent
export const household = {
  taxReturn: {
    isFiled: false,
    //! Do not show if no taxes filed
    taxReturnType: '',
    taxFilingStatus: '',
    //! *********************
    //! Do not show if tax form submitted
    adjustedGrossIncome: 0,
    wagesSalaryTips: 0,
    taxExemptInterest: 0,
    taxableInterest: 0,
    ordinaryDividends: 0,
    IRA: {
      distributions: 0,
      rollover: 0,
      taxableAmount: 0,
    },
    pensionsAndAnnuities: {
      received: 0,
      rollover: 0,
      taxableAmount: 0,
    },
    socialSecurity: {
      benefits: 0,
      taxableAmount: 0,
      capitalGain: 0,
    },
    adjustmentsToIncome: 0,
    standardDeductions: 0,
    businessIncomeDeductions: 0,
    federalTaxesPaid: 0,
    //! ********************
  },
  schedule1: {
    isFiled: false,
    //! Do not show if schedule 1 not filed
    taxableRefundsCredits: 0,
    alimonyReceived: 0,
    businessIncome: 0,
    otherGains: 0,
    RealEstateRoyalties: 0,
    farm: 0,
    unemployment: 0,
    foreignIncome: 0,
    totalOtherIncome: 0,
    otherIncomeSource: '',
    healthSavingsAccount: 0,
    selfEmployedSEP: 0,
    alimonyPaid: 0,
    IRADeduction: 0,
    //! ********************
  },
  schedule2: {
    isFiled: false,
  },
  schedule3: {
    isFiled: false,
    //! Do not show if schedule 3 not filed
    educationCredits: 0,
    //! ********************
  },
  contributions: {
    retirementSavings: 0,
    healthSavingsAccount: 0,
    medicalFSA: 0,
    dependantFSA: 0,
  },
  income: {
    socialSecurity: 0,
    alimony: 0,
    fromOthersInHouse: 0,
    allowance: 0,
    gifts: 0,
    otherUntaxed: 0,
    currentYearTaxed: 0,
    currentYearUntaxed: 0,
    expectsFutureChange: false,
    childSupport: 0,
  },
  assets: {
    liquidCash: 0,
    heldForChildren: 0,
    investmentValue: 0,
  },
  expenses: {
    childSupport: 0,
    medical: 0,
    priorCollege: 0,
    currentCollege: 0,
  },
  benefits: {
    snap: 0,
    freeLunch: 0,
    wic: 0,
    ssi: 0,
    tanf: 0,
    medicaid: 0,
  },
  housing: {
    isSameAddress: false,
    //! Do not show if same address
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    zip: '',
    //! ********************
    homeOwnership: '',
    yearPurchased: '',
    purchasePrice: '',
    currentMarketValue: '',
    amountOwed: '',
    primaryMortgage: '',
    monthlyPayment: '',
  },
  dependants: [
    {
      firstName: '',
      lastName: '',
      birthDate: '',
      relationship: '',
      nextSchoolLevel: '',
      priorEducation: {
        schoolLevel: '',
        schoolName: '',
        totalCost: '',
        scholarships: '',
        paidByParents: '',
      },
      currentEducation: {
        schoolName: '',
        totalCost: '',
        paidByParents: '',
        isFullTime: false,
        typeOfCollege: '',
      },
    },
  ],
  specialCicrumstances: {
    hasChangeInEmployment: false,
    hasCovid: false,
    hasExceptionalMedical: false,
    hasEldercare: false,
    hasNonrecurringIncome: false,
    hasOther: false,
  },
}
