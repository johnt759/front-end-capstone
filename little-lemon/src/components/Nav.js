import './Styles/nav_style.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/specials">Specials</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/booking">Bookings</Link></li>
            </ul>
         </nav>
    );
}
export default Nav;