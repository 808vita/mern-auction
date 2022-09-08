const Owner = require("../models/ownerModel");

const mongoose = require("mongoose");

//get all auctions
//need show only user created auctions - right now shows every record
const getAuctions = async (req, res) => {
	const auctions = await Owner.find({}).sort({ createdAt: -1 });

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
		const auction = await Owner.create({ car, year, km });
		res.status(200).json(auction);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// update / accept a bid

const acceptBid = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.json(404).json({ error: "no such record" });
	}

	// this could be threat all details can be modified
	//create status key:value in model
	// let only status and bid _id from dealer to be fed in
	//might need to validate the dealer bid contains the current auction id
	//but seems extensive -> add if time allows

	const auction = await Owner.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!workout) {
		return res.status(400).json({
			error: "no such workout",
		});
	}

	res.status(200).json(workout);
};

module.exports = {
	getAuctions,
	getAuction,
	createAuction,
	acceptBid,
};
