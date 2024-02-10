import BookingForm from './BookingForm.js';
import './Styles/BookingPage.css';

function BookingPage(props) {
    let {availableTimes, dispatchData} = props;
    return (
        <section className="booking-section">
            <h1>Book a Table Reservation Form</h1>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
            <p>Please fill out the form, and we'll take care of the rest for you.</p>
         </section>
    );
}
export default BookingPage;