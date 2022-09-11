import React, { useState, useEffect } from "react";
import { getOwnerPendingAuctions } from "../resources/LoadData";
import OwnerPendingAuctions from "../components/OwnerPendingAuctions";

const PendingAuctionsPage = () => {
	const [pendingAuctions, setPendingAuctions] = useState(null);

	useEffect(() => {
		getOwnerPendingAuctions(setPendingAuctions);
	}, []);

	return (
		<div className="container-fluid  mb-3 ">
			<h6 className="mb-3 text-center">Pending Auctions</h6>
			{pendingAuctions?.map((data) => (
				<OwnerPendingAuctions key={data._id} data={data} />
			))}
		</div>
	);
};

export default PendingAuctionsPage;
