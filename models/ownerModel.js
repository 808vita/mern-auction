const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema(
	{
		car: {
			type: String,
			required: true,
		},
		year: {
			type: String,
			required: true,
		},
		km: {
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
		selectedDealer: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
