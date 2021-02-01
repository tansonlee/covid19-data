import "./Card.css";

const Card = ({ data }) => {
	return (
		<>
			<div className="card-wrapper">
				<h3>{data.title}</h3>
				<p>{data.stat}</p>
			</div>
		</>
	);
};

export default Card;
