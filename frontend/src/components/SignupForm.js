import React from "react";

const SignupForm = () => {
	return (
		<>
			<div className="container-fluid">
				<h6 className="mb-3 text-start">Sign Up</h6>
				<form className="needs-validation" noValidate="">
					<div className="row g-3">
						<div className="col-6">
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
						<div className="col-6">
							<input
								type="text"
								className="form-control rounded-edges"
								id="address"
								placeholder="Address"
								required=""
							></input>
							<div className="invalid-feedback">
								Please enter your shipping address.
							</div>
						</div>
						<div className="col-sm-6">
							<input
								type="text"
								className="form-control rounded-edges"
								id="firstName"
								placeholder="First name"
								// value=""
								required=""
							></input>
							<div className="invalid-feedback">
								Valid first name is required.
							</div>
						</div>
						<div className="col-6">
							<input
								type="text"
								className="form-control rounded-edges"
								id="city"
								placeholder="City"
								required=""
							></input>
						</div>
						<div className="col-sm-6">
							<input
								type="text"
								className="form-control rounded-edges"
								id="lastName"
								placeholder="Last name"
								// value=""
								required=""
							></input>
							<div className="invalid-feedback">
								Valid last name is required.
							</div>
						</div>
						<div className="col-md-6">
							<input
								type="text"
								className="form-control rounded-edges"
								id="zip"
								placeholder="Zip"
								required=""
							></input>
							<div className="invalid-feedback">Zip code required.</div>
						</div>
						<div className="col-md-6">
							<input
								type="tel"
								className="form-control rounded-edges"
								id="phone-number"
								placeholder="Phone Number"
								required=""
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							/>
							<div className="invalid-feedback">Phone Number is required</div>
						</div>
						<div className="col-md-6">
							<select
								className="form-select rounded-edges"
								id="country"
								required=""
							>
								{/* <option value="">Choose...</option> */}
								<option>Account Type</option>
								<option>Owner</option>
								<option>Dealer</option>
							</select>
							<div className="invalid-feedback">
								Please select an Account Type.
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignupForm;
