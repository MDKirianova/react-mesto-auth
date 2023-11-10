import React from "react";
import WindowWithForm from "./WindowWithForm.jsx";

export default function Login({ onLogin }) {
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

    onLogin(email, password)
  }
  return (
    <WindowWithForm
      title={'Вход'}
      onSubmit={handleSubmit}
      buttonText={'Войти'}
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
    </WindowWithForm>
  )
}