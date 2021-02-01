import "./Cards.css";
import { formatDate } from "../../functions";

const Cards = ({ cases, recoveries, deaths, date }) => {
	const cardData1 = { title: "Cases", stat: cases };
	const cardData2 = { title: "Recoveries", stat: recoveries };
	const cardData3 = { title: "Deaths", stat: deaths };

	if (!date) {
		return "Loading...";
	}

	return (
		<>
			<p className="latest-date">Latest data from: {formatDate(date)}</p>
			<div className="cards-wrapper">
				<div className="card-wrapper cases-card">
					<h3 className="card-title">Cases</h3>
					<p className="card-stat">{cases.toLocaleString()}</p>
				</div>
				<div className="card-wrapper recoveries-card">
					<h3 className="card-title">Recoveries</h3>
					<p className="card-stat">{recoveries.toLocaleString()}</p>
				</div>
				<div className="card-wrapper deaths-card">
					<h3 className="card-title">Deaths</h3>
					<p className="card-stat">{deaths.toLocaleString()}</p>
				</div>
				{/* <Card className="cases-card" data={cardData1} />
				<Card className="recoveries-card" data={cardData2} />
				<Card className="deaths-card" data={cardData3} /> */}
			</div>
		</>
	);
};

export default Cards;
