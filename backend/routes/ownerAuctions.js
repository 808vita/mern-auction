const express = require("express");
const {
	getAuctions,
	getAuction,
	createAuction,
	acceptBid,
} = require("../controllers/ownerControllers");

const router = express.Router();

router.get("/", getAuctions);

router.get("/:id", getAuction);

router.get("/pending", (req, res) => {
	res.json({ msg: "get all pending owner-auctions" });
});

router.get("/closed", (req, res) => {
	res.json({ msg: "get all closed owner-auctions" });
});

router.post("/", createAuction);

router.patch("/:id", acceptBid);

module.exports = router;
