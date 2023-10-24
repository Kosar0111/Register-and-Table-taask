import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser } from '../model/interfaceUser'
interface IUserSlice {
  users: IUser
  loading: boolean
  authError: boolean
  isAuthBool: boolean
  message: string
}
const initialState: IUserSlice = {
  loading: false,
  authError: false,
  isAuthBool: false,
  message: '',
  users: {
    token: '',
    email: '',
    password: ''
  }
}

type FormModel = {
  email: string | number
  password: string
}

export const logIn = createAsyncThunk('users/getUsers', async (client: FormModel) => {
  const response = await axios.get<IUser[]>('http://localhost:3001/users')
  const auth = response.data.find(
    (user: IUser) => user.email === client.email && user.password === client.password
  )

  if (auth) return auth
  throw new Error(' Ви ввели не правильні данні')
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLog: (state, action) => {
      state.users = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      state.loading = true
      state.authError = false
      state.message = ''
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loading = false
      authSlice.caseReducers.userLog(state, action)
      state.isAuthBool = true
      state.authError = false
      state.message = ''
    })
    builder.addCase(logIn.rejected, (state) => {
      state.loading = false
      state.isAuthBool = false
      state.authError = true
      state.message = 'Щось пішло не так.'
    })
  }
})
export default authSlice.reducer
