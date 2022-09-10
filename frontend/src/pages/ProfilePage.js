import React, { useEffect, useState } from "react";

import ownerPic from "../resources/img/catCar.jpg";
import dealerPic from "../resources/img/catDealer.jpg";

const ProfilePage = () => {
	const [profilePic, setProfilePic] = useState(null);

	useEffect(() => {
		setProfilePic(dealerPic);
	}, []);

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
					></img>
					<div className="card-body text-center">
						<h6>Name : </h6>
						<p className="card-text">Account Type:</p>
						<p className="card-text">Registered Email:</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
