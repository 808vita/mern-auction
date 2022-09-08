require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

//middleware
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

const port = process.env.PORT;

//routes
app.get("/", (req, res) => {
	res.json({ msg: `Listening on port ${port}` });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
