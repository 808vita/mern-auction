import React from "react";

const CarBidDetails = ({ carBidDetails }) => {
	return (
		<div className="bid-details">
			<h4>Bid Price :{carBidDetails.price}</h4>
			<p>
				<strong>bidder id:</strong>
				need to add to model
			</p>
			<p>
				<strong>auction_id:</strong>
				{carBidDetails.auction_id}
			</p>
			<p>{carBidDetails.createdAt}</p>
		</div>
	);
};

export default CarBidDetails;
