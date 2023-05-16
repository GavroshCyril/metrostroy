import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: "header",
    initialState: {
        title: '',
    },
    reducers: {
        setHeaderState: (state, {payload}) => {
            state.title = payload.title;
        },
    },
});

export const selectHeader = (state) => state.header;

export const {
    setHeaderState
} = headerSlice.actions;

export default headerSlice.reducer;
