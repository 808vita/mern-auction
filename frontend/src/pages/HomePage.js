import React, { useEffect, useState } from "react";
import OptionCard from "../components/OptionCard";

const OwnerOptions = [
	{
		title: "Create Auction",
		link: "/owner/create",
		info: "Create a new car auction.",
		icon: "fas fa-plus-square",
	},
	{
		title: "Open Auctions",
		link: "/owner/pending",
		info: "View your open auctions",
		icon: "fas fa-clipboard-list",
	},
	{
		title: "Closed Auctions",
		link: "/owner/completed",
		info: "View your completed auctions",
		icon: "fas fa-clipboard-check",
	},
	{
		title: "Profile",
		link: "/owner/profile",
		info: "View logged in account details",
		icon: "fas fa-address-card",
	},
];

const DealerOptions = [
	{
		title: "Live Auctions",
		link: "/dealer/auctions",
		info: "View auctions & create bids",
		icon: "fas fa-plus-square",
	},
	{
		title: "Pending Bids",
		link: "/dealer/pending",
		info: "View your open Bids",
		icon: "fas fa-clipboard-list",
	},
	{
		title: "Closed Bids",
		link: "/dealer/completed",
		info: "View your completed Bids",
		icon: "fas fa-clipboard-check",
	},
	{
		title: "Profile",
		link: "/dealer/profile",
		info: "View logged in account details",
		icon: "fas fa-address-card",
	},
];

const HomePage = () => {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		// setOptions(DealerOptions);
		setOptions(OwnerOptions);
	}, []);

	return (
		<div className="container-fluid">
			<h6 className="mb-3 text-center">Welcome!</h6>
			<div className="row g-3 text-center">
				{options?.map((data) => {
					return <OptionCard key={data.title} data={data} />;
				})}
			</div>
		</div>
	);
};

export default HomePage;
