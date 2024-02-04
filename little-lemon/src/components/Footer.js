import Logo from './Logo.svg';
import './Styles/footer_style.css';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Logo"></img>
            <ul>
            <p>Doormat Navigation</p>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#menu">Menu</a></li>
                <li><a href="/#reservations">Reservations</a></li>
                <li><a href="/#">Order Online</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
            <ul>
            <p>Contact</p>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
            <p>Social Media Links</p>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>
         </footer>
    );
}
export default Footer;