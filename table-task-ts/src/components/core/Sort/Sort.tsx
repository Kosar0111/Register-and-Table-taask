import { FC } from 'react'

type SortNameProp = {
  sortName: string
  sort: (e: string) => void
}

export const SortName: FC<SortNameProp> = ({ sortName, sort }) => {
  return (
    <div className="sort-name">
      Name:
      <select value={sortName} onChange={(e) => sort(e.target.value)}>
        <option value="highest">сортувати за албеткою</option>
        <option value="lowest">сортувати з кінця абетки</option>
      </select>
    </div>
  )
}
