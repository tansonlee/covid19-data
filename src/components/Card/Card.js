import "./Card.css";

const Card = ({ data }) => {
	return (
		<>
			<div className="card-wrapper">
				<h3 className="card-title">{data.title}</h3>
				<p className="card-stat">{data.stat.toLocaleString()}</p>
			</div>
		</>
	);
};

export default Card;
