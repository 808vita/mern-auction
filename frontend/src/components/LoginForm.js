import React from "react";

const LoginForm = () => {
	return (
		<>
			<div className="container-fluid">
				<h6 className="mb-3 text-start">Sign Up</h6>
				<form className="needs-validation" noValidate="">
					<div className="row g-3">
						<div className="col-12">
							<input
								type="email"
								className="form-control rounded-edges"
								id="email"
								placeholder="Email"
								required=""
							></input>
							<div className="invalid-feedback">
								Please enter a valid email address for shipping updates.
							</div>
						</div>
						<div className="col-12">
							<input
								type="password"
								className="form-control rounded-edges"
								id="password"
								placeholder="password"
								required=""
							></input>
							<div className="invalid-feedback">Please enter password.</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
