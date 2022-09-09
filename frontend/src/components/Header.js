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

				<ul className="nav col-12 col-md-auto d-flex align-items-center mb-2 justify-content-around mb-md-0 gap-5 ">
					<li>
						<p className="nav-link px-2 link-secondary">Pending</p>
					</li>
					<li>
						<p className="nav-link px-2 link-dark">Closed</p>
					</li>
					<li>
						<p className="nav-link px-2 link-dark">Create</p>
					</li>
				</ul>

				<div className="col-md-3 text-end">
					{/* <button type="button" className="btn">
						<i className="fas fa-search h4"></i>
					</button>
					<button type="button" className="btn">
						<i className="fas fa-shopping-cart h4"></i>
					</button> */}
					<button type="button" className="btn">
						<i className="far fa-user h4"></i>
					</button>
				</div>
			</header>
		</div>
	);
};

export default Header;
