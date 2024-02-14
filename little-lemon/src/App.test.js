/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import BookingForm, {allValid} from './components/MainComponents/BookingForm.js';
//import Main from './components/Main.js';
import {render, screen} from "@testing-library/react";
import {fetchAPI, submitAPI} from './components/api.js';
import ConfirmedBooking from './components/MainComponents/ConfirmedBooking.js';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Fill in the fields below");
    expect(headingElement).toBeInTheDocument();
})

test('Button is disabled until all inputs valid', () => {
    render(<BookingForm />);
    const submitButton = screen.getByDisplayValue("Make Your Reservation");
    expect(submitButton).toHaveAttribute("disabled");
})

test("fetchAPI should return list of times for today's date", () => {
    let newDate = new Date();
    let thisYear = newDate.getFullYear();
    let thisMonth = newDate.getMonth()+1;
    let thisDay = newDate.getDate();
    let thisDate = thisYear+'-'+thisMonth+'-'+thisDay;
    expect(fetchAPI(thisDate)).not.toBe(null);
})

test("fetchAPI should return empty for any dates other than the available ones", () => {
    let thisDate ='9999-12-31'
    expect(fetchAPI(thisDate)).toBe(null);
})

test("submitAPI should return true if the booking is made, and is not yet reserved", () => {
    let newForm = ["2024-2-18", "17:00", "2", "engagement"];
    expect(submitAPI(newForm)).toBe(true);
})

test("submitAPI should return false if the booking is made, and said booking is already reserved for that date", () => {
    let newForm = ["2024-2-24", "21:00", "2", "engagement"];
    expect(submitAPI(newForm)).toBe(false);
})

test('allValid should return true if all inputs are valid', () => {
    render(<BookingForm />);
    let testDate = "2024-2-14";
    let testTime = "18:00";
    let testGuests = 5;
    let testOccasion = "Engagement";

    function allValid(date, time, guests, occasion) {
        return date != "" && time != "" && guests != "" && (guests >= 1 && guests <= 10) && occasion != "";
    }

    expect(allValid(testDate, testTime, testGuests, testOccasion)).toBe(true);
})

test('allValid should return false if one of the inputs are invalid', () => {
    render(<BookingForm />);
    let testDate = "";
    let testTime = "";
    let testGuests = -99;
    let testOccasion = "";

    function allValid(date, time, guests, occasion) {
        return date != "" && time != "" && guests != "" && (guests >= 1 && guests <= 10) && occasion != "";
    }

    expect(allValid(testDate, testTime, testGuests, testOccasion)).toBe(false);
})