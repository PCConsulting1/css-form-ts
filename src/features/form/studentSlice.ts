import { createSlice, configureStore } from '@reduxjs/toolkit'

import { student } from '../../data/initialFormState'

const formSlice = createSlice({
  name: 'form',
  initialState: student,
  reducers: {
    'student/addSchool': (state) => {
      const newSchool = {
        collegeName: '',
        incomingGrade: '',
        housingStatus: '',
        appliedBefore: false,
        transfer: false,
      }
      state.applying.push(newSchool)
    },
    // addSibling
    // addParent
  },
})

export const { addSchool } = formSlice.actions

const store = configureStore({
  reducer: formSlice.reducer,
})

store.subscribe(() => console.log(store.getState()))
