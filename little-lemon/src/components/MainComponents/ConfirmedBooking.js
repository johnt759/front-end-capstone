import { Link, Routes, Route } from "react-router-dom";
import Hero from './Hero.js';
import './Styles/Confirmed.css';

function ConfirmedBooking() {
    return (
        <section className="confirmation-page">
            <h1>You're all set!</h1>
            <p>We look forward to seeing you at your next reservation.</p>
            <Routes>
                <Route path="/" element={Hero}/>
            </Routes>
            <p><Link to="/booking">Back to Booking page</Link></p>
        </section>
    )
}

export default ConfirmedBooking;