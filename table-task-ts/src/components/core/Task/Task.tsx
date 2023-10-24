import { FC } from 'react'
import './Task.css'
import { ITable } from '../../../model/interfaceUser'

type ITableProps = ITable

export const Task: FC<ITableProps> = (task) => {
  const { name, phone_number, email } = task
  return (
    <div className="task">
      <div className="task-name">{name}</div>
      <div className="task-email">{email}</div>
      <div className="task-phone_number">{phone_number}</div>
    </div>
  )
}
