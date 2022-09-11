import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LongButton } from "./ButtonComponents";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { createBid } from "../resources/LoadData";
const CreateBid = ({ data }) => {
	const [price, setPrice] = useState("");

	const { setAuth, setUserInfo } = useGlobalContext();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const auction_id = data._id;

		await createBid(auction_id, price, navigate);
	};

	return (
		<>
			<div className="container-fluid center-form mb-3 ">
				<h6 className="mb-3 text-center">Add Bid</h6>
				<form className="signup" onSubmit={handleSubmit}>
					<div className="row g-3">
						<div className="col-sm-12">
							<input
								type="number"
								className="form-control rounded-edges"
								id="price"
								placeholder="Bid Price"
								onChange={(e) => setPrice(e.target.value)}
								value={price}
								required
							></input>
						</div>

						<LongButton text={"Add Bid"} type={"submit"} color={"outline"} />
					</div>
				</form>
			</div>
		</>
	);
};

export default CreateBid;
