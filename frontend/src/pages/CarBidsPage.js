import React, { useEffect, useState } from "react";
import CarBidDetails from "../components/bidComponents/CarBidDetails";

const CarBidsPage = () => {
	const [carBidsList, setCarBidsList] = useState(null);

	useEffect(() => {
		const fetchCarBidsList = async () => {
			// need from owner routes
			const response = await fetch("/api/dealer-auctions/bids");
			const json = await response.json();

			if (response.ok) {
				setCarBidsList(json);
			}
		};

		fetchCarBidsList();
	}, []);

	return (
		<div className="home">
			<div className="carBidsList">
				{carBidsList &&
					carBidsList.map((carBidDetails) => (
						<CarBidDetails
							key={carBidDetails._id}
							carBidDetails={carBidDetails}
						/>
					))}
			</div>
		</div>
	);
};

export default CarBidsPage;
