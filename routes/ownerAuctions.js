const express = require("express");
const {
	getAuctions,
	getAuction,
	createAuction,
	acceptBid,
	getBids,
	getOwnerPendingAuctions,
	getOwnerCompletedAuctions,
} = require("../controllers/ownerControllers");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for workout routes
router.use(requireAuth);

router.get("/", getAuctions);
router.get("/pending", getOwnerPendingAuctions);
router.get("/completed", getOwnerCompletedAuctions);

router.get("/:auction_id/get-bids", getBids);

router.post("/", createAuction);

router.patch("/accept-bid/:bidId", acceptBid);

router.get("/:id", getAuction);
module.exports = router;
