import { createSlice } from '@reduxjs/toolkit'

export const linesSlice = createSlice({
  name: 'lines',
  initialState: {
    data: []
    // fBranch: {},
    // sBranch: {},
    // tBranch: {},
  },
  reducers: {
    // update: (state, action) => {
    //   console.log("state", state)
    //   console.log("action", action)

    //     state.currentLocale = action.payload
    // },
    update: (state, action) => {
      console.log("state", state)

      console.log("action", action)

      state.data = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const selectLines = (state) => state.lines.data
export const selectLocale = (state) => state.lines.currentLocale
// export const isUserLoggedIn = (state) => state.user.id !== ""

// Action creators are generated for each case reducer function
export const { update, updateLocalisationResouces } = linesSlice.actions

export default linesSlice.reducer