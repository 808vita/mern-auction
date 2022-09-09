const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dealerSchema = new Schema(
	{
		auction_id: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Dealer", dealerSchema);
