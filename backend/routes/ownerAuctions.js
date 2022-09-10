const express = require("express");
const {
	getAuctions,
	getAuction,
	createAuction,
	acceptBid,
	getBids,
	getOwnerPendingAuctions,
} = require("../controllers/ownerControllers");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for workout routes
router.use(requireAuth);

router.get("/", getAuctions);
router.get("/pending", getOwnerPendingAuctions);

router.get("/:id", getAuction);

router.get("/:auction_id/get-bids", getBids);

router.get("/pending", (req, res) => {
	res.json({ msg: "get all pending owner-auctions" });
});

router.get("/closed", (req, res) => {
	res.json({ msg: "get all closed owner-auctions" });
});

router.post("/", createAuction);

router.patch("/accept-bid/:bidId", acceptBid);

module.exports = router;
