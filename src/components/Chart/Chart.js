import "./Chart.css";
import { Line } from "react-chartjs-2";
import { formatDate } from "../../functions";

const Chart = ({ dataSeries }) => {
	if (dataSeries === []) {
		return "Loading...";
	}

	const numDataPoints = dataSeries.length;

	const dates = dataSeries.map(({ date }, i) =>
		i % Math.ceil(numDataPoints / 120) === 0 ? formatDate(date) : ""
	);

	const lineChart =
		dataSeries.length !== 0 ? (
			<Line
				data={{
					labels: dates,
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
