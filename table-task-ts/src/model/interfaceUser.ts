export interface IUser {
  token?: string
  email: string
  password: string
}
export interface ITable {
  id: number
  name: string
  email: string
  birthday_date: string
  phone_number: string
  address: string
  results: {
    id: number
    name: string
    email: string
    birthday_date: string
    phone_number: string
    address: string
  }
}
