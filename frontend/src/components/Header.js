import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useNavigate, useLocation } from "react-router-dom";

const OwnerOptions = [
	{
		title: "Create Auction",
		link: "/owner/create",
	},
	{
		title: "Pending Auctions",
		link: "/owner/pending",
	},
	{
		title: "Closed Auctions",
		link: "/owner/completed",
	},
	// {
	// 	title: "Profile",
	// 	link: "/owner/profile",
	// 	info: "View logged in account details",
	// 	icon: "fas fa-address-card",
	// },
];

const DealerOptions = [
	{
		title: "Live Auctions",
		link: "/dealer/auctions",
	},
	{
		title: "Pending Bids",
		link: "/dealer/pending",
	},
	{
		title: "Closed Bids",
		link: "/dealer/completed",
	},
	// {
	// 	title: "Profile",
	// 	link: "/dealer/profile",
	// 	info: "View logged in account details",
	// 	icon: "fas fa-address-card",
	// },
];

const Header = () => {
	// const { loading, setLoading, Auth, setAuth, userInfo, setUserInfo, logout } =
	// 	useGlobalContext();

	const navigate = useNavigate();
	const [navCompass, setNavCompass] = useState(null);
	const [profilePath, setProfilePath] = useState(null);
	const userInfo = JSON.parse(localStorage.getItem("user"));
	const path = useLocation();
	const logout = () => {
		localStorage.removeItem("user");
		navigate("/");
	};

	useEffect(() => {
		if (!userInfo) {
			setProfilePath("/");
			return navigate("/");
		} else if (userInfo?.isDealer) {
			setNavCompass(DealerOptions);
			setProfilePath("/dealer");
		} else if (!userInfo?.isDealer) {
			setNavCompass(OwnerOptions);
			setProfilePath("/owner");
		} else {
			setProfilePath("/");
		}
	}, [userInfo]);

	useEffect(() => {
		const pathList = ["/", "/login", "/signup"];
		const currentPath = path.pathname;

		if (!pathList.includes(currentPath)) {
			console.log("oof includes", path.pathname);
		}

		// console.log(path.pathname);
	}, [path]);

	return (
		<div className="container-xxl">
			<header className="d-flex flex-wrap align-items-center justify-content-around justify-content-md-around py-3 mb-3 border-bottom">
				<span
					className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
					// href="https://github.com/808vita?tab=repositories"
					onClick={() => navigate(profilePath)}
				>
					<img
						src="https://avatars.githubusercontent.com/u/97225946?v=4"
						height={50}
						className="logo-img-cat"
						alt="memecat"
					/>
					<h4>
						<span className="logo-e">E</span>-Shop
					</h4>
				</span>

				<div className="col-md-3 text-end">
					{/* <button type="button" className="btn">
						<i className="fas fa-search h4"></i>
					</button>
					<button type="button" className="btn">
						<i className="fas fa-shopping-cart h4"></i>
					</button> */}
					{userInfo && (
						<button
							className="btn text-decoration-none dropdown-toggle outline-button"
							id="dropdownUser1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i className="far fa-compass h4 "></i>
						</button>
					)}
					<ul
						className="dropdown-menu text-small"
						aria-labelledby="dropdownUser1"
					>
						{navCompass?.map((data) => (
							<li key={data.title}>
								<button
									className="dropdown-item"
									onClick={() => {
										navigate(data.link);
									}}
								>
									{data.title}
								</button>
							</li>
						))}
					</ul>
					<button
						type="button"
						className="btn text-decoration-none dropdown-toggle outline-button"
						id="dropdownUser2"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<i className="far fa-user h4"></i>
					</button>

					<ul
						className="dropdown-menu text-small"
						aria-labelledby="dropdownUser2"
					>
						{userInfo ? (
							<>
								<li>
									<button
										className="dropdown-item"
										onClick={() => navigate(profilePath + "/profile")}
									>
										Profile
									</button>
								</li>
								<li>
									<button className="dropdown-item" onClick={logout}>
										Log Out
									</button>
								</li>
							</>
						) : (
							<>
								<li>
									<button
										className="dropdown-item"
										onClick={() => navigate("/login")}
									>
										Login
									</button>
								</li>
								<li>
									<button
										className="dropdown-item"
										onClick={() => navigate("/signup")}
									>
										Signup
									</button>
								</li>
							</>
						)}
					</ul>
				</div>
			</header>
		</div>
	);
};

export default Header;
