import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/Userslice'

export const store = configureStore({
  reducer: todoReducer,
})