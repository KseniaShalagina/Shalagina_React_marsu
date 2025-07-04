import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="headers">
        <div>
          <Link to="/" className="logo"><b>МарГУ</b></Link>
        </div>
        <div>
          <nav className="butt">
            <ul>
              <li>
                <Link to="/cards"><button className="logs"><b>Для родителей</b></button></Link>
                <Link to="/cc" ><button className="sing"><b>Регистрация</b></button></Link>
                <button className="log"><b>Войти</b></button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;