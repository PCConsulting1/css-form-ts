import { useState } from 'react'
import StudentIntro from './StudentIntro'

export default function Form() {
  const [form, setForm] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  // const prevStep = () => {
  //   setForm({ ...form, step: form.step - 1 })
  // }
  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 })
    // const temp = form
    // temp.step += 1
    // setForm(temp)
  }
  const handleChange = (
    event: {
      target: { name: string; value: string | number | boolean }
    },
    activate: { value; questions: []; pages: [] }
  ) => {
    console.log(event.target.name, event.target.value)
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // return {
  //   switch({ form.step }) {
  //     case 1: {
  //       return (<StudentBasic nextStep={nextStep} handleChange={handleChange} form={form}/>)
  //     }
  //   }
  // }
  return (
    <>
      <h1>Hello</h1>
      <h2>{form.step}</h2>
      {(() => {
        switch (form.step) {
          case 1:
            return (
              <StudentIntro
                nextStep={nextStep}
                handleChange={handleChange}
                form={form}
              />
            )
          // case 2:
          //   return <SelectBox />
          // case 3:
          //   return <SelectBox />
          default:
            return <h1>Hello</h1>
          // create a confirmation page
        }
      })()}
    </>
  )
}
