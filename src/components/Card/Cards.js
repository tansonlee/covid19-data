import "./Cards.css";
import Card from "./Card";

const Cards = ({ cases, recoveries, deaths, date }) => {
	const cardData1 = { title: "Cases", stat: cases };
	const cardData2 = { title: "Recoveries", stat: recoveries };
	const cardData3 = { title: "Deaths", stat: deaths };
	return (
		<>
			<p>Latest data from: {date}</p>
			<div className="cards-wrapper">
				<Card data={cardData1} />
				<Card data={cardData2} />
				<Card data={cardData3} />
			</div>
		</>
	);
};

export default Cards;
