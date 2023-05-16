import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import localizationReducer from './localizationSlice'
import linesReducer from './linesSlice'
import headerReducer from './headerSlice'
import reviewsReducer from './reviewsSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        localization: localizationReducer,
        lines: linesReducer,
        header: headerReducer,
        reviews: reviewsReducer
    },
  })