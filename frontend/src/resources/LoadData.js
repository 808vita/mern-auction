export const loginUser = async (
	email,
	password,
	setAuth,
	setUserInfo,
	navigate
) => {
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
	setUserInfo,
	navigate
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

export const createAuction = async (car, km, year, navigate) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/owner-auctions", {
			method: "POST",
			body: JSON.stringify({ car, km, year }),
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});

		const json = await response.json();

		if (!response.ok) {
			console.log(json.error);
			// setLoading(false);
		}

		if (response.ok) {
			console.log("oof", json);

			// setLoading(false);
			//navigate
			//navigate after success
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};
