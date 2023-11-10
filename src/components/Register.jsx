import React from "react";
import WindowWithForm from "./WindowWithForm.jsx";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value)
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(email, password)
  }
  return (
    <WindowWithForm
      title={'Регистрация'}
      onSubmit={handleSubmit}
      buttonText={'Зарегистрироваться'}
    >
      <input
        className="window-form__input"
        name="emal"
        type="email"
        placeholder="Email"
        required
        onChange={handleChangeEmail}
        value={email || ''}
      />
      <input
        className="window-form__input"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        minLength={6}
        onChange={handleChangePassword}
        value={password || ''}
      />
      <p className="window-form__question">Уже зарегистрированы?
          <Link to="/sign-in" className="window-form__login-link">Войти</Link></p>
    </WindowWithForm>
  )
}