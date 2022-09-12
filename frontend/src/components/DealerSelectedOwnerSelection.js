import React from "react";
import ownerPic from "../resources/img/catCar.jpg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const DealerSelectedOwnerSelection = ({ data }) => {
	return (
		<div className="row  text-center pt-3 ">
			<div className="col-sm-6 ">
				<div className="d-flex justify-content-center">
					<img
						className={`card-img-top text-center rounded`}
						src={ownerPic}
						alt="car"
						style={{ width: "18rem", height: "14rem", objectFit: "cover" }}
					></img>
				</div>
			</div>
			<div className="col-sm-6 mt-3">
				<div className="d-flex justify-content-center ">
					<div
						className="card-body text-center"
						style={{ width: "18rem", height: "14rem" }}
					>
						<p>Status : {data.status}</p>
						<p>Car Make : {data.car}</p>
						<p>Year: {data.year}</p>
						<p>Account Type : Owner</p>
						<p>
							Completed :{" "}
							{formatDistanceToNow(new Date(data.updatedAt), {
								addSuffix: true,
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DealerSelectedOwnerSelection;
