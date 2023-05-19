import { FormModel } from '../types/@types.form'
export const studentFormReducer = (form, action) => {
  switch (action.type) {
    case 'ADD_SCHOOL': {
      const newSchool = {
        collegeName: action.payload.collegeName,
        incomingGrade: action.payload.incomingGrade,
        housingStatus: action.payload.housingStatus,
        appliedBefore: action.payload.appliedBefore,
        transfer: action.payload.transfer,
      }
      return { ...form, applying: [...form.applying, newSchool] }
    }
    default:
      return form
  }
}

export const parentFormReducer = (form, action) => {
  switch (action.type) {
    case 'ADD_PARENT': {
      return { ...form, parents: [...form.parents, newParent] }
    }
    case 'ADD_SIBLING': {
      return { ...form, dependents: [...form.dependents, newSibling] }
    }
    default:
      return form
  }
}
