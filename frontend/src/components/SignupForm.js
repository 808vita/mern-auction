import React, { useState } from "react";
import { signupUser } from "../resources/LoadData";
import { LongButton } from "./ButtonComponents";

const SignupForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [accountType, setAccountType] = useState("Owner");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signupUser(email, password, name, accountType);
	};

	return (
		<>
			<div className="container-fluid center-form">
				<h6 className="mb-3 text-center">Sign Up</h6>
				<form className="signup" onSubmit={handleSubmit}>
					<div className="row g-3">
						<div className="col-sm-12">
							<input
								type="email"
								className="form-control rounded-edges"
								id="email"
								placeholder="Email"
								required
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							></input>
							<div className="invalid-feedback">
								Please enter a valid email address for shipping updates.
							</div>
						</div>

						<div className="col-sm-12">
							<input
								type="text"
								className="form-control rounded-edges"
								id="name"
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
								value={name}
								required=""
							></input>
							<div className="invalid-feedback">Valid name is required.</div>
						</div>
						<div className="col-sm-12">
							<input
								type="password"
								className="form-control rounded-edges"
								id="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required=""
							></input>
						</div>

						<div className="col-sm-12">
							<select
								className="form-select rounded-edges"
								id="account-type"
								required=""
								onChange={(e) => setAccountType(e.target.value)}
								value={accountType}
							>
								{/* <option value="">Choose...</option> */}

								<option>Owner</option>
								<option>Dealer</option>
							</select>
							<div className="invalid-feedback">
								Please select an Account Type.
							</div>
						</div>
						<LongButton text={"SIGN UP"} type={"submit"} color={"green"} />
					</div>
				</form>
			</div>
		</>
	);
};

export default SignupForm;
