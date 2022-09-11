import React, { useEffect, useState } from "react";
import OptionCard from "../components/OptionCard";
import { useLocation } from "react-router-dom";

const options = [
	{
		title: "Login",
		link: "/Login",
		info: "Login as owner/dealer",
		icon: "fas fa-address-card",
	},
	{
		title: "Signup",
		link: "/signup",
		info: "Create a new account",
		icon: "fas fa-plus-square",
	},
];

const Welcome = () => {
	return (
		<div className="container-fluid">
			<h6 className="mb-3 text-center">Welcome!</h6>
			<div className="row g-5 text-center">
				{options?.map((data) => {
					return <OptionCard key={data.title} data={data} />;
				})}
			</div>
		</div>
	);
};

export default Welcome;
