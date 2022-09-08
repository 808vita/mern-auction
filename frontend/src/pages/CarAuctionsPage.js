import React, { useEffect, useState } from "react";
import CarAuctionDeatils from "../components/auctionComponents/CarAuctionDeatils";

const CarAuctionsPage = () => {
	const [carDetailsList, setCarDetailsList] = useState(null);

	useEffect(() => {
		const fetchCarDetailsList = async () => {
			const response = await fetch("/api/dealer-auctions");
			const json = await response.json();

			if (response.ok) {
				setCarDetailsList(json);
			}
		};

		fetchCarDetailsList();
	}, []);

	return (
		<div className="home">
			<div className="carDetailsList">
				{carDetailsList &&
					carDetailsList.map((carDetails) => (
						<CarAuctionDeatils
							key={carDetailsList._id}
							carDetails={carDetails}
						/>
					))}
			</div>
		</div>
	);
};

export default CarAuctionsPage;
