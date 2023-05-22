import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: "header",
    initialState: {
        title: '',
        image: ''
    },
    reducers: {
        setHeaderState: (state, {payload}) => {
            state.title = payload.title;
            state.image = payload.image;
        },
    },
});

export const selectHeader = (state) => state.header;

export const {
    setHeaderState
} = headerSlice.actions;

export default headerSlice.reducer;
