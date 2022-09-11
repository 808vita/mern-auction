const express = require("express");
const {
	getAuctions,
	getBids,
	createBid,
	getPendingBids,
	getBid,
} = require("../controllers/dealerControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for workout routes
router.use(requireAuth);

router.get("/", getAuctions);
router.get("/bids", getBids);

router.get("/live-auctions", getAuctions);
router.get("/pending-bids", getPendingBids);

router.get("/closed", (req, res) => {
	res.json({ msg: "get all closed dealer auctions" });
});

router.post("/bids", createBid);

router.get("/:id", getBid);

module.exports = router;
