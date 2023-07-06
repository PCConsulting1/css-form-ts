import Container from 
/**
 *
 * @param variant Type of input
 * @param name Name of input field
 * @param isRequired Needs non-blank value
 * @param defaultValue Value of input field
 * @param onChange function to be called input value changes. Will contain list of questions/pages to activate
 */
interface Props {
  variant?: string
  name: string
  isRequired?: boolean
  defaultValue: string | boolean | number
  onChange: any
  options?: Array<string>
  // auth?: Array<string> will be used for validation
}
export default function ({
  variant = 'basic',
  name,
  isRequired = false,
  defaultValue,
  onChange,
  options = [],
}: Props) {
  return { switch({ variant }) {
    case 'select': {
      return ()
    }
  } }
}
