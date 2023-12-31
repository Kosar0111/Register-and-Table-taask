import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import tableSlice from './tableSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    table: tableSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
