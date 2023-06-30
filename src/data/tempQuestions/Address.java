public record Address(
  @NotBlank String streetAddress,
  @NotBlank String streetAddress2,
  @NotBlank String city,
  @NotBlank String state,
  @NotBlank String zip
) {}
