//!name field must match object field
/**
 * Call question like: questions.taxesFiled.question('Tom', '2021')
 */
export const questions = {
  firstName: { name: 'first_name', question: 'first name' },
  middleName: { name: 'middle_name', question: 'middle name' },
  lastName: { name: 'last_name', question: 'last name' },
  phoneNumber: { name: 'phone_number', question: 'phone number', variant: 'phone' },
  email: { name: 'email', question: 'email', variant: 'email' },
  birthDate: { name: 'birth_date', question: 'date of birth (MM/DD/YYYY)', variant: 'date' }, 
  citizenship: { name: 'citizenship', question: 'citizenship status', options: '' },
  socialSecurity: { name: 'social_security', question: 'social security' },
  cbFinAidId: { name: 'cb_fin_aid_id', question: 'College Board Id. You will have this if you have completed the CSS Profile before' },
  streetAddress: { name: 'street_address', question: 'street address' },
  streetAddress2: { name: 'street_address_2', question: 'street address line 2' },
  city: { name: 'city', question: 'city' },
  state: { name: 'state', question: 'state' },
  zip: { name: 'zip', question: 'zip code' },
  taxesFiled: { name: 'is_1040_filed', question: (subject:string, year:string) =>`Did ${subject} file a federal tax return for ${year}?` },
  : { name: '', question: '' },
  : { name: '', question: '' },
  : { name: '', question: '' },
  : { name: '', question: '' },
}
export default questions
