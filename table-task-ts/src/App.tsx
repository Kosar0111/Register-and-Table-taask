import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-content__form">
          <div className="form-wrap">
            <div className="form-log"> Увійти</div>
            <input className="name" type="text" />
            <input className="pass" type="password" />
            <button className="btn">Увійти</button>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
