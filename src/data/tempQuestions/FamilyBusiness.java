public record FamilyBusiness(
  @NotBlank String firstName, //match with Student, Parent
  @NotBlank String lastName, //match with Student, Parent
  @NotBlank String relationship,
  @NotBlank Integer salary
) {}
