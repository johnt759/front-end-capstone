// Feel free to modify the date and times list if needed.
let time_date_slots = {
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

// Create an array of objects representing booking slots already reserved.
// Also feel free to modify the reserved slots below.
const reserved_slots = [
	{
		date: '2024-02-24',
		time: '17:00'
	},
	{
		date: '2024-02-25',
		time: '18:00'
	},
	{
		date: '2024-02-26',
		time: '19:00'
	},
	{
		date: '2024-02-27',
		time: '20:00'
	},
	{
		date: '2024-02-28',
		time: '21:00'
	},
	{
		date: '2024-02-29',
		time: '22:00'
	}
]

function fetchAPI(date) {
	// For the date parameter, check to see if there is any available time slots for that date.
	if (time_date_slots[date] == undefined) {
		return null;
	}
	return time_date_slots[date];
}

function submitAPI(formData) {
	// Check to see if there are any time slots already reserved.
	// Get the time and date for the reservation.
	let thisDate = formData[0];
	let thisTime = formData[1];

	// Use a for-of loop to search through the reserved booking slots.
	// If there is already a booking slot, then return false. Else, return true.
	for (var slot of reserved_slots) {
		if (slot.date == thisDate && slot.time == thisTime) {
			return false;
		}
	}
	return true;
}

export {fetchAPI, submitAPI};