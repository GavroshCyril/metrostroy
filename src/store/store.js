import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import localizationReducer from './localizationSlice'
import linesReducer from './linesSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        localization: localizationReducer,
        lines: linesReducer
    },
  })