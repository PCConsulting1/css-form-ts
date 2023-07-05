interface Props {
  nextStep: () => void
  handleChange: (
    event: {
      target: {
        name: string
        value: string | number | boolean
      }
    },
    activate: {
      value: string | number | boolean
      questions: []
      pages: []
    }
  ) => void
  form: any
}
export default function StudentIntro({ nextStep, handleChange, form }: Props) {
  return (
    // need form structure component
    // will pass questions
    <>
      <h1>Student</h1>
      <div></div>
      {/* add inputs here */}
    </>
  )
}
