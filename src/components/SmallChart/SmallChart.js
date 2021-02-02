import "./SmallChart.css";
import { Line } from "react-chartjs-2";

const smoothness = 8;

const SmallChart = ({ props: { dataSeries, borderCol, backgroundCol } }) => {
	if (dataSeries === []) {
		return "Loading...";
	}

	// smooth the data
	const lerpeddata = dataSeries.map((data, i) => {
		if (i === 0 || i === dataSeries.length - 1) {
			return data;
		} else {
			const average = (dataSeries[i - 1] + dataSeries[i + 1]) / 2;
			const point = Math.round(
				(smoothness * average + data) / (smoothness + 1)
			);
			return point;
		}
	});

	// only use every other value
	const lerpedcases = [];
	lerpeddata.forEach((data, i) => {
		if (i % 2 === 0) {
			lerpedcases.push(data);
		}
	});

	const lineChart =
		dataSeries.length !== 0 ? (
			<Line
				data={{
					labels: lerpedcases.map(data => ""),
					datasets: [
						{
							data: lerpedcases,
							label: "smoothened data",
							borderColor: borderCol,
							backgroundColor: backgroundCol,
							fill: true,
							pointRadius: 1,
							pointHitRadius: 10,
						},
					],
				}}
				options={{
					responsive: true,
					tooltips: { enabled: false },
					hover: { mode: null },
					scaleShowLabels: false,
					scales: {
						xAxes: [
							{
								display: false,
							},
						],
						yAxes: [
							{
								display: false,
							},
						],
					},
					legend: {
						display: false,
					},
				}}
			/>
		) : (
			"Loading..."
		);

	return (
		<>
			<div className="small-chart-wrapper">{lineChart}</div>
		</>
	);
};

export default SmallChart;
