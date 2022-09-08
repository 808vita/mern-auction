import React, { useState } from "react";

const CreateBidForm = () => {
	const [price, setPrice] = useState("");
	const [auction_id, setAuction_id] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const bid = { price, auction_id };

		const response = await fetch("/api/dealer-auctions/bids", {
			method: "POST",
			body: JSON.stringify(bid),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
		}

		if (response.ok) {
			setPrice("");
			setAuction_id("");

			setError(null);
			console.log("new auction added", json);
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a New bid</h3>
			<label>price :</label>

			<input
				type="number"
				onChange={(e) => setPrice(e.target.value)}
				value={price}
			/>

			<label>auction_id :</label>

			<input
				type="text"
				onChange={(e) => setAuction_id(e.target.value)}
				value={auction_id}
			/>

			<button>Add bid</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default CreateBidForm;
