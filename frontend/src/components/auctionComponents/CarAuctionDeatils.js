import React from "react";

const CarAuctionDeatils = ({ carDetails }) => {
	return (
		<div className="car-details">
			<h4>Car :{carDetails.car}</h4>
			<p>
				<strong>Kms Driven:</strong>
				{carDetails.km}
			</p>
			<p>
				<strong>year:</strong>
				{carDetails.year}
			</p>
			<p>{carDetails.createdAt}</p>
		</div>
	);
};

export default CarAuctionDeatils;
