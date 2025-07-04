import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="foot_inf">
                    <Link to="/"> <h2 className="name_Job"> МарГУ</h2></Link>
                    <p className="cardtxt"> Мы поддерживаем креативных, творческих детей и вожатых. </p>
                </div>
                <div className="foot_infs">
                    <p className="inf_foot"> <b>© 1972–2025 ФГБОУ ВО «Марийский государственный университет»</b></p>
                    <Link to="/cc" ><p className="terms"> <b>Карта сайта · Сведения об образовательной организации</b></p></Link>
                </div>
            </footer>
        </>
    );
}

export default Footer;