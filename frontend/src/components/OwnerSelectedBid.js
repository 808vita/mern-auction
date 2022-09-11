import React from "react";
import dealerPic from "../resources/img/catDealer.jpg";

const OwnerSelectedBid = ({ data }) => {
	return (
		<div className="row  text-center pt-3 ">
			<div className="col-sm-6 ">
				<div className="d-flex justify-content-center">
					<img
						className={`card-img-top text-center rounded`}
						src={dealerPic}
						alt="car"
						style={{ width: "18rem", height: "14rem", objectFit: "cover" }}
					></img>
				</div>
			</div>
			<div className="col-sm-6 mt-3">
				<div className="d-flex justify-content-center ">
					<div
						className="card-body text-start"
						style={{ width: "18rem", height: "14rem" }}
					>
						<p>Dealer Name : {data.name}</p>
						<p>Status : {data.status}</p>
						<p>Bid Price : {data.price}</p>
						<p>Bid Added: {data.createdAt}</p>
						<p>Account Type : Dealer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OwnerSelectedBid;
