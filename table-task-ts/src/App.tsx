import './App.css'
import { useAppSelector } from '../src/hooks/hooks'

import { LogInPage } from './components/pages/LoginPage/LogInPage'
import { TablePage } from './components/pages/TablePage/TablePage'

export const App: any = () => {
  const { isAuthBool } = useAppSelector((state) => state.auth)

  if (!isAuthBool) {
    return <LogInPage />
  }
  return <TablePage />
}
