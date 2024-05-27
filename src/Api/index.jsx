// Search Hotels
export const SearchHotel = async() =>{
	const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=%3CREQUIRED%3E&departure_date=%3CREQUIRED%3E&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd853ff50e3msh41e27f8e1467c00p1bda1cjsnecec912de04e',
			'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}


//By location/destination
export const SearchLocation = async() =>{
	const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=man';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd853ff50e3msh41e27f8e1467c00p1bda1cjsnecec912de04e',
			'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

//hotel details
const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=191605&arrival_date=%3CREQUIRED%3E&departure_date=%3CREQUIRED%3E&adults=1&children_age=1%2C17&room_qty=3&languagecode=en-us';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd853ff50e3msh41e27f8e1467c00p1bda1cjsnecec912de04e',
		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

//get flights
export const SearchFlights = async() =>{
	const url = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=%3CREQUIRED%3E&pageNo=1&adults=1&children=0%2C17&currency_code=AED';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd853ff50e3msh41e27f8e1467c00p1bda1cjsnecec912de04e',
			'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

//flight details
export const getFlightDetails = async() =>{
	const url = 'https://booking-com15.p.rapidapi.com/api/v1/flights/getFlightDetails?token=%3CREQUIRED%3E&currency_code=AED';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd853ff50e3msh41e27f8e1467c00p1bda1cjsnecec912de04e',
			'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}