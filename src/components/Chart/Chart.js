import "./Chart.css";
import { Line } from "react-chartjs-2";

const Chart = ({ dataSeries }) => {
	if (dataSeries === []) {
		return "Loading...";
	}

	const lineChart =
		dataSeries.length !== 0 ? (
			<Line
				data={{
					labels: dataSeries.map(({ date }) => date),
					datasets: [
						{
							data: dataSeries.map(data => data.cumulative_cases),
							label: "Cases",
							borderColor: "rgb(0, 0, 255)",
							backgroundColor: "rgba(0, 0, 255, 0.3)",
							fill: true,
						},
						{
							data: dataSeries.map(
								data => data.cumulative_recovered
							),
							label: "Recoveries",
							borderColor: "rgb(0, 255, 0)",
							backgroundColor: "rgba(0, 255, 0, 0.4)",
							fill: true,
						},
						{
							data: dataSeries.map(
								data => data.cumulative_deaths
							),
							label: "Deaths",
							borderColor: "rgb(255, 0, 0)",
							backgroundColor: "rgba(255, 0, 0, 0.5)",
							fill: true,
						},
					],
				}}
			/>
		) : (
			"Loading..."
		);

	return (
		<>
			<h2>Chart</h2>
			<div className="chart-wrapper">{lineChart}</div>
		</>
	);
};

export default Chart;
