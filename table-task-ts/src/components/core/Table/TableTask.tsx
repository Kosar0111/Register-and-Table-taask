import { useEffect, useState } from 'react'

import { Task } from '../Task/Task'

import { Pagination } from '../Pagination/Pagination'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getTable } from '../../../store/tableSlice'
import './TableTask.css'
import { SortName } from '../Sort/Sort'

export const TableTask = () => {
  const tasks = useAppSelector((state) => state.table.tasks)
  const dispatch = useAppDispatch()

  const total = tasks.length
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(3)
  const [sortName, setSortName] = useState('')
  const [nameAll, setNameAll] = useState(tasks)

  const indexOfLastPage = currentPage * postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const currentTasks = tasks.slice(indexOfFirstPage, indexOfLastPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const sort = (sort: string) => {
    setSortName(sort)
    setNameAll(
      nameAll.slice().sort((a, b): any => {
        return sort !== 'lowest'
          ? a.name.toLowerCase().localeCompare(b.name.toLocaleLowerCase()) &&
              typeof parseInt(a.name) !== typeof parseInt(b.name)
          : b.name.toLowerCase().localeCompare(a.name.toLocaleLowerCase())
      })
    )
  }
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
      {currentTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <Pagination taskPerPage={postPerPage} total={total} paginate={paginate} />
      <SortName sortName={sortName} sort={sort} />
    </div>
  )
}
