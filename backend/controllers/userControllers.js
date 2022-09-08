const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, isDealer) => {
	return jwt.sign({ _id, isDealer }, process.env.SECRET, { expiresIn: "10d" });
};
//login user

const loginUser = async (req, res) => {
	res.json({ mssg: "login user" });
};

//signup user

const signupUser = async (req, res) => {
	const { email, password, isDealer } = req.body;

	try {
		const user = await User.signup(email, password, isDealer);

		//create a token

		const token = createToken(user._id, user.isDealer);

		res.status(200).json({ email, isDealer, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { signupUser, loginUser };
