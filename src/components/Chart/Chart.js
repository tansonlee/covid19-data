import "./Chart.css";
import { Line } from "react-chartjs-2";
import { formatDate } from "../../functions";

const Chart = ({ dataSeries }) => {
	if (dataSeries === []) {
		return "Loading...";
	}
	const lineChart =
		dataSeries.length !== 0 ? (
			<Line
				className="chart"
				data={{
					labels: dataSeries.map(({ date }) => formatDate(date)),
					datasets: [
						{
							data: dataSeries.map(data => data.cases),
							label: "Cases",
							borderColor: "rgb(0, 0, 255)",
							backgroundColor: "rgba(0, 0, 255, 0.3)",
							fill: true,
							pointRadius: 1,
							pointHitRadius: 10,
						},
						{
							data: dataSeries.map(data => data.recovered),
							label: "Recoveries",
							borderColor: "rgb(0, 255, 0)",
							backgroundColor: "rgba(0, 255, 0, 0.4)",
							fill: true,
							pointRadius: 1,
							pointHitRadius: 10,
						},
						{
							data: dataSeries.map(data => data.deaths),
							label: "Deaths",
							borderColor: "rgb(255, 0, 0)",
							backgroundColor: "rgba(255, 0, 0, 0.5)",
							fill: true,
							pointRadius: 1,
							pointHitRadius: 10,
						},
					],
				}}
				options={{
					responsive: true,

					scales: {
						xAxes: [
							{
								ticks: {
									autoSkip: true,
									maxTicksLimit: 20,
									fontColor: "rgba(255, 255, 255, 0.7)",
								},
								gridLines: {
									zeroLineColor: "rgba(255, 255, 255, 0.7)",
									color: "rgba(255, 255, 255, 0.2)",
								},
							},
						],
						yAxes: [
							{
								ticks: {
									autoSkip: true,
									maxTicksLimit: 20,
									fontColor: "rgba(255, 255, 255, 0.7)",
									callback: (value, index, values) =>
										value.toLocaleString(),
								},
								scaleLabel: {
									display: true,
								},
								gridLines: {
									zeroLineColor: "rgba(255, 255, 255, 0.7)",
									color: "rgba(255, 255, 255, 0.2)",
								},
							},
						],
					},
					legend: {
						labels: {
							filter: function (item, chart) {
								// Logic to remove a particular legend item goes here
								return !item.text.includes("lerped");
							},
							fontColor: "rgba(255, 255, 255, 0.9)",
							fontSize: 16,
						},
					},
				}}
			/>
		) : (
			"Loading..."
		);

	return (
		<>
			<div className="chart-wrapper">
				<h3 className="chart-title">
					COVID-19 Data from August 1, 2020 to Present
				</h3>
				<p>Click the legend below to hide/unhide data</p>
				{lineChart}
			</div>
		</>
	);
};

export default Chart;
