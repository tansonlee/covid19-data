import "./Cards.css";
import Card from "./Card";
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
				<Card data={cardData1} />
				<Card data={cardData2} />
				<Card data={cardData3} />
			</div>
		</>
	);
};

export default Cards;
