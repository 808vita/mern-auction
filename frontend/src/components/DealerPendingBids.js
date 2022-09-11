import React from "react";
import carPicture from "../resources/img/carImage.jpg";

const DealerPendingBids = ({ data }) => {
	return (
		<div className="container-fluid  mb-4 border border-primary outline-button">
			<div className="row  text-center pt-3  outline-button" role="button">
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
							style={{ width: "18rem", height: "15rem" }}
						>
							<p>Bid Price : {data.price}</p>

							<span>
								status: <span className="">{data.status}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DealerPendingBids;
