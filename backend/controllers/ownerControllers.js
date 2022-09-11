const Owner = require("../models/ownerModel");
const Dealer = require("../models/dealerModel");
const User = require("../models/userModel");

const mongoose = require("mongoose");

//get all auctions
//need show only user created auctions - right now shows every record
const getAuctions = async (req, res) => {
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	if (isDealer === true) {
		return res
			.status(404)
			.json({ error: "dealers are not allowed to use owners endpoints" });
	}
	const auctions = await Owner.find({ user_id }).sort({ createdAt: -1 });
	res.status(200).json(auctions);
};

const getOwnerPendingAuctions = async (req, res) => {
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	const status = "open";
	if (isDealer === true) {
		return res
			.status(404)
			.json({ error: "dealers are not allowed to use owners endpoints" });
	}
	const auctions = await Owner.find({ user_id, status }).sort({
		createdAt: -1,
	});
	res.status(200).json(auctions);
};

const getOwnerCompletedAuctions = async (req, res) => {
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	const status = "completed";
	if (isDealer === true) {
		return res
			.status(404)
			.json({ error: "dealers are not allowed to use owners endpoints" });
	}
	const auctions = await Owner.find({ user_id, status }).sort({
		createdAt: -1,
	});
	res.status(200).json(auctions);
};

//get a single auctions

const getAuction = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "no such record" });
	}
	const auction = await Owner.findById(id);

	if (!auction) {
		return res.status(404).json({ error: "no such record" });
	}

	res.status(200).json(auction);
};

//create new auctions

const createAuction = async (req, res) => {
	// add to db
	const { car, year, km } = req.body;
	try {
		const user_id = req.user._id;
		const isDealer = req.isDealer.isDealer;
		console.log(user_id);
		const status = "open";
		const selectedDealer = "dealOpen";
		if (isDealer === true) {
			return res
				.status(404)
				.json({ error: "dealers are not allowed to use owners endpoints" });
		}
		const auction = await Owner.create({
			car,
			year,
			km,
			user_id,
			status,
			selectedDealer,
		});
		res.status(200).json(auction);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// update / accept a bid

const acceptBid = async (req, res) => {
	const { bidId } = req.params;

	const status = "closed";

	if (!mongoose.Types.ObjectId.isValid(bidId)) {
		return res.json(404).json({ error: "no such record" });
	}
	const bid = await Dealer.findById(bidId);
	console.log(bid);
	if (!bid) {
		return res.status(404).json({ error: "no such record" });
	}
	const { auction_id } = bid;
	const setToRejected = await Dealer.updateMany({
		auction_id,
		status: "rejected",
	});
	let SelectedBid = await Dealer.findByIdAndUpdate(bidId, {
		status: "selected",
	});
	SelectedBid = await Dealer.findById(bidId);
	// console.log(SelectedBid);

	const { user_id: selectedDealer } = SelectedBid;
	let completeAuction = await Owner.findByIdAndUpdate(auction_id, {
		status: "completed",
		selectedDealer: selectedDealer,
	});

	// completeAuction = await Owner.findById(completeAuction._id);

	let dealerDetails = await User.findById(selectedDealer);

	// this could be threat all details can be modified
	//create status key:value in model
	// let only status and bid _id from dealer to be fed in
	//might need to validate the dealer bid contains the current auction id
	//but seems extensive -> add if time allows

	// const auction = await Owner.findOneAndUpdate(
	// 	{ _id: id },
	// 	{
	// 		status
	// 	}
	// );

	// if (!auction) {
	// 	return res.status(400).json({
	// 		error: "no such workout",
	// 	});
	// }

	// res.status(200).json(auction);

	res.status(200).json({ SelectedBid, completeAuction, dealerDetails });
};

const getBids = async (req, res) => {
	const { auction_id } = req.params;
	const user_id = req.user._id;
	const isDealer = req.isDealer.isDealer;
	const status = "open";

	if (!mongoose.Types.ObjectId.isValid(auction_id)) {
		return res.json(404).json({ error: "no such record" });
	}

	const auctions = await Dealer.find({ auction_id }).sort({ createdAt: -1 });
	// console.log(auctions);
	if (!auctions) {
		return res.status(404).json({ error: "no such record" });
	}

	res.status(200).json(auctions);
};

module.exports = {
	getAuctions,
	getAuction,
	createAuction,
	acceptBid,
	getBids,
	getOwnerPendingAuctions,
	getOwnerCompletedAuctions,
};
