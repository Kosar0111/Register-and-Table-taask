import { v4 as uuidv4 } from 'uuid'

import { IUser } from '../model/interfaceUser'

type ActionPayload = Record<string | number, string>

export const userLogIn = (value: ActionPayload): IUser => {
  return {
    token: uuidv4(),
    email: value.email.trim(),
    password: value.password.trim()
  }
}
