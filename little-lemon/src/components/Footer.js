import Logo from './Logo.svg';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Logo"></img>
            <p>Doormat Navigation</p>
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#menu">Menu</a></li>
                <li><a href="/#reservations">Reservations</a></li>
                <li><a href="/#">Order Online</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
            <p>Contact</p>
            <ul>
                <li>Adress</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <p>Social Media Links</p>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>
         </footer>
    );
}
export default Footer;