import React from "react";

export const BigButton = ({ text, type = "button", color }) => {
	return (
		<button
			type={type}
			className={`btn rounded-button ${
				color === "green" ? "btn-primary" : "outline-button"
			}`}
		>
			{text}
		</button>
	);
};

export const LongButton = ({ text, type = "button", color }) => {
	return (
		<button
			type={type}
			className={`btn rounded-button ${
				color === "green" ? "btn-primary" : "outline-button-long"
			}`}
		>
			{text}
		</button>
	);
};
