import Logo from './Logo.svg';
import './Styles/header_style.css'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Little Lemon Logo"></img>
         </header>
    );
}
export default Header;