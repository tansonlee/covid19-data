export const getProvince = code => {
	const provinces = {
		canada: "Canada",
		AB: "Alberta",
		BC: "British Columbia",
		MB: "Manitoba",
		NB: "New Brunswick",
		NL: "Newfoundland and Labrador",
		NT: "Northwest Territories",
		NS: "Nova Scotia",
		NU: "Nunavut",
		ON: "Ontario",
		nd: "Prince Edward Island",
		QC: "Quebec",
		SK: "Saskatchewan",
		YT: "Yukon",
	};

	return provinces[code];
};

export const formatDate = date => {
	const months = {
		"01": "January",
		"02": "February",
		"03": "March",
		"04": "April",
		"05": "May",
		"06": "June",
		"07": "July",
		"08": "August",
		"09": "September",
		10: "October",
		11: "November",
		12: "December",
	};

	const dateComponents = date.split("-");
	let dateString = "";
	dateString += months[dateComponents[1]];
	dateString += " ";
	dateString += dateComponents[0];
	dateString += ", ";
	dateString += dateComponents[2];
	return dateString;
};
