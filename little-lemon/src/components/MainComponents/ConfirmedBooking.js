import { useNavigate, Routes, Route } from "react-router-dom";
import BookingPage from './BookingPage.js';
import BookingForm from './BookingForm.js';
import Hero from './Hero.js';
import './Styles/Confirmed.css';

function ConfirmedBooking() {
    return (
        <section className="confirmation-page">
            <h1>You're all set!</h1>
            <p>We look forward to seeing you.</p>
            <Routes>
                <Route path="/" element={Hero}/>
            </Routes>
        </section>
    )
}

export default ConfirmedBooking;