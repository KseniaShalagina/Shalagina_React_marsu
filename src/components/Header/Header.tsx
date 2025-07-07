import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Form from '../Form/Form';

function Header() {
  const [open, setOpen] = useState(false);
  const clickOpen = () => {
    setOpen(true);
  }
  return (
    <>
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
                  <button className="sing" onClick={clickOpen}><b>Регистрация</b></button>
                  <button className="log" onClick={clickOpen}><b>Войти</b></button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Form active={open} setActive={setOpen} />
    </>
  );
}
export default Header;