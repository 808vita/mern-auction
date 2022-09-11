export const loginUser = async (email, password, navigate, setNotification) => {
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
			setNotification({ msg: "Login Error " + json.error });
		}

		if (response.ok) {
			console.log("oof", json);

			// setLoading(false);
			localStorage.setItem("user", JSON.stringify(json));

			let goto = "";
			if (json?.isDealer) {
				goto = "/dealer";
			} else if (!json?.isDealer) {
				goto = "/owner";
			}

			navigate(goto);

			setNotification({ msg: "Logged in as " + json?.email });
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
		setNotification({ msg: error });
	}
};

export const signupUser = async (
	email,
	password,
	name,
	accountType,

	navigate,
	setNotification
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
			setNotification({ msg: "Login Error " + json.error });
		}

		if (response.ok) {
			console.log("oof", json);

			localStorage.setItem("user", JSON.stringify(json));
			let goto = "";
			if (json?.isDealer) {
				goto = "/dealer";
			} else if (!json?.isDealer) {
				goto = "/owner";
			}

			navigate(goto);
			setNotification({ msg: "Signed up sucessfully " + json.email });
		}
	} catch (error) {
		console.log("error", error);
		setNotification({ msg: "Signup Error " + error });
	}
};

export const createAuction = async (
	car,
	km,
	year,
	navigate,
	setNotification
) => {
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
			setNotification({ msg: json.error });
		}

		if (response.ok) {
			console.log("oof", json);
			navigate("/owner/pending");
			setNotification({ msg: "Created new auction!" });
		}
	} catch (error) {
		console.log("error", error);
		setNotification({ msg: error });
	}
};

export const acceptBid = async (bid_id, navigate, setNotification) => {
	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch(`/api/owner-auctions/accept-bid/${bid_id}`, {
			method: "PATCH",

			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});

		const json = await response.json();

		if (!response.ok) {
			console.log(json.error);
			setNotification({ msg: json.error });
		}

		if (response.ok) {
			console.log("oof", json);

			// setLoading(false);
			navigate("/owner/completed");
			//navigate after success
			setNotification({ msg: "Bid Accepted! Auction Complete." });
		}
	} catch (error) {
		console.log("error", error);
		setNotification({ msg: error });
	}
};

export const createBid = async (
	auction_id,
	price,
	navigate,
	setNotification
) => {
	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/dealer-auctions/bids", {
			method: "POST",
			body: JSON.stringify({ auction_id, price }),
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});

		const json = await response.json();

		if (!response.ok) {
			console.log(json.error);
			setNotification({ msg: json.error });
		}

		if (response.ok) {
			console.log("oof", json);

			setNotification({ msg: "Added new bid!" });
			navigate("/dealer/pending");
			//navigate after success
		}
	} catch (error) {
		console.log("error", error);
		setNotification({ msg: error });
	}
};

export const getOwnerPendingAuctions = async (setPendingAuctions) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/owner-auctions/pending", {
			method: "GET",
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
			setPendingAuctions(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const getOwnerCompletedAuctions = async (setPendingAuctions) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/owner-auctions/completed", {
			method: "GET",
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
			setPendingAuctions(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const getOwnerBidsOfAcution = async (auction_id, setCheckBids) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch(`/api/owner-auctions/${auction_id}/get-bids`, {
			method: "GET",
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
			setCheckBids(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const getDealerLiveAuctions = async (setPendingAuctions) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/dealer-auctions/live-auctions", {
			method: "GET",
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
			setPendingAuctions(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const getDealerPendingBids = async (setPendingAuctions) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/dealer-auctions/pending-bids", {
			method: "GET",
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
			setPendingAuctions(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const getDealerClosedBids = async (setClosedAuctions) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch("/api/dealer-auctions/closed-bids", {
			method: "GET",
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
			setClosedAuctions(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const checkBid = async (bidId, setCheckBid) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch(`/api/dealer-auctions/${bidId}`, {
			method: "GET",
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
			setCheckBid(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};

export const auctionDeatails = async (auction_id, setCheckBid) => {
	// setLoading(true);

	try {
		const userInfo = JSON.parse(localStorage.getItem("user"));
		const token = `Bearer ${userInfo.token}`;

		const response = await fetch(`/api/dealer-auctions/details/${auction_id}`, {
			method: "GET",
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
			setCheckBid(json);
		}
	} catch (error) {
		console.log("error", error);
		// setLoading(false);
	}
};
