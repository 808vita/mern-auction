const express = require("express");
const {
	getAuctions,
	getBids,
	createBid,
} = require("../controllers/dealerControllers");

const router = express.Router();

router.get("/", getAuctions);
router.get("/bids", getBids);

router.get("/pending", (req, res) => {
	res.json({ msg: "get all pending dealer auctions" });
});

router.get("/closed", (req, res) => {
	res.json({ msg: "get all closed dealer auctions" });
});

router.post("/bids", createBid);

module.exports = router;
