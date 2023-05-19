export interface FormModel {
  student: {
    firstName: string
    middleName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate: string
    citizenShip: string
    socialSecurity: string
    cbFinAidID: string
    streetAddress: string
    streetAddress2: string
    city: string
    state: string
    zip: string
    currentAcademicYear: string
    maritalStatus: string
    legalDependants: string
    emancipatedMinor: string
    homeless: string
    wardOfTheCourt: string
    fosterCare: string
    applying: [
      {
        collegeName: string
        incomingGrade: string
        housingStatus: string
        appliedBefore: boolean
        transfer: boolean
      }
    ]
    taxesFiled: string
    taxReturnType: string
    taxFilingStatus: string
    adjustedGrossIncome: string
    federalTaxesPaid: string
    taxableInterest: string
    ordinaryDividends: string
    deductions: string
    schedule3Filed: boolean
    educationCredits?: string
    incomeFromWork: string
    taxableEarnings: string
    untaxedSocialSecurity: string
    otherUntaxedIncome: string
    parentHelp: string
    scholarshipHelp: string
    employerHelp: string
    relativesHelp: string
    investments: string
    trust: string
    cash: string
    retirement: string
    expectedEarningsSummer: string
    expectedOtherTaxedSummer: string
    expectedOtherUntaxedSummer: string
    expectedEarningsAcademicYear: string
    expectedOtherTaxedAcademicYear: string
    expectedOtherUntaxedAcademicYear: string
  }
}

export type FormContextType = {
  form: FormModel
  saveForm: (form: FormModel) => void
  updateForm: (form: FormModel) => void
}
