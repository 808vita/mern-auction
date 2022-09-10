import React from "react";

const Header = () => {
	return (
		<div className="container-xxl">
			<header className="d-flex flex-wrap align-items-center justify-content-around justify-content-md-around py-3 mb-3 border-bottom">
				<a
					className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
					href="https://github.com/808vita?tab=repositories"
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
				</a>

				<div className="col-md-3 text-end">
					{/* <button type="button" className="btn">
						<i className="fas fa-search h4"></i>
					</button>
					<button type="button" className="btn">
						<i className="fas fa-shopping-cart h4"></i>
					</button> */}
					<button
						className="btn text-decoration-none dropdown-toggle outline-button"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<i className="far fa-compass h4 "></i>
					</button>
					<ul
						className="dropdown-menu text-small"
						aria-labelledby="dropdownUser1"
					>
						<li>
							<button className="dropdown-item" href="#">
								New Auction
							</button>
						</li>
						<li>
							<button className="dropdown-item" href="#">
								Open Auctions / Bids
							</button>
						</li>
						<li>
							<button className="dropdown-item" href="#">
								Closed auctions / Bids
							</button>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<button className="dropdown-item" href="#">
								Sign out
							</button>
						</li>
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
						<li>
							<button className="dropdown-item" href="#">
								New Auction
							</button>
						</li>
						<li>
							<button className="dropdown-item" href="#">
								Open Auctions / Bids
							</button>
						</li>
						<li>
							<button className="dropdown-item" href="#">
								Closed auctions / Bids
							</button>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<button className="dropdown-item" href="#">
								Sign out
							</button>
						</li>
					</ul>
				</div>
			</header>
		</div>
	);
};

export default Header;
