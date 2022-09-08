const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ msg: "get all owner-auctions" });
});

router.get("/pending", (req, res) => {
	res.json({ msg: "get all pending owner-auctions" });
});

router.get("/closed", (req, res) => {
	res.json({ msg: "get all closed owner-auctions" });
});

router.patch("/:id", (req, res) => {
	const id = "auction id";
	res.json({ msg: "patch a bid record : " + id });
});

module.exports = router;
