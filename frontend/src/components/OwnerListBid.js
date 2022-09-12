import React from "react";
import dealerPic from "../resources/img/catDealer.jpg";
import { useNavigate } from "react-router-dom";
import { acceptBid } from "../resources/LoadData";
import { useGlobalContext } from "../hooks/useGlobalContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const OwnerListBid = ({ data }) => {
	const navigate = useNavigate();
	const { setNotification } = useGlobalContext();
	const handleClick = async () => {
		console.log("oof handle click");
		console.log(data._id);
		const bidId = data._id;
		await acceptBid(bidId, navigate, setNotification);
	};

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
						className="card-body text-center"
						style={{ width: "18rem", height: "14rem" }}
					>
						<p>Bid Price : {data.price}</p>
						<p>
							Bid Added:{" "}
							{formatDistanceToNow(new Date(data.createdAt), {
								addSuffix: true,
							})}
						</p>
						<p>Account Type : Dealer</p>

						<button
							className="btn rounded-button outline-button-long"
							onClick={handleClick}
						>
							Accept Bid
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OwnerListBid;
