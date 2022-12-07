import { createSlice } from '@reduxjs/toolkit'

export const linesSlice = createSlice({
  name: 'lines',
  initialState: {
    data: [],
    currentLine: "home_moscowTitle"
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
    updateCurrentLineName: (state, action) => {
      console.log("state", state)

      console.log("action", action)

      state.currentLine = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

function selectedLine(elem, currentLineName) {
  return elem.line_name === currentLineName;
}

export const selectLines = (state) => state.lines.data
export const selectLine = (state, currentLineName) => {
  console.log("currentLineName000", currentLineName)
  console.log("state.lines.data", state.lines.data)

  return state.lines.data.find((elem) => {
    console.log("elem", elem)
    console.log("elem.line_name", elem.line_name)
    console.log("currentLineName", currentLineName)
    return elem.line_name === currentLineName
  })
}
export const selectCurrentLineName = (state) => state.lines.currentLine
// export const isUserLoggedIn = (state) => state.user.id !== ""

// Action creators are generated for each case reducer function
export const { update, updateLocalisationResouces } = linesSlice.actions

export default linesSlice.reducer