import q from './questions.data'

const sections = [
    {
      about: 'Student',
      questions: [q.firstName, q.middleName, q.lastName, q.birthDate],
    },
    {
      about: 'Student',
      questions: [q.cbFinAidId, q.socialSecurityId, q.maritalStatus],
    },
    {
      about: 'Student',
      questions: [
        q.citizenship,
        q.hasLegalDependants,
        q.isVeteran,
        q.wasEmancipatedMinor,
        q.isHomeless,
        q.wasWardOfTheCourt,
        q.wasFosterCare,
      ],
    },
    {
      about: 'Student',
      questions: [q.streetAddress, q.streetAddress2, q.city, q.state, q.zip],
    },
    {
      about: 'Parents',
      questions: [
        q.firstName,
        q.lastName,
        q.guardianRelationship,
        q.isDeceased,
        q.infoProvided,
      ],
    },
    {
      about: 'Parents',
      questions: [q.guardianMaritalStatus],
    },
    {
      about: 'Parents',
      questions: [q.singleParentReason],
    },
  parent: [],
  household: [],
]

export default sections
