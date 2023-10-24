import * as yup from 'yup'

export const validationSchema = yup.object({
  email: yup
    .string()
    .min(6, 'Повинно бути я мінімум 6 літери')
    .max(20, 'Цей пароль э надто довгим')
    .required(`Поле Email э обов'язковым`),
  password: yup
    .string()
    .min(6, 'Повинно бути я мінімум 6 літери')
    .max(20, 'Цей пароль э надто довгим')
    .required(`Це поле э обовязковым для заповнення!`)
})
