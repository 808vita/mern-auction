import React from "react";

const OwnerPendingAuctions = ({ data }) => {
	return (
		<div>
			<p>car : {data.car}</p>
			<p>km : {data.km}</p>
			<p>year : {data.year}</p>
			<p>status: {data.status}</p>
		</div>
	);
};

export default OwnerPendingAuctions;
