// Feel free to modify the date and times list if needed.
let time_date_slots = {
	'2024-2-13': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-14': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-15': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-16': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-17': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-18': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-19': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-20': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-21': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-22': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-23': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-24': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-25': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-26': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-27': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-28': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-29': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}]
}

// Also feel free to modify the reserved slots below.
const reserved_slots = {
	'2024-2-19': [{time: '17:00'}, {time: '18:00'}, {time: '19:00'}, {time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-24': [{time: '20:00'}, {time: '21:00'}, {time: '22:00'}],
	'2024-2-29': [{time: '17:00'}, {time: '18:00'}]
}

function fetchAPI(date) {
	// For the date parameter, check to see if there is any available time slots for that date.
	if (time_date_slots[date] == null) {
		return null;
	}
	return time_date_slots[date];
}

function submitAPI(formData) {
	// Check to see if there are any time slots already reserved.
	// Get the time and date for the reservation.
	let thisDate = formData[0];
	let thisTime = formData[1];

	// If there isn't any reserved dates, then simply return success.
	if (reserved_slots[thisDate] === undefined) {
		return true;
	}
	else {
		// Run a for loop to check if any booking time slots are already reserved for the selected date.
		// If there is, then return an unsuccessful response that the booking is already reserved.
		// Otherwise, return a successful response.
		for (var i = 0; i < reserved_slots[thisDate].length; i++) {
			if (thisTime === reserved_slots[thisDate][i].time) {
				return false;
			}
		}
		return true;
	}
}

export {fetchAPI, submitAPI};