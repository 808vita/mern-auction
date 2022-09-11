import React, { useState, useEffect } from "react";
import { getDealerClosedBids } from "../resources/LoadData";
import DealerPendingBids from "../components/DealerPendingBids";
import DealerClosedBids from "../components/DealerClosedBids";

const DealerClosedBidsPage = () => {
	const [closedBids, setClosedBids] = useState(null);

	useEffect(() => {
		getDealerClosedBids(setClosedBids);
	}, []);

	return (
		<div className="container-fluid  mb-3 ">
			<h6 className="mb-3 text-center">Closed Bids</h6>
			{closedBids?.map((data) => (
				<DealerClosedBids key={data._id} data={data} />
			))}
		</div>
	);
};

export default DealerClosedBidsPage;
