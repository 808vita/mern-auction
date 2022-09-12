import React, { useState } from "react";
import carPicture from "../resources/img/carImage.jpg";
import { checkBid } from "../resources/LoadData";

import CreateBid from "./CreateBidForm";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const DealerLiveAuctions = ({ data }) => {
	const [clicked, setClicked] = useState(false);
	const [bidExisits, setBidExisits] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
		const bidId = data._id;
		checkBid(bidId, setBidExisits);
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
				<div className="col-sm-6 mt-3 ">
					<div className="d-flex justify-content-center ">
						<div
							className="card-body text-center "
							style={{ width: "18rem", height: "15rem" }}
						>
							<p>car : {data.car}</p>
							<p>km : {data.km}</p>
							<p>year : {data.year}</p>
							<p>status: {data.status}</p>
							<p>
								Created :{" "}
								{formatDistanceToNow(new Date(data.createdAt), {
									addSuffix: true,
								})}
							</p>
							<span
								className={clicked ? `fa fa-arrow-down` : `fa fa-arrow-right`}
							>
								Create Bid
							</span>
						</div>
					</div>
				</div>
			</div>

			{clicked && bidExisits ? (
				<h6 className="text-center">Bid exists</h6>
			) : (
				clicked && <CreateBid data={data} />
			)}
		</div>
	);
};

export default DealerLiveAuctions;
