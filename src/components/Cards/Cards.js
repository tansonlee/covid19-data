import "./Cards.css";
import { formatDate } from "../../functions";
import SmallChart from "../SmallChart/SmallChart";

const Cards = ({ props: { todayData, dataSeries, mode } }) => {
	if (todayData === {} || dataSeries.length === 0) {
		return "Loading...";
	}

	const casesChart = (
		<SmallChart
			props={{
				dataSeries: dataSeries.map(({ cases }) => cases),
				borderCol: "rgba(0, 0, 255, 1)",
				backgroundCol: "rgba(0, 0, 255, 0.5)",
			}}
		/>
	);

	const recoveriesChart = (
		<SmallChart
			props={{
				dataSeries: dataSeries.map(({ recovered }) => recovered),
				borderCol: "rgba(0, 255, 0, 1)",
				backgroundCol: "rgba(0, 255, 0, 0.5)",
			}}
		/>
	);

	const deathsChart = (
		<SmallChart
			props={{
				dataSeries: dataSeries.map(({ deaths }) => deaths),
				borderCol: "rgba(255, 0, 0, 1)",
				backgroundCol: "rgba(255, 0, 0, 0.5)",
			}}
		/>
	);

	return dataSeries.length !== 0 ? (
		<>
			<p className="latest-date">
				Latest data from: {formatDate(todayData.date)}
			</p>
			<div className="cards-wrapper">
				<div className="card-wrapper cases-card">
					<h3 className="card-title">
						{mode === "cumulative" ? "Total Cases" : "Cases Today"}
					</h3>
					<p className="card-stat">
						{todayData.cases.toLocaleString()}
					</p>
					{casesChart}
					<p className="small-chart-description">
						Interpolated to see trend
					</p>
				</div>
				<div className="card-wrapper recoveries-card">
					<h3 className="card-title">
						{mode === "cumulative"
							? "Total Recoveries"
							: "Recoveries Today"}
					</h3>
					<p className="card-stat">
						{todayData.recoveries.toLocaleString()}
					</p>
					{recoveriesChart}
					<p className="small-chart-description">
						Interpolated to see trend
					</p>
				</div>
				<div className="card-wrapper deaths-card">
					<h3 className="card-title">
						{mode === "cumulative"
							? "Total Deaths"
							: "Deaths Today"}
					</h3>
					<p className="card-stat">
						{todayData.deaths.toLocaleString()}
					</p>
					{deathsChart}
					<p className="small-chart-description">
						Interpolated to see trend
					</p>
				</div>
			</div>
		</>
	) : (
		"Loading..."
	);
};

export default Cards;
