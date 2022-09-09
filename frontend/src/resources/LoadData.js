export const loginUser = async (email, password, setAuth, setUserInfo) => {
	// setLoading(true);

	try {
		const response = await fetch("/api/user/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await response.json();

		if (!response.ok) {
			console.log(json.error);
			// setLoading(false);
			setAuth(false);
		}

		if (response.ok) {
			console.log("oof", json);
			setAuth(true);
			setUserInfo(json);
			// setLoading(false);
			localStorage.setItem("user", JSON.stringify(json));
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
		setAuth(false);
	}
};

export const signupUser = async (
	email,
	password,
	name,
	accountType,
	setAuth,
	setUserInfo
) => {
	// setLoading(true);

	let isDealer = "";
	if (accountType === "Owner") {
		isDealer = false;
	} else if (accountType === "Dealer") {
		isDealer = true;
	}
	console.log(accountType);
	console.log({ email, password, name, isDealer });
	try {
		const response = await fetch("/api/user/signup", {
			method: "POST",
			body: JSON.stringify({ email, password, name, isDealer }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await response.json();

		if (!response.ok) {
			console.log(json.error);
			// setLoading(false);
			setAuth(false);
		}

		if (response.ok) {
			console.log("oof", json);
			// setLoading(false);
			setAuth(true);
			setUserInfo(json);
			localStorage.setItem("user", JSON.stringify(json));
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
		setAuth(false);
	}
};
