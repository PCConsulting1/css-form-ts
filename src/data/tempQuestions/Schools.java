public record Schools(
  @NotBlank String collegeCode,
  @NotBlank String incomingGrade,
  @NotBlank String housingStatus,
  @NotBlank Boolean hasAppliedBefore,
  @NotBlank Boolean isTransfer
) {}
