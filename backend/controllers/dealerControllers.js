const Owner = require("../models/ownerModel");
const Dealer = require("../models/dealerModel");

const mongoose = require("mongoose");

//get all auctions
//need show only auctions with pending status - right now shows every record
const getAuctions = async (req, res) => {
	const status = "open";
	const auctions = await Owner.find({ status }).sort({ createdAt: -1 });

	res.status(200).json(auctions);
};

const getBid = async (req, res) => {
	const user_id = req.user._id;
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "no such record" });
	}
	const bid = await Dealer.findOne({ auction_id: id, user_id });

	if (!bid) {
		return res.status(404).json({ error: "no such record" });
	}

	res.status(200).json(bid);
};

const getOwnerDetails = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "no such record" });
	}
	const details = await Owner.findById(id);

	if (!details) {
		return res.status(404).json({ error: "no such record" });
	}

	res.status(200).json(details);
};

//get all bids
//need show only user created bids - right now shows every bid record

const getBids = async (req, res) => {
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	if (isDealer === false) {
		return res
			.status(404)
			.json({ error: "owners are not allowed to use dealers endpoints" });
	}
	const auctions = await Dealer.find({ user_id }).sort({ createdAt: -1 });
	res.status(200).json(auctions);
};

const getPendingBids = async (req, res) => {
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	const status = "open";
	if (isDealer === false) {
		return res
			.status(404)
			.json({ error: "owners are not allowed to use dealers endpoints" });
	}
	const auctions = await Dealer.find({ user_id, status }).sort({
		createdAt: -1,
	});
	res.status(200).json(auctions);
};

const getClosedBids = async (req, res) => {
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	const status = "open";
	if (isDealer === false) {
		return res
			.status(404)
			.json({ error: "owners are not allowed to use dealers endpoints" });
	}
	const auctions = await Dealer.find({ user_id, status: { $ne: status } }).sort(
		{
			createdAt: -1,
		}
	);
	res.status(200).json(auctions);
};

//create new bid
//news validations -> come back to this after frontend
//need checks for auction id
const createBid = async (req, res) => {
	// add to db
	const { auction_id, price } = req.body;
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	const name = req.name.name;
	const status = "open";

	if (isDealer === false) {
		return res
			.status(404)
			.json({ error: "owners are not allowed to use dealers endpoints" });
	}

	if (!mongoose.Types.ObjectId.isValid(auction_id)) {
		return res.status(404).json({ error: "no such record" });
	}
	const auction = await Owner.findById(auction_id);
	// console.log(auction);
	if (!auction) {
		return res.status(404).json({ error: "no such record" });
	}

	const existBid = await Dealer.find({ auction_id, user_id });
	// console.log("oof", existBid);
	if (existBid.length > 0) {
		return res.status(404).json({ error: "already bid exists" });
	}

	try {
		const bid = await Dealer.create({
			auction_id,
			price,
			user_id,
			status,
			name,
		});
		res.status(200).json(bid);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getAuctions,
	getBids,
	createBid,
	getPendingBids,
	getBid,
	getClosedBids,
	getOwnerDetails,
};
