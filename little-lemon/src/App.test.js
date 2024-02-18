/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import BookingForm from './components/MainComponents/BookingForm.js';
import { availableTimes, dispatchData } from './components/Main.js';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { fetchAPI, submitAPI } from './components/api.js';

function allValid(date, time, guests, occasion) {
    return date != "" && time != "" && guests != "" && (guests >= 1 && guests <= 10) && occasion != "";
}

test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    const headingElement = screen.getByText("Fill in the fields below");
    expect(headingElement).toBeInTheDocument();
})

test('Button is initially disabled until all inputs valid', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    const submitButton = screen.getByDisplayValue("Make Your Reservation");
    expect(submitButton).toHaveAttribute("disabled");
})

test("BookingForm should contain all labels for each input field", () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    const label1 = screen.getByText("Fill in the fields below");
    const label2 = screen.getByText("Fill in the fields below");
    const label3 = screen.getByText("Fill in the fields below");
    const label4 = screen.getByText("Fill in the fields below");
    expect(label1).toBeInTheDocument();
    expect(label2).toBeInTheDocument();
    expect(label3).toBeInTheDocument();
    expect(label4).toBeInTheDocument();
})

test("fetchAPI should return list of times for today's date", () => {
    let newDate = new Date();
    let thisYear = newDate.getFullYear();
    let thisMonth = newDate.getMonth()+1;
    let thisDay = newDate.getDate();
    let thisDate = thisYear + '-' + thisMonth + '-' + thisDay;
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    expect(fetchAPI(thisDate)).not.toBe(null);
})

test("fetchAPI should return empty for any dates other than the available ones", () => {
    let thisDate ='9999-12-31'
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    expect(fetchAPI(thisDate)).toBe(null);
})

test("submitAPI should return true if the booking is made, and is not yet reserved", () => {
    let newForm = ["2024-02-18", "17:00", "2", "engagement"];
    expect(submitAPI(newForm)).toBe(true);
})

test("submitAPI should return false if the booking is made, and said booking is already reserved for that date", () => {
    let newForm = ["2024-02-24", "17:00", "2", "engagement"];
    expect(submitAPI(newForm)).toBe(false);
})

test('allValid should return true if all inputs are valid', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    let testDate = "2024-2-14";
    let testTime = "18:00";
    let testGuests = 5;
    let testOccasion = "Engagement";

    expect(allValid(testDate, testTime, testGuests, testOccasion)).toBe(true);
})

test('allValid should return false if one of the inputs are invalid', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatchData={dispatchData}/>
        </MemoryRouter>
    )
    let testDate = "2024-2-14";
    let testTime = "18:00";
    let testGuests = -5;
    let testOccasion = "Engagement";

    expect(allValid(testDate, testTime, testGuests, testOccasion)).toBe(false);
})