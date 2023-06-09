import schoolsList from './schoolList'
// !name field must match object field
/**
 * subject options:
 * - 'Student',
 * - Student's Name,
 * - Parent1's Name,
 * - Parent2's Name,
 * - Parent1 and Parent2's Name together
 * - Business Name,
 * - year calculated to be the start of the current academic year ex: 2023-2024 school year = 2023
 * - year options:
 * - start of the current academic year
 * - end of the current academic year
 * - prior prior year
 */

interface Iquestion {
  subject: string
  year: number
}
export const questions = {
  // TODO: question for written agreement for education expenses
  firstName: {
    name: 'first_name',
    question: ({ subject }: Iquestion) => `${subject}'s first name`,
  },
  middleName: {
    name: 'middle_name',
    question: ({ subject }: Iquestion) => `${subject}'s middle name`,
  },
  lastName: {
    name: 'last_name',
    question: ({ subject }: Iquestion) => `${subject}'s last name`,
  },
  phoneNumber: {
    name: 'phone_number',
    question: ({ subject }: Iquestion) => `${subject}'s phone number`,
    variant: 'phone',
  },
  email: {
    name: 'email',
    question: ({ subject }: Iquestion) => `${subject}'s email address`,
    variant: 'email',
  },
  birthDate: {
    name: 'birth_date',
    question: ({ subject }: Iquestion) =>
      `${subject}'s date of birth (MM/DD/YYYY)`,
    variant: 'date',
  },
  maritalStatus: {
    name: 'marital_status',
    question: ({ subject }: Iquestion) => `${subject}'s marital status?`,
    options: [
      'Never Married',
      'Married or in domestic partnership',
      'Seperated',
      'Divorced or no longer in a domestic partnership',
      'Widowed',
    ],
  },
  citizenship: {
    name: 'citizenship',
    question: ({ subject }: Iquestion) => `${subject}'s citizenship status`,
    options: [
      'U.S. citizen',
      'U.S. eligible noncitizen',
      'Canadian citizen',
      'other',
    ],
  },
  hasLegalDependants: {
    name: 'has_legal_dependents',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} have legal dependents?`,
  },
  isVeteran: {
    name: 'is_veteran',
    question: ({ subject }: Iquestion) =>
      `Is ${subject} a veteran of the U.S. Armed Forces or currently serving on active
      duty?`,
  },
  wasEmancipatedMinor: {
    name: 'was_emancipated_minor',
    question: ({ subject }: Iquestion) =>
      `Was ${subject} determined to be an emancipated minor by a court in their state
  of legal residence?`,
  },
  isHomeless: {
    name: 'is_homeless',
    question: ({ subject }: Iquestion) =>
      `Is ${subject} homeless, or at risk of becoming homeless?`,
  },
  wasWardOfTheCourt: {
    name: 'was_ward_of_the_court',
    question: ({ subject }: Iquestion) =>
      `Was ${subject} (until the age of 18) a ward of the court?`,
  },
  wasFosterCare: {
    name: 'was_foster_care',
    question: ({ subject }: Iquestion) =>
      `Was ${subject} (until the age of 18) in foster care?`,
  },
  streetAddress: {
    name: 'street_address',
    question: ({ subject }: Iquestion) => `${subject} permanent street address`,
  },
  streetAddress2: {
    name: 'street_address_2',
    question: ({ subject }: Iquestion) =>
      `${subject} permanent street address line 2`,
  },
  city: {
    name: 'city',
    question: ({ subject }: Iquestion) => `${subject} city`,
  },
  state: {
    name: 'state',
    question: ({ subject }: Iquestion) => `${subject} state/province`,
  },
  zip: {
    name: 'zip',
    question: ({ subject }: Iquestion) => `${subject} zip/postal code`,
  },
  socialSecurityId: {
    name: 'social_security_id',
    question: ({ subject }: Iquestion) => `${subject}'s social security number`,
  },
  cbFinAidId: {
    name: 'cb_fin_aid_id',
    question: ({ subject }: Iquestion) =>
      `${subject}'s College Board Id? Leave blank if you have not completed the CSS Profile before`,
  },
  currentAcademicYear: {
    name: 'current_academic_year',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s academic grade level for the ${year}-${
        year + 1
      } academic year?`,
    options: [
      'High School',
      '1st year undergraduate',
      '2nd year undergraduate',
      '3rd year undergraduate',
      '4th year undergraduate',
      'Graduate/Doctoral',
    ],
  },
  schoolLevel: {
    name: 'school_level',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s academic grade level for the ${year}-${
        year + 1
      } academic year?`,
    options: [
      'Kindergarten',
      '1st grade',
      '2nd grade',
      '3rd grade',
      '4th grade',
      '5th grade',
      '6th grade',
      '7th grade',
      '8th grade',
      '9th grade',
      '10th grade',
      '11th grade',
      '12th grade',
      '1st year college',
      '2nd year college',
      '3rd year college',
      '4th year college',
      '5th year college',
      '1st year grad/professional',
      '2nd year grad/professional',
      '3rd year grad/professional',
      '4th year grad/professional',
      'Other',
      'None',
    ],
  },
  isPrivateSchool: {
    name: 'is_private_school',
    question: ({ subject, year }: Iquestion) =>
      `${subject} attends a private school for the ${year}-${
        year + 1
      } academic year`,
  },
  guardianRelationship: {
    name: 'guardian_relationship',
    question: ({ subject }: Iquestion) => `Relationship to ${subject}`,
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
    question: () => `Deceased`,
  },
  infoProvided: {
    name: 'info_provided',
    question: () => `Are you providing information about this person?`,
  },
  guardianMaritalStatus: {
    name: 'guardian_marital_status',
    question: ({ subject }: Iquestion) => `Marital status of ${subject}?`,
    options: [
      'Married or in domestic partnership',
      'Seperated',
      'Divorced',
      'Unmarried, not living together',
      'Unmarried, living together',
    ],
  },
  singleParentReason: {
    name: 'single_parent_reason',
    question: () =>
      `Please select the option that best describes why only one parent is included`,
    options: [
      'Parent is deceased',
      'Single adoptive parent at time of adoption',
      'Single parent of donor conceived child(at time of conception)',
      'Parent is unknown',
      'Parent is incarcerated',
      'Legal orders or documented abuse involving the noncustodial parent',
      'Student has no contact with parent',
    ],
  },
  collegeName: {
    name: 'college_name',
    question: () =>
      `Enter the full name of the school (Ex. University of California - Irvine or Homewood-Flossmoor High School)`,
  },
  // should come from a dropdown menu
  collegeCode: {
    name: 'college_code',
    question: () =>
      `Enter the CSS Profile code of the college you wish to send your CSS Profile to`,
    options: schoolsList,
  },
  incomingGrade: {
    name: 'incoming_grade',
    question: ({ year }: Iquestion) =>
      `What will be your grade level for the 
      ${year} - ${year + 1} academic year?`,
    options: [
      '1st year undergraduate, never previously attended',
      '1st year undergraduate, previously attended',
      '2nd year undergraduate/sophomore',
      '3rd year undergraduate/junior',
      '4th year undergraduate/senior',
      '5th year (or higher) undergraduate',
      '1st year graduate/professional(MBA,MD,PhD,etc)',
      '2nd year graduate/professional(MBA,MD,PhD,etc)',
      '3rd year graduate/professional(MBA,MD,PhD,etc)',
      '4th year (or higher) graduate/professional(MBA,MD,PhD,etc)',
    ],
  },
  housingStatus: {
    name: 'housing_status',
    question: () => `What are your housing plans?`,
    options: ['On campus', 'Off campus', 'With parents', 'with relatives'],
  },
  appliedBefore: {
    name: 'has_applied_before',
    question: () =>
      `Have you applied for financial aid at this college/program before?`,
  },
  isTransfer: {
    name: 'is_transfer',
    question: () =>
      `Are you transferring to or considering transferring to this school?`,
  },
  parentHighestEducation: {
    name: 'highest_education',
    question: ({ subject }: Iquestion) =>
      `${subject} highest level of education completed`,
    options: [
      'Middle school/junior high',
      'High school (9-12)',
      'College/university or beyond',
      'Other/Unknown',
    ],
  },
  taxesFiled: {
    name: 'is_1040_filed',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} file a federal tax return for ${year}?`,
    options: [
      'Completed tax return',
      'Planning to file',
      'Not filed and not required to file',
    ],
  },
  taxReturnType: {
    name: 'tax_return_type',
    question: ({ subject, year }: Iquestion) =>
      `What type of tax return did ${subject} file for ${year}?`,
    options: [
      'U.S. tax return 1040',
      'Canadian tax return',
      'A tax return with Puerto Rico, another U.S. territory, or Freely Associated State',
      'Other non-U.S. tax return',
    ],
  },
  filingStatus: {
    name: 'filing_status',
    question: ({ subject, year }: Iquestion) =>
      `What is ${subject}'s tax filing status for ${year}?`,
    options: [
      'Single',
      'Married - filing jointly',
      'Married - filing separately',
      'Head of household',
      'Qualifying widow(er) with dependent child',
    ],
  },

  taxReturnLine1: {
    name: 'wages_salaries_tips',
    question: ({ subject, year }: Iquestion) =>
      `Line 1: ${subject}'s Wages, salaries, tips, etc for ${year}`,
  },
  taxReturnLine2a: {
    name: 'tax_exempt_interest',
    question: ({ subject, year }: Iquestion) =>
      `Line 2a: ${subject}'s Tax-exempt interest for ${year} `,
  },
  taxReturnLine2b: {
    name: 'taxable_interest',
    question: ({ subject, year }: Iquestion) =>
      `Line 2b: ${subject}'s taxable interest for ${year}`,
  },
  taxReturnLine3b: {
    name: 'ordinary_dividends',
    question: ({ subject, year }: Iquestion) =>
      `Line 3b: ${subject}'s ordinary dividends for ${year}`,
  },
  taxReturnLine4a: {
    name: 'distributions',
    question: ({ subject, year }: Iquestion) =>
      `Line 4a: ${subject}'s IRA distributions for ${year}`,
  },
  rollover: {
    name: 'rollover',
    question: () => `Amount of rollover, if any`,
  },
  taxReturnLine4b: {
    name: 'ira_taxable_amount',
    question: ({ subject, year }: Iquestion) =>
      `Line 4b: ${subject}'s IRA, taxable amount for ${year}`,
  },
  taxReturnLine5a: {
    name: 'pensions_and_annuities',
    question: ({ subject, year }: Iquestion) =>
      `Line 5a: ${subject}'s pensions and annuities for ${year}`,
  },
  taxReturnLine5b: {
    name: 'pensions_and_annuities_taxable_amount',
    question: ({ subject, year }: Iquestion) =>
      `Line 5b: ${subject}'s pensions and annuities, taxable amount for ${year}`,
  },
  taxReturnLine6a: {
    name: 'social_security_benefits',
    question: ({ subject, year }: Iquestion) =>
      `Line 6a: ${subject}'s social security benefits for ${year}`,
  },
  taxReturnLine6b: {
    name: 'social_security_taxable_amount',
    question: ({ subject, year }: Iquestion) =>
      `Line 6b: ${subject}'s social security benefits, taxable amount for ${year}`,
  },
  taxReturnLine7: {
    name: 'capital_gain',
    question: ({ subject, year }: Iquestion) =>
      `Line 7: ${subject}'s capital gain for ${year}`,
  },
  taxReturnLine10: {
    name: 'adjustments_to_income',
    question: ({ subject, year }: Iquestion) =>
      `Line 10: ${subject}'s adjustments to income for ${year}`,
  },
  taxReturnLine11: {
    name: 'adjusted_gross_income',
    question: ({ subject, year }: Iquestion) =>
      `Line 11: ${subject}'s "Adjusted gross income" for ${year}`,
  },
  taxReturnLine12c: {
    name: 'standard_deductions',
    question: ({ subject, year }: Iquestion) =>
      `Line 12c: ${subject}'s "standard deduction or itemized deductions" for ${year}`,
  },
  taxReturnLine13: {
    name: 'business_income_deductions',
    question: ({ subject, year }: Iquestion) =>
      `Line 13: ${subject}'s qualified business income deduction for ${year}`,
  },
  taxReturnLine22: {
    name: 'federal_taxes_paid',
    question: ({ subject, year }: Iquestion) =>
      `Line 22: ${subject}'s federal taxes paid for ${year}`,
  },
  isSchedule1Filed: {
    name: 'is_schedule_1_filed',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} file a 1040 Schedule 1 - Additional Income and
    Adjustments to Income for ${year}?`,
  },
  schedule1Line1: {
    name: 'taxable_refunds_credits',
    question: ({ subject, year }: Iquestion) =>
      `Line 1: ${subject}'s taxable refunds, credits, or offsets of state and local income taxes for ${year}`,
  },
  schedule1Line2a: {
    name: 'alimony_received',
    question: ({ subject, year }: Iquestion) =>
      `Line 2a: ${subject}'s alimony received for ${year}`,
  },
  schedule1Line3: {
    name: 'business_income',
    question: ({ subject, year }: Iquestion) =>
      `Line 3: ${subject}'s business income for ${year}`,
  },
  schedule1Line4: {
    name: 'other_gains',
    question: ({ subject, year }: Iquestion) =>
      `Line 4: ${subject}'s other gains for ${year}`,
  },
  schedule1Line5: {
    name: 'real_estate_royalties',
    question: ({ subject, year }: Iquestion) =>
      `Line 5: ${subject}'s : rental real estate, royalties, partnerships, S corporations, trusts, etc for ${year}`,
  },
  schedule1Line6: {
    name: 'farm',
    question: ({ subject, year }: Iquestion) =>
      `Line 6: ${subject}'s : farm income for ${year}`,
  },
  schedule1Line7: {
    name: 'unemployment',
    question: ({ subject, year }: Iquestion) =>
      `Line 7: ${subject}'s : unemployment compensation for ${year}`,
  },
  schedule1Line8d: {
    name: 'foreign_income',
    question: ({ subject, year }: Iquestion) =>
      `Line 8d: ${subject}'s :  Foreign earned income exclusion for ${year}`,
  },
  schedule1Line9: {
    name: 'total_other_income',
    question: ({ subject, year }: Iquestion) =>
      `Line 9: ${subject}'s : total other income for ${year}`,
  },
  otherIncomeSource: {
    name: 'other_income_source',
    question: () => `What were the sources of this other income?`,
  },
  schedule1Line13: {
    name: 'health_savings_account',
    question: ({ subject, year }: Iquestion) =>
      `Line 13: ${subject}'s health savings account deduction for ${year}`,
  },
  schedule1Line16: {
    name: 'self_employed_sep',
    question: ({ subject, year }: Iquestion) =>
      `Line 16: ${subject}'s self-employed SEP, SIMPLE, and qualified plans for ${year}`,
  },
  schedule1Line19: {
    name: 'alimony_paid',
    question: ({ subject, year }: Iquestion) =>
      `Line 19: ${subject}'s alimony paid for ${year}`,
  },
  schedule1Line20: {
    name: 'ira_deduction',
    question: ({ subject, year }: Iquestion) =>
      `Line 20: ${subject}'s IRA deduction for ${year}`,
  },
  isSchedule2Filed: {
    name: 'is_schedule_2_filed',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} file a 1040 Schedule 2 - Additional Taxes
      for ${year}?`,
  },
  schedule2Line2: {
    name: 'tax_credit_repayment',
    question: ({ subject, year }: Iquestion) =>
      `Schedule 2, Line 2: ${subject}'s excess advance premium tax credit repayment for ${year}`,
  },
  schedule2Line11: {
    name: 'medicare_tax',
    question: ({ subject, year }: Iquestion) =>
      `Schedule 2, Line 11: ${subject}'s additional medicare tax for ${year}`,
  },
  isSchedule3Filed: {
    name: 'is_schedule_3_filed',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} file a 1040 Schedule 3 - Additional Credits and Payments
      for ${year}?`,
  },
  schedule3Line3: {
    name: 'education_credits',
    question: ({ subject, year }: Iquestion) =>
      `Schedule 3, line 3: ${subject}'s Education credits for ${year}`,
  },
  incomeFromWork: {
    name: 'income_from_work',
    question: ({ subject, year }: Iquestion) =>
      `How much did ${subject} earn from work in ${year}`,
  },
  retirementSavings: {
    name: 'retirement_savings',
    question: ({ subject, year }: Iquestion) =>
      `How much did ${subject} contribute to tax deferred pension and retirement savings plans in ${year}`,
  },
  healthSavings: {
    name: 'health_savings_account',
    question: ({ subject, year }: Iquestion) =>
      `How much did ${subject} contribute to a health savings account (HSA) in ${year}`,
  },
  medicalFsa: {
    name: 'medical_fsa',
    question: ({ subject, year }: Iquestion) =>
      `How much did ${subject} contribute to a flexible spending account (FSA) for medical expenses in ${year}`,
  },
  dependentFsa: {
    name: 'dependent_fsa',
    question: ({ subject, year }: Iquestion) =>
      `How much did ${subject} contribute to a flexible spending account (FSA) for dependent care expenses in ${year}`,
  },
  incomeSocialSecurity: {
    name: 'income_social_security',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s Social Security benefits received for all family members, except any who will be
      enrolled in college in ${year}-${
        year + 1
      }, that were not reported on a tax return`,
  },
  incomeAlimonyUntaxed: {
    name: 'income_alimony_untaxed',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s alimony received (not including amounts reported on a tax
        return) in ${year}`,
  },
  incomeFromOthers: {
    name: 'income_from_others_in_house',
    question: ({ subject, year }: Iquestion) =>
      `Income from other members of ${subject}'s household in ${year}`,
  },
  incomeAllowance: {
    name: 'income_allowance',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s housing, food, and other living allowances received as members of the military,
      clergy, or other profession in ${year}`,
  },
  incomeGifts: {
    name: 'income_gifts',
    question: ({ subject, year }: Iquestion) =>
      `Money given to them or paid on ${subject}'s behalf in ${year}`,
  },
  incomeOtherUntaxed: {
    name: 'income_other_untaxed',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s other untaxed income (including, but not limited to Workers' Compensation and
    untaxed disability benefits) in ${year}`,
  },
  incomeOtherTaxed: {
    name: 'income_other_taxed',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s other taxable income in ${year}`,
  },
  incomeExpectsFutureChange: {
    name: 'income_expects_future_change',
    question: ({ subject, year }: Iquestion) =>
      `Does ${subject} expect a significant income change in ${year} due to a
      new job, a job loss, retirement, benefit changes, etc.?`,
  },
  snap: {
    name: 'snap',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive Supplemental Nutrition Assistance Program (SNAP) or Food Stamps in ${year} or ${
        year + 1
      }`,
  },
  freeLunch: {
    name: 'free_lunch',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive free or reduced price lunch in ${year} or ${
        year + 1
      }`,
  },
  wic: {
    name: 'wic',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive Women, Infants, and Children (WIC)
      in ${year} or ${year + 1}`,
  },
  ssi: {
    name: 'ssi',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive Supplemental Security Income (SSI)
      in ${year} or ${year + 1}`,
  },
  tanf: {
    name: 'tanf',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive Temporary Assistance to Needy Families (TANF)
      in ${year} or ${year + 1}`,
  },
  medicaid: {
    name: 'medicaid',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive Medicaid in ${year} or ${year + 1}`,
  },
  employmentStatus: {
    name: 'employment_status',
    question: ({ subject }: Iquestion) =>
      `What is ${subject}'s current employment status?`,
    options: [
      'Employed by others',
      'Self-Employed',
      'Unemployed',
      'Retired or not employed by choice',
    ],
  },
  isDislocatedWorker: {
    name: 'is_dislocated_worker',
    question: ({ subject }: Iquestion) => `Is ${subject} a dislocated worker?`,
  },
  occupation: {
    name: 'occupation',
    question: ({ subject }: Iquestion) => `What is ${subject}'s occupation?`,
  },
  companyName: {
    name: 'company_name',
    question: ({ subject }: Iquestion) =>
      `What is the name of the company where ${subject}'s works?`,
  },
  companyLocation: {
    name: 'company_location',
    question: ({ subject }: Iquestion) =>
      `What is the location of the company where ${subject}'s works? (Enter city and state, or "Remote" if working from home)`,
  },
  yearsAtCompany: {
    name: 'years_at_company',
    question: ({ subject }: Iquestion) =>
      `How many years has ${subject} worked here?`,
  },
  hasTaxDeferredRetirement: {
    name: 'has_tax_deferred_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} participate in IRA, Keogh, 401k, 403b, or other tax-deferred plan?`,
  },
  hasSocialSecurityRetirement: {
    name: 'has_social_security_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} plan to draw social security upon retirement?`,
  },
  employerSponsoredRetirement: {
    name: 'has_employer_sponsored_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} participate in an employer sponsored plan?`,
  },
  civilServiceRetirement: {
    name: 'has_civil_service_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} participate in a civil service or state sponsored plan?`,
  },
  unionSponsoredRetirement: {
    name: 'has_union_sponsored_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} participate in a union sponsored plan?`,
  },
  militarySponsoredRetirement: {
    name: 'has_military_sponsored_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} participate in a military sponsored plan?`,
  },
  otherRetirement: {
    name: 'has_other_retirement',
    question: ({ subject }: Iquestion) =>
      `Does ${subject} participate in other types of plans?`,
  },
  retirementValue: {
    name: 'retirement_value',
    question: ({ subject }: Iquestion) =>
      `Current value of ${subject}'s tax-deferred and after-tax retirement, pension,
      annuity, and savings plans such as an IRA, Roth IRA, Keogh, SEP, 401(a),
      401(k), 403(b), 408, 457, 501(c)?`,
  },
  isSameAddress: {
    name: 'is_same_address',
    question: ({ subject }: Iquestion) =>
      `Is ${subject}'s permanent address the same as student's?`,
  },
  homeOwnership: {
    name: 'home_ownership',
    question: ({ subject }: Iquestion) =>
      `Which best describes ${subject}'s housing situation?`,
    options: [
      'Own home',
      'Rent home',
      'Live with others',
      'Housing provided by employer',
    ],
  },
  homePurchaseYear: {
    name: 'home_purchase_year',
    question: () => `Home purchase year`,
  },
  homePurchasePrice: {
    name: 'home_purchase_price',
    question: () => `Home purchase price`,
  },
  currentMarketValue: {
    name: 'home_current_market_value',
    question: () => `Current market value`,
  },
  homeAmountOwed: {
    name: 'home_amount_owed',
    question: () => `Total amount owed on home`,
  },
  homePrimaryMortgage: {
    name: 'home_primary_mortgage',
    question: () =>
      `What is the amount owed on the primary mortgage for Jacqueline's parents'
    home?`,
  },
  homeMonthlyPayment: {
    name: 'home_monthly_payment',
    question: () => `What is monthly housing payment?`,
  },
  dependentRelationship: {
    name: 'dependent_relationship',
    question: ({ subject }: Iquestion) => `relationship to ${subject}`,
    options: ['sibling', 'grandparent'],
  },
  totalCost: {
    name: 'total_cost',
    question: ({ subject }: Iquestion) =>
      `Total cost for ${subject} to attend this school (include housing, transportation, food, etc)`,
  },
  scholarships: {
    name: 'scholarships',
    question: ({ subject }: Iquestion) =>
      `Amount ${subject} received in scholarships, grants, or gift aid`,
  },
  paidByParents: {
    name: 'paid_by_parents',
    question: ({ subject }: Iquestion) =>
      `Total educational expenses paid by ${subject} parents`,
  },
  isFullTime: {
    name: 'is_full_time',
    question: ({ subject }: Iquestion) => `Did ${subject} attend full time?`,
  },
  typeOfCollege: {
    name: 'type_of_college',
    question: () => `Type of college`,
    options: ['2 year', '4 year', 'Graduate/professional school'],
  },
  incomeChildSupport: {
    name: 'income_child_support',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} receive child support in ${year}?`,
  },
  expenseChildSupport: {
    name: 'expense_child_support',
    question: ({ subject, year }: Iquestion) =>
      `Did ${subject} pay child support in ${year} or ${year + 1}?`,
  },
  expenseMedical: {
    name: 'expense_medical',
    question: ({ subject, year }: Iquestion) =>
      `How much in medical and dental expenses, not covered by insurance, did
      ${subject} pay in ${year}?`,
  },
  expenseCollege: {
    name: 'expense_college',
    question: ({ subject, year }: Iquestion) =>
      `${subject} repayment of any college loan debt in ${year}?`,
  },
  expenseAlimony: {
    name: 'expense_alimony',
    question: ({ subject, year }: Iquestion) =>
      `${subject} alimony in ${year}?`,
  },
  liquidCash: {
    name: 'liquid_cash',
    question: ({ subject }: Iquestion) =>
      `${subject} current amount in cash, savings, checking, and deposit accounts?`,
  },
  heldForChildren: {
    name: 'held_for_children',
    question: ({ subject }: Iquestion) =>
      `Assets ${subject} own but are held in the names of their children?`,
  },
  investmentValue: {
    name: 'investment_value',
    question: ({ subject }: Iquestion) =>
      `Current market value of ${subject}'s investments? (Do not include real-estate,farm,retirement plans)`,
  },
  taxableEarnings: {
    name: 'taxable_earnings',
    question: ({ subject, year }: Iquestion) =>
      `How much did ${subject} receive in taxable earnings from need-based work programs and taxable grant and
      scholarship aid in ${year}?`,
  },
  untaxedSocialSecurity: {
    name: 'untaxed_social_security',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s untaxed portion of any social security benefits in ${year}?`,
  },
  untaxedIncomeOther: {
    name: 'untaxed_income_other',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s other untaxed income in ${year}?`,
  },
  expectedEarningsSummer: {
    name: 'summer',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s expected earnings - summer ${year}`,
  },
  otherTaxedSummer: {
    name: 'other_taxed_summer',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s expected other taxed income - summer ${year}?`,
  },
  otherUntaxedSummer: {
    name: 'other_untaxed_summer',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s expected total untaxed income and benefits - summer ${year}?`,
  },
  expectedEarningsAcademicYear: {
    name: 'academic_year',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s expected earnings - school year ${year}-${year + 1}?`,
  },
  otherTaxedAcademicYear: {
    name: 'other_taxed_academic_year',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s expected other taxed income - school year ${year}-${
        year + 1
      }?`,
  },
  otherUntaxedAcademicYear: {
    name: 'other_untaxed_academic_year',
    question: ({ subject, year }: Iquestion) =>
      `${subject}'s expected total untaxed income and benefits - school year ${year}-${
        year + 1
      }?`,
  },
  parentHelp: {
    name: 'parent_help',
    question: ({ subject, year }: Iquestion) =>
      `How much does ${subject} expect to receive from their parents to pay for educational expenses for the ${year}-
      ${year + 1} academic year?`,
  },
  scholarshipHelp: {
    name: 'scholarship_help',
    question: ({ subject, year }: Iquestion) =>
      `How much does ${subject} expect to receive from scholarships/grants from sources other than the colleges or universities to
      which they are applying to pay for educational expenses for the ${year}-
      ${year + 1} academic year?`,
  },
  employerHelp: {
    name: 'employer_help',
    question: ({ subject, year }: Iquestion) =>
      `How much does ${subject} expect to receive from employers, (i.e. tuition benefits) including their parents' employer(s) and/or
      their employer to pay for educational expenses for the ${year}-
      ${year + 1} academic year?`,
  },
  relativesHelp: {
    name: 'relatives_help',
    question: ({ subject, year }: Iquestion) =>
      `How much does ${subject} expect to receive from relatives other than their parents and any other sources providing funds to
      help pay for college expenses to pay for educational expenses for the ${year}-
      ${year + 1} academic year?`,
  },
  hasChangeInEmployment: {
    name: 'has_change_in_employment',
    question: () =>
      `Has your family experienced ongoing financial impact by change in employment?`,
  },
  hasCovid: {
    name: 'has_covid',
    question: () =>
      `Has your family experienced ongoing financial impact by covid?`,
  },
  hasExceptionalMedical: {
    name: 'has_exceptional_medical',
    question: () =>
      `Has your family experienced ongoing financial impact by exceptional medical or dental expenses?`,
  },
  hasEldercare: {
    name: 'has_eldercare',
    question: () =>
      `Has your family experienced ongoing financial impact by eldercare or financial support of other family members?`,
  },
  hasNonrecurringIncome: {
    name: 'has_nonrecurring_income',
    question: () =>
      `Has your family experienced ongoing financial impact by non-recurring income or expenses?`,
  },
  hasOtherCircumstance: {
    name: 'has_other_circumstance',
    question: () =>
      `Has your family experienced ongoing financial impact by other circumstances?`,
  },
  explanation: {
    name: 'explanation',
    question: () =>
      `Provide a brief explanation of the circumstances you selected, including
      annual amounts paid for or additional costs`,
  },

  // child support recieved for prior year (untaxed income and benefits)
  // retirement contributions for prior year (untaxed income and benefits)
  // untaxed distributions from pensions or retirement accounts (untaxed income and benefits)
  // contributions to fsa and medical savings accounts (untaxed income and benefits)
  // workers comp (untaxed income and benefits)

  // how much child support paid in prior prior
  // amount paid for student in prior prior year
  // amount paid for student in prior year

  // how much alimony was paid overall in prior prior year
  // how much alimony paid to other parent in prior prior year
  // how much alimony was paid in to other parent in prior year

  // business array for each business owned
  /**
   * Name of the business
   * business address (street,city,state)
   * type of business (sole propiertorship, corporation, partnership)
   * Primary product or service this business provides
   * Name of parent owns the business
   * Percent of ownership
   * Date business started
   * Does business employ more than 100 full-time employees
   * current market value of business
   * current amount owed on business (include parents portion of debt - mortgage and related debts for which business was used as collateral)
   * Which tax form ins the income for the business reported (
   * Form 1040 schedule c - profit or loss,
   * Form 1040 schedule c - supplemental income or loss,
   * Form 1065 - U.S. return of partnership,
   * Form 1120 - U.S. corporation income tax return,
   * Form 1120-s - U.S. income tax return for an S-Corporation)
   * Gross revenue business had prior prior year (do not subtract any costs or expenses) - found in irs 1040 schedule c line 1, irs 1040 schedule e line 3 and 4, irs 1065 line 1a, irs 1120 line 1a, irs 1120-s line 1a
   * Total expenses for business in prior prior year - found in Irs 1040 schedule c line 28, irs 1040 schedule e line 20,irs 1065 line 21, irs 1120 line 27, irs 1120-s line 20
   * Do other family members receive a salary or wage from this business? (
   * name,
   * relationship,
   * salary or wage)
   * sources of untaxed income
   *  */
}

export default questions
