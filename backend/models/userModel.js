const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	isDealer: {
		type: Boolean,
		required: true,
	},
});

//static signup method
userSchema.statics.signup = async function (email, password, isDealer) {
	if (!email || !password || typeof isDealer !== "boolean") {
		throw Error("All fields must be filled with valid details");
	}

	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}

	const exists = await this.findOne({ email });
	if (exists) {
		throw Error("Email already in use");
	}
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({
		email,
		password: hash,
		isDealer,
	});

	return user;
};
module.exports = mongoose.model("User", userSchema);
