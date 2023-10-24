import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ITable } from '../model/interfaceUser'

interface ITableSlice {
  tasks: ITable[]
  loading: boolean
  error: boolean
  message: string
}
const initialState: ITableSlice = {
  loading: false,
  error: false,
  message: '',
  tasks: []
}

export const getTable = createAsyncThunk('table/getTable', async (_) => {
  const response = await axios.get<ITable>(
    'https://technical-task-api.icapgroupgmbh.com/api/table/'
  )
  return response.data.results
})
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    allTasks: (state, action) => {
      state.tasks = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTable.pending, (state) => {
      state.loading = true
      state.error = false
      state.tasks = []
    })
    builder.addCase(getTable.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      tasksSlice.caseReducers.allTasks(state, action)
    })
    builder.addCase(getTable.rejected, (state) => {
      state.loading = false
      state.error = true
      state.message = 'Сервер не відповідає або щось трапилось з інтернетом'
    })
  }
})

export const { allTasks } = tasksSlice.actions
export default tasksSlice.reducer
