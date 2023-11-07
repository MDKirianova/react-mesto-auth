import logo from '../images/header__logo.svg'

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип места Россия" className="header__logo" />
    </header>
  )
}