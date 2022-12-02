import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import localizationReducer from './localizationSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        localization: localizationReducer
    },
  })