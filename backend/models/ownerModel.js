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
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
