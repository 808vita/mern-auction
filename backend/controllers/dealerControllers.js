const Owner = require("../models/ownerModel");
const Dealer = require("../models/dealerModel");

const mongoose = require("mongoose");

//get all auctions
//need show only auctions with pending status - right now shows every record
const getAuctions = async (req, res) => {
	const auctions = await Owner.find({}).sort({ createdAt: -1 });

	res.status(200).json(auctions);
};

//get all bids
//need show only user created bids - right now shows every bid record

const getBids = async (req, res) => {
	const auctions = await Dealer.find({}).sort({ createdAt: -1 });

	res.status(200).json(auctions);
};

//create new bid
//news validations -> come back to this after frontend
//need checks for auction id
const createBid = async (req, res) => {
	// add to db
	const { auction_id, price } = req.body;
	try {
		const bid = await Dealer.create({ auction_id, price });
		res.status(200).json(bid);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getAuctions,
	getBids,
	createBid,
};
