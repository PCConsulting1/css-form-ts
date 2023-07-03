public record FamilyBusiness(
  @NotBlank String firstName, //match with Student, Parent, Dependents
  @NotBlank String lastName, //match with Student, Parent, Dependents
  @NotBlank String relationship,
  @NotBlank Integer salary
) {}
