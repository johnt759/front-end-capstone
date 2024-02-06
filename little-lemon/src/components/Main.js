//import './Styles/main_style.css';
import Hero from './MainComponents/Hero.js';
import Specials from './MainComponents/Specials.js';
import Testimonials from './MainComponents/Testimonials.js';
import About from './MainComponents/About.js';
import BookingPage from './MainComponents/BookingPage.js';
import { Routes, Route } from "react-router-dom";

function Main() {
    return (
        <main className="main-section">
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/specials" element={<Specials/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/booking" element={<BookingPage/>}/>
            </Routes>
         </main>
    );
}
export default Main;