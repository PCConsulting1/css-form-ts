import q from './questions.data'

const sections = {
  student: [
    {
      about: 'Student',
      questions: [
        q.firstName,
        q.middleName,
        q.lastName,
        q.birthDate,
        q.currentAcademicYear,
        q.collegeName,
      ],
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
    {
      about: 'Student',
      questions: [
        q.collegeCode,
        q.incomingGrade,
        q.housingStatus,
        q.appliedBefore,
        q.isTransfer,
      ],
    },
  ],
  parent: [
    {
      about: 'Parents',
      questions: [
        q.birthDate,
        q.socialSecurityId,
        q.email,
        q.parentHighestEducation,
      ],
    },
    {
      about: 'Parents',
      questions: [],
    },
  ],
  household: [
    {
      about: 'Parents',
      questions: [
        q.taxesFiled,
        q.taxReturnType,
        q.filingStatus,
        q.isSchedule1Filed,
        q.isSchedule2Filed,
        q.isSchedule3Filed,
      ],
    },
    {
      about: 'Parents',
      questions: [
        q.taxReturnLine1,
        q.taxReturnLine2a,
        q.taxReturnLine2b,
        q.taxReturnLine3b,
      ],
    },
    {
      about: 'Parents',
      questions: [q.taxReturnLine4a, q.rollover, q.taxReturnLine4b],
    },
    {
      about: 'Parents',
      questions: [q.taxReturnLine5a, q.rollover, q.taxReturnLine5b],
    },
    {
      about: 'Parents',
      questions: [
        q.taxReturnLine6a,
        q.taxReturnLine6b,
        q.taxReturnLine7,
        q.taxReturnLine10,
      ],
    },
    {
      about: 'Parents',
      questions: [
        q.taxReturnLine11,
        q.taxReturnLine12c,
        q.taxReturnLine13,
        q.taxReturnLine22,
      ],
    },
    {
      about: 'Parents',
      questions: [
        q.schedule1Line1,
        q.schedule1Line2a,
        q.schedule1Line3,
        q.schedule1Line4,
      ],
    },
    {
      about: 'Parents',
      questions: [
        q.schedule1Line5,
        q.schedule1Line6,
        q.schedule1Line7,
        q.schedule1Line8d,
      ],
    },
    {
      about: 'Parents',
      questions: [q.schedule1Line9],
    },
  ],
}

export default sections
