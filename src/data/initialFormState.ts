export const student = {
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  birth_date: '',
  citizenship: '',
  social_security: '',
  cb_fin_aid_id: '',
  street_address: '',
  street_address_2: '',
  city: '',
  state: '',
  zip: '',
  current_academic_year: '',
  marital_status: '',
  has_legal_dependants: false,
  is_veteran: false,
  was_emancipated_minor: false,
  was_homeless: false,
  was_ward_of_the_court: false,
  was_foster_care: false,
  // student will need to add all stepparents
  /* based on answer to this question, generate
    either household and parent object or guardian object */
  guardians: [
    {
      first_name: '',
      last_name: '',
      relationship: '',
      is_deceased: false,
      info_provided: false,
    },
  ],
  //! Only show if 3 or 4 guardians are entered
  /* if providing parents are not married,
   then they will need to submit separate forms */
  guardian_marital_status: '',
  //! ********************

  //! Only show if 1 parent is entered
  single_parent_reason: '',
  //! **********************
  applying: [
    {
      college_name: '',
      incoming_grade: '',
      housing_status: '',
      has_applied_before: false,
      is_transfer: false,
    },
  ],
  tax_return: {
    is_1040_filed: false,
    //! Do not show if no taxes filed
    return_type: '',
    filing_status: '',
    //! *********************
    //! Do not show if tax form submitted
    adjusted_gross_income: 0,
    federal_taxes_paid: 0,
    taxable_interest: 0,
    ordinary_dividends: 0,
    deductions: 0,
    //! ****************
    is_schedule_3_filed: false,
    //! Do not show if no schedule 3 filed
    education_credits: 0,
    //! **********************
  },
  income: {
    from_work: 0,
    taxable_earnings: 0,
    untaxed_social_security: 0,
    other_untaxed_income: 0,
    parent_help: 0,
    scholarship_help: 0,
    employer_help: 0,
    relatives_help: 0,
  },
  assets: {
    investments: 0,
    trust: 0,
    cash: 0,
    retirement: 0,
  },
  expected_earnings: {
    summer: 0,
    other_taxed_summer: 0,
    other_untaxed_summer: 0,
    academic_year: 0,
    other_taxed_academic_year: 0,
    other_untaxed_academic_year: 0,
  },
}

export const parent = {
  first_name: '',
  last_name: '',
  social_security: '',
  email: '',
  birth_date: '',
  highest_education: '',
  income_from_work: '',
  expected_income_from_work: '',
  employment_status: '',
  is_veteran: false,
  is_dislocated_worker: false,
  occupation: '',
  company_name: '',
  company_location: '',
  years_at_company: 0,
  has_tax_deferred_retirement: false,
  has_social_security_retirement: false,
  has_employer_sponsored_retirement: false,
  has_civil_service_retirement: false,
  has_union_sponsored_retirement: false,
  has_military_sponsored_retirement: false,
  has_other_retirement: false,
  retirement_value: 0,
}

// This will hold questions not specific to either parent
export const household = {
  tax_return: {
    is_1040_filed: false,
    //! Do not show if no taxes filed
    tax_return_type: '',
    tax_filing_status: '',
    //! *********************
    //! Do not show if tax form submitted
    adjusted_gross_income: 0,
    wages_salary_tips: 0,
    tax_exempt_interest: 0,
    taxable_interest: 0,
    ordinary_dividends: 0,
    ira: {
      distributions: 0,
      rollover: 0,
      taxable_amount: 0,
    },
    pensions_and_annuities: {
      received: 0,
      rollover: 0,
      taxable_amount: 0,
    },
    social_security: {
      benefits: 0,
      taxable_amount: 0,
      capital_gain: 0,
    },
    adjustments_to_income: 0,
    standard_deductions: 0,
    business_income_deductions: 0,
    federal_taxes_paid: 0,
    //! ********************
  },
  schedule1: {
    is_schedule_1_filed: false,
    //! Do not show if schedule 1 not filed
    taxable_refunds_credits: 0,
    alimony_received: 0,
    business_income: 0,
    other_gains: 0,
    real_estate_royalties: 0,
    farm: 0,
    unemployment: 0,
    foreign_income: 0,
    total_other_income: 0,
    other_income_source: '',
    health_savings_account: 0,
    self_employed_spe: 0,
    alimony_paid: 0,
    ira_deduction: 0,
    //! ********************
  },
  schedule_2: {
    is_schedule_2_filed: false,
  },
  schedule_3: {
    is_schedule_3_filed: false,
    //! Do not show if schedule 3 not filed
    education_credits: 0,
    //! ********************
  },
  contributions: {
    retirement_savings: 0,
    health_savings_account: 0,
    medical_fsa: 0,
    dependant_fsa: 0,
  },
  income: {
    social_security: 0,
    alimony: 0,
    from_others_in_house: 0,
    allowance: 0,
    gifts: 0,
    other_untaxed: 0,
    current_year_taxed: 0,
    current_year_untaxed: 0,
    expects_future_change: false,
    child_support: 0,
  },
  assets: {
    liquid_cash: 0,
    held_for_children: 0,
    investment_value: 0,
  },
  expenses: {
    child_support: 0,
    medical: 0,
    prior_college: 0,
    current_college: 0,
  },
  benefits: {
    snap: 0,
    free_lunch: 0,
    wic: 0,
    ssi: 0,
    tanf: 0,
    medicaid: 0,
  },
  housing: {
    is_same_address: false,
    //! Do not show if same address
    street_address: '',
    street_address_2: '',
    city: '',
    state: '',
    zip: '',
    //! ********************
    home_ownership: '',
    year_purchased: '',
    purchase_price: '',
    current_market_value: '',
    amount_owed: '',
    primary_mortgage: '',
    monthly_payment: '',
  },
  dependants: [
    {
      first_name: '',
      last_name: '',
      birth_date: '',
      relationship: '',
      next_school_level: '',
      prior_education: {
        school_level: '',
        school_name: '',
        total_cost: '',
        scholarships: '',
        paid_by_parents: '',
      },
      current_education: {
        school_name: '',
        total_cost: '',
        paid_by_parents: '',
        is_full_time: false,
        type_of_college: '',
      },
    },
  ],
  special_cicrumstances: {
    has_change_in_employment: false,
    has_covid: false,
    has_exceptional_medical: false,
    has_eldercare: false,
    has_nonrecurring_income: false,
    has_other: false,
  },
}
