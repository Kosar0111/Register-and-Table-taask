import './LogIn.css'
import { useFormik, FormikProps } from 'formik'

import { validationSchema } from '../../../helpers/validationLogIn'

import { logIn } from '../../../store/authSlice'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'

import load from '../../../assets/img/loading.gif'

type FormModel = {
  email: string
  password: string
}

export const LogIn: any = () => {
  const dispatch = useAppDispatch()
  const { loading, authError, isAuthBool, message } = useAppSelector((state) => state.auth)
  const onSubmit = (values: FormModel) => {
    dispatch(logIn(values))
    formik.resetForm()
  }

  const formik: FormikProps<FormModel> = useFormik<FormModel>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit,
    validationSchema
  })
  if (!isAuthBool) {
    return (
      <div className="main">
        <div className="main-content">
          <div className="main-content__form">
            <form className="form-wrap" onSubmit={formik.handleSubmit}>
              <div className="form-log"> Увійти</div>
              <input
                className="name"
                type="text"
                placeholder="Адреса електронної почти або номер телефону"
                name="email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <div className="error">{formik.errors.email}</div>}
              <input
                className="pass"
                type="password"
                placeholder="Пароль"
                name="password"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && <div className="error">{formik.errors.password}</div>}
              <button className="btn" type="submit" disabled={!formik.isValid}>
                Увійти
              </button>
              <div className="check-help">
                <label htmlFor="checkbox" className="remember">
                  <input className="check-help_check" type="checkbox" />
                  {`Запам'ятати мене`}
                </label>
                <span className="check-help_text">Потрібна допомога?</span>
              </div>
              <p>
                Уперше на NEtflix? <span className="white-text">Зареєструватися</span>
              </p>
              <p>Щоб переконатися що ви не бот, сторінка захищена системою Google reCAPTCHA</p>
              <p>
                <span className="blue-text">Докладніше</span>
              </p>
              <div className="error-loading">
                {authError && <h2 className="error-api">{message}</h2>}
                {loading && <img className="load" src={load} alt="loading" />}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
