import React from "react";
export default function WindowWithForm({title, children, onSubmit, buttonText}) {
  const inputs = [children[0], children[1]];
  const loginLink = [children[2]];
  return (
    <div className="">
      <div className="window-form__container">
        <h1 className="window-form__title">{title}</h1>
        <form className="window-form__fieldset" onSubmit={onSubmit}>
          {inputs}
          <button type="submit" className="window-form__save-btn">{buttonText}</button>
          {loginLink}
        </form>
      </div>
    </div>
  )
}