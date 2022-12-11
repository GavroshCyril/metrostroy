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
    logout: (state) => {
      state.id = ""
      state.name = ""
      state.role = ""
    }
  },
})

export const selectUserState = (state) => state.user
export const isUserLoggedIn = (state) => state.user.id !== ""

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, update, logout } = userSlice.actions

export default userSlice.reducer