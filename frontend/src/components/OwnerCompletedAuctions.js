import React, { useState } from "react";
import carPicture from "../resources/img/carImage.jpg";
import { getOwnerBidsOfAcution } from "../resources/LoadData";
import OwnerListBid from "./OwnerListBid";
import OwnerSelectedBid from "./OwnerSelectedBid";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const OwnerCompletedAuctions = ({ data }) => {
	const [clicked, setClicked] = useState(false);

	const [checkBids, setCheckBids] = useState([]);

	// /:auction_id/get-bids

	const handleClick = () => {
		setClicked(!clicked);

		const auction_id = data._id;
		getOwnerBidsOfAcution(auction_id, setCheckBids);
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
							<p>car : {data.car}</p>
							<p>km : {data.km}</p>
							<p>year : {data.year}</p>
							<p>status: {data.status}</p>

							<p>
								completed :{" "}
								{formatDistanceToNow(new Date(data.updatedAt), {
									addSuffix: true,
								})}
							</p>
							<span
								className={clicked ? `fa fa-arrow-down` : `fa fa-arrow-right`}
							>
								{clicked ? `Info` : `Dealer Info`}
							</span>
						</div>
					</div>
				</div>
			</div>

			{clicked && checkBids.length > 0 ? (
				<>
					<h6 className="text-center">Deal Details!</h6>
					<hr />
					{checkBids?.map((data) => (
						<OwnerSelectedBid key={data._id} data={data} />
					))}
				</>
			) : (
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

export default OwnerCompletedAuctions;
