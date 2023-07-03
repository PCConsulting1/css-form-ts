import java.time.LocalDate;

public record Dependent(
  @Id Integer id,
  @Id Integer household_id,
  @NotBlank String firstName, //match with Parent, FamilyBusiness, Student
  @NotBlank String lastName,  //match with Parent, FamilyBusiness, Student
  @NotBlank LocalDate birthDate,  //match with Parent, Student
  @NotBlank String relationship,
  @NotBlank String priorSchoolYear,
  @NotBlank String priorSchoolName,
  @NotBlank String priorCost,
  @NotBlank String priorScholarship,
  @NotBlank Integer priorPaidByParents,
  @NotBlank String currentSchoolYear,
  @NotBlank String currentSchoolName,
  @NotBlank String currentCost,
  @NotBlank String currentScholarship,
  @NotBlank Integer currentPaidByParents,
  @NotBlank Boolean isFullTime,
  @NotBlank String collegeType
) {}
