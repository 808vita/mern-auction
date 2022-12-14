const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, isDealer) => {
	return jwt.sign({ _id, isDealer }, process.env.SECRET, { expiresIn: "10d" });
};
//login user

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);
		const { isDealer, name } = user;

		// create a token

		const token = createToken(user._id, user.isDealer);

		res.status(200).json({ email, isDealer, name, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//signup user

const signupUser = async (req, res) => {
	const { email, password, isDealer, name } = req.body;

	try {
		const user = await User.signup(email, password, isDealer, name);

		//create a token

		const token = createToken(user._id, user.isDealer);

		res.status(200).json({ email, isDealer, name, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { signupUser, loginUser };
