import axios from "axios";

const baseURL = "https://api.opencovid.ca/summary";
const startDate = "2020-06-01";

export const fetchCumulative = async location => {
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
		const parsedDataSeries = dataSeries.data.summary.map(data => {
			return {
				cases: data.cumulative_cases,
				recovered: data.cumulative_recovered,
				deaths: data.cumulative_deaths,
				date: data.date,
			};
		});

		return { todayData: parsedTodayData, dataSeries: parsedDataSeries };
	} catch (error) {
		return error;
	}
};

export const fetchChange = async location => {
	try {
		const todayData = await axios.get(`${baseURL}?loc=${location}`);
		const parsedTodayData = {
			cases: todayData.data.summary[0].cases,
			recoveries: todayData.data.summary[0].recovered,
			deaths: todayData.data.summary[0].deaths,
			date: todayData.data.summary[0].date,
		};

		const dataSeries = await axios.get(
			`${baseURL}?loc=${location}&after=${startDate}`
		);
		const parsedDataSeries = dataSeries.data.summary.map(data => {
			return {
				cases: data.cases,
				recovered: data.recovered,
				deaths: data.deaths,
				date: data.date,
			};
		});

		console.log(dataSeries);

		return { todayData: parsedTodayData, dataSeries: parsedDataSeries };
	} catch (error) {
		return error;
	}
};
