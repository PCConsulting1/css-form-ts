//!name field must match object field
export const questions = {
  firstName: { name: 'first_name', question: 'first name' },
  middleName: { name: 'middle_name', question: 'middle name' },
  lastName: { name: 'last_name', question: 'last name' },
  phoneNumber: { name: 'phone_number', question: 'phone number', variant: 'phone' },
  email: { name: 'email', question: 'email', variant: 'email' },
  birthDate: { name: 'birth_date', question: 'date of birth (MM/DD/YYYY)', variant: 'date' }, 
  citizenship: { name: 'citizenship', question: 'citizenship status' },
  socialSecurity: { name: 'social_security', question: 'social security' },
  : { name: '', question: '' },
  : { name: '', question: '' },
}
export default questions
