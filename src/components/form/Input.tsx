/**
 *
 * @param variant Type of input
 * @param name Name of input field
 * @param isRequired Needs non-blank value
 * @param defaultValue Value of input field
 * @param onChange function to be called input value changes.
 *                 will contain list of questions/pages to activate
 */
export default function ({
  variant = 'basic',
  name,
  isRequired = false,
  defaultValue,
  onChange,
})
