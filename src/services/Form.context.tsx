import { createContext, useReducer, useEffect, PropsWithChildren } from 'react'
import { FormContextType, FormModel } from '../types/@types.form'
// import { formReducer } from './form.reducer'

export const FormContext = createContext<FormContextType | null>(null)

const FormProvider({ children }: PropsWithChildren) {
  const [form, dispatch] = useReducer(formReducer, [], () => {
    // get form data from database or return empty
    return []
  })
  return (
    <FormContext.Provider value={{ form, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}
