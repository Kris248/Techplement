const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Profile = require("../models/Profile");

const secretKey = process.env.JWT_SECRET || "DKJAB@42JBK22jbef82920&0";

async function signup(req, res) {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    const userProfile = new Profile({
      userId: user._id,
    });

    await userProfile.save();

    res.status(201).json({ message: "You are registered! Now Please login.", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: "User Found! Please sign-up using different mail." });
  }
}


async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ error: "Incorrect Password/Mail. Please Try again." });
    }

    // if found then create jwt token
    const exp = Date.now() + 1000 * 3600 * 24 * 30; // expire date
    const token = jwt.sign({ sub: user._id, exp }, secretKey);

    // setting cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ message: "Welcome to Techplement.", token});
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Oops! Some error occurred during login." });
  }
}

async function logout(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Please register first. User not found." });
    }

    res.clearCookie("Authorization");
    res.status(200).json({ message: "Logged out☹️.See you soon!🙋‍♂️" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ error: "Oops! Some error occurred during logout." });
  }
}

module.exports = {
  signup,
  login,
  logout,
};
