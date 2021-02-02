import React from "react";
import "./App.css";
import { fetchCumulative, fetchChange } from "./api/api";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Dropdown from "./components/Dropdown/Dropdown";
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

	changeLocation = async newLocation => {
		this.setState(
			{ location: newLocation },
			async () => await this.fetchData()
		);
	};

	async componentDidMount() {
		await this.fetchData();
	}

	render() {
		const { todayData, dataSeries, location, mode } = this.state;

		if (this.state.data === {} || this.dataSeries === []) {
			return "Loading...";
		}

		return (
			<>
				<h1 className="title">COVID-19 Data Tracker</h1>
				<div className="controls-wrapper">
					<Dropdown onLocationChange={this.changeLocation} />
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
				<Cards props={{ todayData, dataSeries, mode }} />
				<Chart dataSeries={dataSeries} />
				<div className="information">
					<p>Made by Tanson Lee with React.js</p>
					<p className="smaller-text">
						Link to the code and more information about this project
						on GitHub here:{" "}
						<a
							className="code-link"
							href="https://github.com/tansonlee/covid19-data"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code
						</a>
					</p>
				</div>
			</>
		);
	}
}

export default App;
