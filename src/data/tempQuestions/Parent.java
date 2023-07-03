import java.time.LocalDate;

public record Parent(
  @Id Integer id,
  @NotBlank String firstName, //match with Student, FamilyBusiness, Dependents
  @NotBlank String lastName, //match with Student, FamilyBusiness, Dependents
  @NotBlank String email, //match with Student
  @NotBlank LocalDate birthDate,  //match with Student, Dependents
  @NotBlank String highestEducation,
  @NotBlank Integer incomeFromWork, //match with Student
  @NotBlank Integer expectedIncomeFromWork,
  @NotBlank String employmentStatus,
  @NotBlank Boolean isVeteran,  //match with Student
  @NotBlank Boolean isDislocatedWorker,
  @NotBlank String occupation,
  @NotBlank String companyName,
  @NotBlank String companyLocation,
  @NotBlank Integer yearsAtCompany,
  @NotBlank Boolean hasTaxDeferredRetirement,
  @NotBlank Boolean hasEmployerSponsoredRetirement,
  @NotBlank Boolean hasCivilServiceRetirement,
  @NotBlank Boolean hasUnionSponsoredRetirement,
  @NotBlank Boolean hasMilitarySponsoredRetirement,
  @NotBlank Boolean hasOtherRetirement,
  @NotBlank Integer retirementValue
) {}
