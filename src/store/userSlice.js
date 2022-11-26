import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    id: '',
    name: '',
    role: ''
  },
  reducers: {
    update: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("state", state)
      console.log("action", action)
      state.id = action.payload.id
      state.name = action.payload.name
      state.role = action.payload.role
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const selectUserState = (state) => state.user
export const isUserLoggedIn = (state) => state.user.id !== ""

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, update } = userSlice.actions

export default userSlice.reducer