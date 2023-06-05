// !name field must match object field
/**
 * Call question like: questions.taxesFiled.question('Tom', '2021')
 * year will always be the start of the current academic year ex: 2023-2024 school year = 2023
 */
export const questions = {
  firstName: {
    name: 'first_name',
    question: (subject: string) => `${subject}'s first name`,
  },
  middleName: {
    name: 'middle_name',
    question: (subject: string) => `${subject}'s middle name`,
  },
  lastName: {
    name: 'last_name',
    question: (subject: string) => `${subject}'s last name`,
  },
  phoneNumber: {
    name: 'phone_number',
    question: (subject: string) => `${subject}'s phone number`,
    variant: 'phone',
  },
  email: {
    name: 'email',
    question: (subject: string) => `${subject}'s email address`,
    variant: 'email',
  },
  birthDate: {
    name: 'birth_date',
    question: (subject: string) => `${subject}'s date of birth (MM/DD/YYYY)`,
    variant: 'date',
  },
  citizenship: {
    name: 'citizenship',
    question: (subject: string) => `${subject}'s citizenship status`,
    options: '',
  },
  socialSecurity: {
    name: 'social_security',
    question: (subject: string) => `${subject}'s social security number`,
  },
  cbFinAidId: {
    name: 'cb_fin_aid_id',
    question: (subject: string) =>
      `${subject}'s College Board Id? Leave blank if you have not completed the CSS Profile before`,
  },
  streetAddress: {
    name: 'street_address',
    question: (subject: string) => `${subject}'s permanent street address`,
  },
  streetAddress2: {
    name: 'street_address_2',
    question: (_subject: string) => `permanent street address line 2`,
  },
  city: { name: 'city', question: (_subject: string) => 'city' },
  state: { name: 'state', question: (_subject: string) => 'state/province' },
  zip: { name: 'zip', question: (_subject: string) => 'zip/postal code' },
  currentAcademicYear: {
    name: 'current_academic_year',
    question: (subject: string, year: number) =>
      `${subject}'s current academic grade level for the ${year}-${
        year + 1
      } academic year?`,
    options: [
      'High School',
      'First year undergraduate',
      'Second year undergraduate',
      'Third year undergraduate',
      'Fourth year undergraduate',
      'Graduate/Doctoral',
    ],
  },
  maritalStatus: {
    name: 'marital_status',
    question: (subject: string) => `${subject}'s marital status?`,
    options: [
      'Married or in domestic partnership',
      'Single',
      'Seperated',
      'Divorced',
    ],
  },
  hasLegalDependants: {
    name: 'has_legal_dependants',
    question: (subject: string) => `Does ${subject} have legal dependants?`,
  },
  isVeteran: {
    name: 'is_veteran',
    question: (subject: string) =>
      `Is ${subject} a veteran of the U.S. Armed Forces or currently serving on active
      duty?`,
  },
  wasEmancipatedMinor: {
    name: 'was_emancipated_minor',
    question: (
      subject: string
    ) => `Was ${subject} determined to be an emancipated minor by a court in their state
  of legal residence?`,
  },
  isHomeless: {
    name: 'is_homeless',
    question: (subject: string) =>
      `Is ${subject} homeless, or at risk of becoming homeless?`,
  },
  wasWardOfTheCourt: {
    name: 'was_ward_of_the_court',
    question: (subject: string) =>
      `Was ${subject} (until the age of 18) a ward of the court?`,
  },
  wasFosterCare: {
    name: 'was_foster_care',
    question: (subject: string) =>
      `Was ${subject} (until the age of 18) in foster care?`,
  },
  guardianRelationship: {
    name: 'guardian_relationship',
    question: (subject: string) => `Relationship to ${subject}`,
    options: [
      'Mother',
      'Father',
      'Stepmother',
      'Stepfather',
      'Legal guardian',
      'Other',
    ],
  },
  isDeceased: {
    name: 'is_deceased',
    question: (_subject: string) => `Deceased`,
  },
  infoProvided: {
    name: 'info_provided',
    question: (_subject: string) =>
      `Are you providing information about this person?`,
  },
  guardianMaritalStatus: {
    name: 'guardian_marital_status',
    question: (subject1: string, subject2: string) =>
      `Marital status of ${subject1} and ${subject2}?`,
  },
  singleParentReason: {
    name: 'single_parent_reason',
    question: (_subject: string) =>
      `Please select the option that best describes why only one parent is included`,
    options: [
      'Parent is deceased',
      'Single adoptive parent at time of adoption',
      'Single parent of donor conceived child(at time of conception)',
      'Parent is unknown',
      'Have no contact with parent',
    ],
  },
  collegeName: {
    name: 'college_name',
    question: (_subject: string) =>
      `Enter the name of the college you would like to send the CSS Profile to`,
  },
  incomingGrade: {
    name: 'incoming_grade',
    question: (year: number) =>
      `What will be your grade level for the 
      ${year + 1} - ${year + 2} academic year?`,
    options: [
      'First year undergraduate',
      'Second year undergraduate',
      'Third year undergraduate',
      'Fourth year undergraduate',
      'Graduate/Doctoral',
    ],
  },
  housingStatus: {
    name: 'housing_status',
    question: (_subject: string) => `What are your housing plans?`,
    options: ['On campus', 'Off campus', 'With parent'],
  },
  appliedBefore: {
    name: 'has_applied_before',
    question: (_subject: string) =>
      `Have you applied for financial aid at this college/program before?`,
  },
  isTransfer: {
    name: 'is_transfer',
    question: (_subject: string) =>
      `Are you transferring to or considering transferring to this school?`,
  },
  taxesFiled: {
    name: 'is_1040_filed',
    question: (subject: string, year: number) =>
      `Did ${subject} file a federal tax return for ${year - 2}?`,
    options: ['Already Completed', 'Planning to File', 'Not Going to File'],
  },
  taxReturnType: {
    name: 'tax_return_type',
    question: (subject: string, year: number) =>
      `What type of tax return did ${subject} file for ${year - 2}?`,
    options: [
      'Single',
      'Married, Filing Jointly',
      'Married. Filing Separately',
      'Head of Household',
      'Qualifying widow(er) With Dependent Child',
    ],
  },
}
export default questions
