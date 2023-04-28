import { createSlice } from "@reduxjs/toolkit";

export const linesSlice = createSlice({
  name: "lines",
  initialState: {
    data: [],
    currentLine: "home_moscowTitle",
  },
  reducers: {
    update: (state, action) => {
      state.data = action.payload;
    },
    updateCurrentLineImage: (state, action) => {
      const { filename, lineName } = action.payload;
      const index = state.data.findIndex((line) => line.line_name == lineName);
      const newArray = [...state.data];
      newArray[index].line_picture = filename;
      state.data = newArray;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

function selectedLine(elem, currentLineName) {
  return elem.line_name === currentLineName;
}

export const selectLines = (state) => state.lines.data;
export const selectLine = (state, currentLineName) => {
  return state.lines.data.find((elem) => {
    return elem.line_name === currentLineName;
  });
};
export const selectCurrentLineName = (state) => state.lines.currentLine;
// export const isUserLoggedIn = (state) => state.user.id !== ""

// Action creators are generated for each case reducer function
export const {
  update,
  updateLocalisationResouces,
  updateCurrentLineImage,
} = linesSlice.actions;

export default linesSlice.reducer;
