import './Styles/nav_style.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to="/booking">Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
         </nav>
    );
}
export default Nav;