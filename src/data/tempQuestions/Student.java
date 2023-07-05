// import java.time.LocalDate;

// public record Student(
//   @Id Integer id,
//   //do not pass this to client
//   @Id Integer account_id,
//   //connect to address table
//   @Id Integer address_id,
//   @Id Integer schedule1_id,
//   @Id Integer schedule2_id,
//   @Id Integer schedule3_id,
//   @Id Integer tax1040_id,
//   @NotBlank String firstName, //match with Parent, FamilyBusiness, Dependents
//   String middleName,
//   @NotBlank String lastName,  //match with Parent, FamilyBusiness, Dependents
//   @NotBlank String phoneNumber,
//   @NotBlank String email,     //match with Parent
//   @NotBlank LocalDate birthDate,  //match with Parent, Dependents
//   @NotBlank String citizenship,
//   @NotBlank String socialSecurityId,
//   String cbFinAidId,
//   @NotBlank String currentAcademicYear,
//   @NotBlank String maritalStatus,
//   @NotBlank Boolean hasLegalDependents,
//   @NotBlank Boolean isVeteran,  //match with Parent
//   @NotBlank Boolean wasEmancipatedMinor,
//   @NotBlank Boolean isHomeless,
//   @NotBlank Boolean wasWardOfTheCourt,
//   @NotBlank Boolean wasFosterCare,
//   @NotBlank String guardianMaritalStatus,
//   String singleParentReason,
//   @NotBlank Boolean is1040Filed,
//   String taxReturnType,
//   String filingStatus,
//   @NotBlank Integer incomeFromWork, //match with Parent
//   @NotBlank Integer taxableEarnings,
//   @NotBlank Integer untaxedSocialSecurity,
//   @NotBlank Integer untaxedIncomeOther,
//   @NotBlank Integer scholarshipHelp,
//   @NotBlank Integer employerHelp,
//   @NotBlank Integer relativesHelp,
//   @NotBlank Integer investments,
//   @NotBlank Integer trust,
//   @NotBlank Integer liquid_cash,
//   @NotBlank Integer retirement,
//   @NotBlank Integer summer,
//   @NotBlank Integer otherTaxedSummer,
//   @NotBlank Integer otherUntaxedSummer,
//   @NotBlank Integer academicYear,
//   @NotBlank Integer otherTaxedAcademicYear,
//   @NotBlank Integer otherUnaxedAcademicYear,
//   Set<Schools> schools
//   ){}