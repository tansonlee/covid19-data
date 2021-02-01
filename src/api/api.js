import axios from "axios";

const baseURL = "https://api.opencovid.ca/summary";
const startDate = "2021-01-01";

export const fetchCurrent = async location => {
	try {
		const todayData = await axios.get(`${baseURL}?loc=${location}`);
		const parsedTodayData = {
			cases: todayData.data.summary[0].cumulative_cases,
			recoveries: todayData.data.summary[0].cumulative_recovered,
			deaths: todayData.data.summary[0].cumulative_deaths,
			date: todayData.data.summary[0].date,
		};

		const dataSeries = await axios.get(
			`${baseURL}?loc=${location}&after=${startDate}`
		);
		const parsedDataSeries = dataSeries.data.summary;

		return { todayData: parsedTodayData, dataSeries: parsedDataSeries };
	} catch (error) {
		return error;
	}
};
