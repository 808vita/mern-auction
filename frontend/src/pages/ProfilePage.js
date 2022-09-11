import React, { useEffect, useState } from "react";

import ownerPic from "../resources/img/catCar.jpg";
import dealerPic from "../resources/img/catDealer.jpg";

const ProfilePage = () => {
	const [profilePic, setProfilePic] = useState(null);
	const userInfo = JSON.parse(localStorage.getItem("user"));
	const [accountType, setAccountType] = useState("");
	useEffect(() => {
		if (!userInfo) {
			return;
		} else if (userInfo.isDealer) {
			setAccountType("Dealer");
			setProfilePic(dealerPic);
		} else if (!userInfo.isDealer) {
			setAccountType("Owner");
			setProfilePic(ownerPic);
		}
	}, [userInfo]);

	return (
		<div className="col-sm-12 ">
			<div className="row d-flex justify-content-center">
				<div
					className="card outline-button"
					role="button"
					style={{ width: "20rem" }}
				>
					<img
						className={`card-img-top text-center h1 pt-5`}
						src={profilePic}
						alt="profile"
					></img>
					<div className="card-body text-start">
						<p>Name : {userInfo?.name} </p>
						<p className="card-text">Account Type : {accountType}</p>
						<p className="card-text">Registered Email : {userInfo?.email}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
