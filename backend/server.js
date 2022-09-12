require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dealerRoutes = require("./routes/dealerAuctions");
const ownerRoutes = require("./routes/ownerAuctions");
const userRoutes = require("./routes/users");
const path = require("path");
const app = express();

app.use(express.json());

//middleware
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

const port = process.env.PORT;

//routes
app.use("/api/dealer-auctions", dealerRoutes);

app.use("/api/owner-auctions", ownerRoutes);

app.use("/api/user", userRoutes);

// ----------------------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname1, "/build")));

	app.get("*", (req, res) =>
		// res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
		res.sendFile(path.join(__dirname1, "/build/index.html"))
	);
} else {
	app.get("/", (req, res) => {
		res.send("API is running..");
	});
}

// ----------------------------------------------------

mongoose
	.connect(process.env.MONG_URI)
	.then(() => {
		app.listen(port, () => {
			console.log(` connected to db & Listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
