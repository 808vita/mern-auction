import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LongButton } from "./ButtonComponents";
import { useGlobalContext } from "../hooks/useGlobalContext";

const CreateAuctionForm = () => {
	const [car, setCar] = useState("");
	const [km, setKm] = useState("");
	const [year, setYear] = useState("");

	const { setAuth, setUserInfo } = useGlobalContext();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// await signupUser(
		// 	email,
		// 	password,
		// 	name,
		// 	accountType,
		// 	setAuth,
		// 	setUserInfo,
		// 	navigate
		// );
	};

	return (
		<>
			<div className="container-fluid center-form">
				<h6 className="mb-3 text-center">Create Auction</h6>
				<form className="signup" onSubmit={handleSubmit}>
					<div className="row g-3">
						<div className="col-sm-12">
							<input
								type="text"
								className="form-control rounded-edges"
								id="car"
								placeholder="Car Make & Model"
								required
								onChange={(e) => setCar(e.target.value)}
								value={car}
							></input>
							<div className="invalid-feedback">
								Please enter car Make & Model.
							</div>
						</div>

						<div className="col-sm-12">
							<input
								type="text"
								className="form-control rounded-edges"
								id="year"
								placeholder="Year Of Purchase"
								onChange={(e) => setYear(e.target.value)}
								value={year}
								required
							></input>
							<div className="invalid-feedback">Valid year required</div>
						</div>
						<div className="col-sm-12">
							<input
								type="number"
								className="form-control rounded-edges"
								id="km"
								placeholder="Kms Driven"
								onChange={(e) => setKm(e.target.value)}
								value={km}
								required
							></input>
						</div>

						<LongButton text={"Add Auction"} type={"submit"} color={"green"} />
					</div>
				</form>
			</div>
		</>
	);
};

export default CreateAuctionForm;
