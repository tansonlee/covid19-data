import React from "react";
import "./App.css";
import { fetchCurrent } from "./api/api";
import Card from "./components/Card/Cards";
import Chart from "./components/Chart/Chart";

class App extends React.Component {
	state = {
		todayData: {},
		dataSeries: [],
		country: "canada",
	};

	async componentDidMount() {
		const fetchedData = await fetchCurrent(this.state.country);
		this.setState({
			todayData: fetchedData.todayData,
			dataSeries: fetchedData.dataSeries,
		});
	}

	render() {
		const { todayData, dataSeries, country } = this.state;

		if (this.state.data === {} || this.dataSeries === []) {
			return "Loading...";
		}

		return (
			<>
				<h1>Covid-19 Data Tracker</h1>
				<h2>{country}</h2>
				<Card {...todayData} />
				<Chart dataSeries={dataSeries} />
			</>
		);
	}
}

export default App;
