import React, { useState } from "react";
import carPicture from "../resources/img/carImage.jpg";
import { auctionDeatails } from "../resources/LoadData";
import DealerSelectedOwnerSelection from "./DealerSelectedOwnerSelection";

const DealerClosedBids = ({ data }) => {
	const [clicked, setClicked] = useState(false);

	const [getDetails, setGetDetails] = useState(null);

	let completedBid;
	if (data?.status == "selected") {
		completedBid = true;
	} else if (data?.status !== "selected") {
		completedBid = false;
	}

	// /:auction_id/get-bids

	const handleClick = () => {
		setClicked(!clicked);

		const auction_id = data.auction_id;
		auctionDeatails(auction_id, setGetDetails);
	};
	return (
		<div className="container-fluid  mb-4 border border-primary outline-button">
			<div
				className="row  text-center pt-3  outline-button"
				role="button"
				onClick={handleClick}
			>
				<div className="col-sm-6 ">
					<div className="d-flex justify-content-center">
						<img
							className={`card-img-top text-center`}
							src={carPicture}
							alt="car"
							style={{ width: "18rem", height: "15rem" }}
						></img>
					</div>
				</div>
				<div className="col-sm-6 mt-3">
					<div className="d-flex justify-content-center ">
						<div
							className="card-body text-center"
							style={{ width: "18rem", height: "15rem", objectFit: "cover" }}
						>
							<p>Bid Price: {data.price}</p>
							<p>Added Bid : {data.createdAt}</p>

							<p>status: {data.status}</p>
							<span
								className={
									completedBid
										? clicked
											? `fa fa-arrow-down`
											: completedBid && `fa fa-arrow-right`
										: ""
								}
							>
								{completedBid && clicked ? `Info` : completedBid && `Deal Info`}
							</span>
						</div>
					</div>
				</div>
			</div>

			{completedBid && clicked && getDetails ? (
				<>
					<h6 className="text-center">Deal Details!</h6>
					<hr />

					<DealerSelectedOwnerSelection data={getDetails} />
				</>
			) : (
				completedBid &&
				clicked && (
					<>
						<h6 className="text-center">Loading Info </h6>
						<hr />
					</>
				)
			)}
		</div>
	);
};

export default DealerClosedBids;
