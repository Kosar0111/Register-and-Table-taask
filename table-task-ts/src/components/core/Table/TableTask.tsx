import { useEffect } from 'react'
import { Task } from '../Task/Task'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getTable } from '../../../store/tableSlice'
import './TableTask.css'

export const TableTask = () => {
  const tasks = useAppSelector((state) => state.table.tasks)
  const dispatch = useAppDispatch()
  console.log(tasks)
  useEffect(() => {
    dispatch(getTable())
  }, [dispatch])
  return (
    <div className="table-field">
      <div className="table-field-label">
        <div className="name-artist">Name</div>
        <div className="phone">Phone</div>
        <div className="email">email</div>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  )
}
