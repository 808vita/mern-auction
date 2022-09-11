import React, { useState, useEffect } from "react";
import { getOwnerCompletedAuctions } from "../resources/LoadData";
import OwnerCompletedAuctions from "../components/OwnerCompletedAuctions";

const OwnerCompletedAuctionsPage = () => {
	const [completedAuctions, setCompletedAuctions] = useState(null);

	useEffect(() => {
		getOwnerCompletedAuctions(setCompletedAuctions);
	}, []);

	return (
		<div className="container-fluid  mb-3 ">
			<h6 className="mb-3 text-center">Completed Auctions</h6>
			{completedAuctions?.map((data) => (
				<OwnerCompletedAuctions key={data._id} data={data} />
			))}
		</div>
	);
};

export default OwnerCompletedAuctionsPage;
