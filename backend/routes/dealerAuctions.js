const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ msg: "get all dealer auctions" });
});

router.get("/pending", (req, res) => {
	res.json({ msg: "get all pending dealer auctions" });
});

router.get("/closed", (req, res) => {
	res.json({ msg: "get all closed dealer auctions" });
});

router.post("/bid", (req, res) => {
	const id = "auction id";
	res.json({ msg: "post a bid record : " + id });
});

module.exports = router;
