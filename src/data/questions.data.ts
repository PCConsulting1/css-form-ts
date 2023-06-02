// !name field must match object field
/**
 * Call question like: questions.taxesFiled.question('Tom', '2021')
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
  state: { name: 'state', question: (_subject: string) => 'state' },
  zip: { name: 'zip', question: (_subject: string) => 'zip code' },
  currentAcademicYear: {
    name: 'current_academic_year',
    question: (subject: string) => `${subject}'s current academic grade level?`,
    options: [
      'High School',
      'First year undergraduate',
      'Second year undergraduate',
      'Third year undergraduate',
      'Fourth year undergraduate',
      'Graduate/Doctoral',
    ],
  },
  taxesFiled: {
    name: 'is_1040_filed',
    question: (subject: string, year: string) =>
      `Did ${subject} file a federal tax return for ${year}?`,
    options: ['Already Completed', 'Planning to File', 'Not Going to File'],
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
    question: (subject: string) => `Does ${subject} have legal dependants`,
  },
  isVeteran: {
    name: 'is_veteran',
    question: (subject: string) =>
      `Has ${subject} ever been in the U.S. Armed Forces`,
  },
  wasEmancipatedMinor: {
    name: 'was_emancipated_minor',
    question: (
      subject: string
    ) => `was ${subject} determined to be an emancipated minor by a court in their state
  of legal residence`,
  },
}
export default questions
