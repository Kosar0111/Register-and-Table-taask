import { TableTask } from '../../core/Table/TableTask'
import { useAppSelector } from '../../../hooks/hooks'
import './TablePage.css'

export const TablePage = () => {
  const { users } = useAppSelector((state) => state.auth)
  return (
    <div>
      <header className="user-name">{users.email}</header>
      <TableTask />
    </div>
  )
}
