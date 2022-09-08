import React, { useState } from "react";

const CreateAuctionForm = () => {
	const [car, setCar] = useState("");
	const [km, setKm] = useState("");
	const [year, setYear] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const auction = { car, km, year };

		const response = await fetch("/api/owner-auctions", {
			method: "POST",
			body: JSON.stringify(auction),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
		}

		if (response.ok) {
			setCar("");
			setKm("");
			setYear("");
			setError(null);
			console.log("new auction added", json);
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a New auction</h3>
			<label>car :</label>

			<input type="text" onChange={(e) => setCar(e.target.value)} value={car} />

			<label>km Driven:</label>

			<input type="number" onChange={(e) => setKm(e.target.value)} value={km} />

			<label>year: </label>

			<input
				type="text"
				onChange={(e) => setYear(e.target.value)}
				value={year}
			/>

			<button>Create auction</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default CreateAuctionForm;
