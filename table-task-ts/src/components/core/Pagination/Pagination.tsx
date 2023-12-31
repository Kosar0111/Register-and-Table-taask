import { FC, useState, useEffect } from 'react'

import './Pagination.css'

type PaginationProps = {
  taskPerPage: number
  total: number
  paginate: (pageNumber: number) => void
}

export const Pagination: FC<PaginationProps> = ({ total, taskPerPage, paginate }) => {
  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(total / taskPerPage); i++) {
    pageNumbers.push(i)
  }

  const [currentButton, setCurrentButton] = useState(1)
  const [arrOfCurrentButtons, setArrOfCurrentButton] = useState<number[]>([])

  useEffect(() => {
    let templeNumberPages: number[] = [...arrOfCurrentButtons]

    const dotsInitial: any = '...'
    const dotsLeft: any = '... '
    const dotsRight: any = ' ...'

    if (currentButton >= 1 && currentButton <= 3) {
      templeNumberPages = [1, 2, 3, dotsInitial, pageNumbers.length]
    } else if (currentButton === 3) {
      const sliced = pageNumbers.slice(0, 4)
      templeNumberPages = [...sliced, dotsInitial, pageNumbers.length]
    } else if (currentButton > 3 && currentButton < pageNumbers.length - 2) {
      const sliced1 = pageNumbers.slice(currentButton - 2, currentButton)
      const sliced2 = pageNumbers.slice(currentButton, currentButton + 1)
      templeNumberPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]
    } else if (currentButton > pageNumbers.length - 3) {
      const sliced = pageNumbers.slice(pageNumbers.length - 3)
      templeNumberPages = [1, dotsLeft, ...sliced]
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrentButtons[arrOfCurrentButtons.length - 3] + 1)
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrentButtons[2] + 2)
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrentButtons[2] - 2)
    }
    paginate(currentButton)
    setArrOfCurrentButton(templeNumberPages)
  }, [currentButton])

  return (
    <div>
      <div className="pagination-container">
        <a
          href="!#"
          className={currentButton === 1 ? 'disabled' : ''}
          onClick={() => setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))}
        >
          Prev
        </a>
        {arrOfCurrentButtons.map((number) => (
          <a
            key={number}
            onClick={() => setCurrentButton(number)}
            href="!#"
            className={currentButton === number ? 'active' : ''}
          >
            {number}
          </a>
        ))}
        <a
          href="!#"
          className={currentButton === pageNumbers.length ? 'desabled' : ''}
          onClick={() =>
            setCurrentButton((prev) => (prev === pageNumbers.length ? prev : prev + 1))
          }
        >
          Next
        </a>
      </div>
    </div>
  )
}
