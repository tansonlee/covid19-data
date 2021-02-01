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
								},
							},
						],
						yAxes: [
							{
								ticks: {
									autoSkip: true,
									maxTicksLimit: 20,
									callback: (value, index, values) =>
										value.toLocaleString(),
								},
								scaleLabel: {
									display: true,
								},
							},
						],
					},
				}}
			/>
		) : (
			"Loading..."
		);

	return (
		<>
			<div className="chart-wrapper">{lineChart}</div>
		</>
	);
};

export default Chart;
