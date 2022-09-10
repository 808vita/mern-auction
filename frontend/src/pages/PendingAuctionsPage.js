import React, { useState, useEffect } from "react";
import { getOwnerPendingAuctions } from "../resources/LoadData";
import OwnerPendingAuctions from "../components/OwnerPendingAuctions";

const PendingAuctionsPage = () => {
	const [pendingAuctions, setPendingAuctions] = useState(null);

	useEffect(() => {
		getOwnerPendingAuctions(setPendingAuctions);
	}, []);

	return (
		<div>
			{pendingAuctions?.map((data) => (
				<OwnerPendingAuctions key={data._id} data={data} />
			))}
		</div>
	);
};

export default PendingAuctionsPage;
