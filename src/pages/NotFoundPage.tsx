import './NotFoundPage.css'
import { Link } from 'react-router-dom'
function NotFoundPage() {
    return (
        <div className="error_div">
        <p className="error">404 — cтраница не найдена</p>
        <Link to="/"><button className="home"><b>На главную</b></button></Link>
        </div>
    );
}
export default NotFoundPage;