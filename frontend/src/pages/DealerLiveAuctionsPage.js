import React, { useState, useEffect } from "react";
import { getDealerLiveAuctions } from "../resources/LoadData";
import DealerLiveAuctions from "../components/DealerLiveAuctions";

const DealerLiveAuctionsPage = () => {
	const [pendingAuctions, setPendingAuctions] = useState(null);

	useEffect(() => {
		getDealerLiveAuctions(setPendingAuctions);
	}, []);

	return (
		<div className="container-fluid  mb-3 ">
			<h6 className="mb-3 text-center">Live Auctions</h6>
			{pendingAuctions?.map((data) => (
				<DealerLiveAuctions key={data._id} data={data} />
			))}
		</div>
	);
};

export default DealerLiveAuctionsPage;
