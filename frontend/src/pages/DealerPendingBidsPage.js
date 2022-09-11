import React, { useState, useEffect } from "react";
import { getDealerPendingBids } from "../resources/LoadData";
import DealerPendingBids from "../components/DealerPendingBids";

const DealerPendingBidsPage = () => {
	const [pendingAuctions, setPendingAuctions] = useState(null);

	useEffect(() => {
		getDealerPendingBids(setPendingAuctions);
	}, []);

	return (
		<div className="container-fluid  mb-3 ">
			<h6 className="mb-3 text-center">Pending Bids</h6>
			{pendingAuctions?.length > 0 ? (
				pendingAuctions?.map((data) => (
					<DealerPendingBids key={data._id} data={data} />
				))
			) : (
				<h6 className="text-center">No Bids. Create Bids first!</h6>
			)}
		</div>
	);
};

export default DealerPendingBidsPage;
