import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Form from '../Form/Form';

function Header() {
  const [open, setOpen] = useState(false);
  const [formName, setFormName] = useState<'entrance' | 'registration'>('registration');

  const clickOpenReg = () => {
    setOpen(true);
    setFormName('registration');
  }

  const clickOpenEnt = () => {
    setOpen(true);
    setFormName('entrance');
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
                  <button className="sing" onClick={clickOpenReg}><b>Регистрация</b></button>
                  <button className="log" onClick={clickOpenEnt}><b>Войти</b></button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Form active={open} setActive={setOpen} formName={formName} />
    </>
  );
}
export default Header;