import React from "react";
import "./App.css";
import { fetchCumulative, fetchChange } from "./api/api";
import Cards from "./components/Card/Cards";
import Chart from "./components/Chart/Chart";
import { getProvince } from "./functions";

class App extends React.Component {
	state = {
		todayData: {},
		dataSeries: [],
		mode: "cumulative", // change or cumulative
		location: "canada",
	};

	fetchData = async () => {
		let fetchedData;
		if (this.state.mode === "change") {
			fetchedData = await fetchChange(this.state.location);
		} else {
			fetchedData = await fetchCumulative(this.state.location);
		}
		this.setState({
			todayData: fetchedData.todayData,
			dataSeries: fetchedData.dataSeries,
		});
	};

	async componentDidMount() {
		await this.fetchData();
	}

	render() {
		const { todayData, dataSeries, location } = this.state;

		if (this.state.data === {} || this.dataSeries === []) {
			return "Loading...";
		}

		return (
			<>
				<h1 className="title">COVID-19 Data Tracker</h1>
				<div className="controls-wrapper">
					<p className="temp">dropdown here</p>
					<div className="button-wrapper">
						<button
							className={
								this.state.mode === "change"
									? "selected-btn"
									: "mode-btn"
							}
							onClick={async () => {
								this.setState(
									{ mode: "change" },
									async () => await this.fetchData()
								);
							}}
						>
							New/Daily
						</button>
						<button
							className={
								this.state.mode === "cumulative"
									? "selected-btn"
									: "mode-btn"
							}
							onClick={async () => {
								this.setState(
									{ mode: "cumulative" },
									async () => await this.fetchData()
								);
							}}
						>
							Total/Cumulative
						</button>
					</div>
				</div>
				<h2 className="location">{getProvince(location)}</h2>
				<Cards {...todayData} />
				<Chart dataSeries={dataSeries} />
			</>
		);
	}
}

export default App;
