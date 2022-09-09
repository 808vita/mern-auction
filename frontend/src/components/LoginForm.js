import React, { useState } from "react";
import { loginUser } from "../resources/LoadData";
import { LongButton } from "./ButtonComponents";
import { useGlobalContext } from "../hooks/useGlobalContext";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { setAuth, setUserInfo } = useGlobalContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await loginUser(email, password, setAuth, setUserInfo);
	};

	return (
		<>
			<div className="container-fluid center-form">
				<h6 className="mb-3 text-center">Login</h6>
				<form className="login" onSubmit={handleSubmit}>
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
								type="password"
								className="form-control rounded-edges"
								id="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required
							></input>
						</div>

						<LongButton text={"Login"} type={"submit"} color={"green"} />
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
